/**
 * simple hook that will log all hook events (both pre and post)
 */
exports.version = '>0.0.0';

exports.init = function(cli, log) {
	cli.on('*', {
		pre: function(data) {
			log.trace('[PRE-HOOK]  ⌁'.blue.bold,data.type.green);
		},
		post: function(data) {
			log.trace('[POST-HOOK] ⌁'.blue.bold,data.type.green);
		}
	});
}
