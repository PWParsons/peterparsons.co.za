const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([".nojekyll"]),
	_: {
		mime: {},
		entry: {"file":"start-7d38f3ae.js","js":["start-7d38f3ae.js","chunks/vendor-6a679985.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js'))
		],
		routes: [
			
		]
	}
});
