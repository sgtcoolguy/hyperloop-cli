/**
 * simple hook that will log all hook events (both pre and post)
 */
var log = require('hyperloop-common').log;

exports.version = '>0.0.0';

exports.init = function(cli) {
	cli.on('*', {
		pre: function(data) {
			log.trace('[PRE-HOOK]  ⌁'.blue.bold,data.type.green);
		},
		post: function(data) {
			log.trace('[POST-HOOK] ⌁'.blue.bold,data.type.green);
		}
	});
}
