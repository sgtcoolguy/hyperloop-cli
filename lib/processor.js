/**
 * CLI processor
 */
var EventEmitter = require('events').EventEmitter,
	argRE = /^--([\w-_]+)(?:=(.*))?/;

/**
 * you're probably asking "why not use commander?".
 * short answer: if you want to do something like
 * --cflags "-DDEBUG=1", it will try and treat the
 * value of cflags as another command.  we need to
 * handle this specifically and unfortunately, it
 * would have been too much work to fork commander
 * to change it's behavior.  I also couldn't seem to
 * override it and subclass it to change this behavior
 * easily either.  So, we have a custom command line
 * arg parser.
 */
function Processor() {
	this.options = {};
	this.args = [];
}

Processor.prototype.__proto__ = EventEmitter.prototype;

/**
 * parse out the command line into a specific set of options and
 * arguments.
 */
Processor.prototype.parse = function(callback) {
	var self = this;
	process.argv.slice(2).forEach(function(arg){
		var m = argRE.exec(arg);
		if (m) {
			var key = m[1],
				value = m[2] || true;
			m = /^no-(\w+)/.exec(key);
			if (m) {
				key = m[1];
				value = value==='0' || value==='false' ? true : false;
			}
			var keys = [key];
			if (key.indexOf('-')!==-1) {
				// place 'foo-bar' in also as 'foo_bar'
				keys.push(key.replace(/-/g,'_'));
			}
			keys.forEach(function(key){
				if (key in self.options) {
					// turn it in to an array if multiple exist on command line
					if (Array.isArray(self.options[key])) {
						self.options[key].push(value);
					} else {
						self.options[key] = [self.options[key], value];
					}
				}
				else {
					self.options[key] = value;
				}
			});
			self.emit(key, value);
		}
		else {
			self.args.push(arg);
		}
	});
	callback && callback(null, this.options, this.args);
};

Processor.prototype.rpad = function(str, len) {
	var s = str,
		l = len - str.length;
	for (var c=0;c<l;c++) {
		s+=' ';
	}
	return s;
}

Processor.prototype.padRight = function(s,l) {
	var ns = s;
	for (var c=s.length;c<l;c++) {
		ns+=' ';
	}
	return ns;
}

module.exports = Processor;
