export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","fonts/Bookinsanity/Bookinsanity Bold Italic.otf","fonts/Bookinsanity/Bookinsanity Bold.otf","fonts/Bookinsanity/Bookinsanity Italic.otf","fonts/Bookinsanity/Bookinsanity.otf","fonts/Dungeon Drop Case/Dungeon Drop Case.otf","fonts/Mr Eaves/Mr Eaves Small Caps.otf","fonts/Nodesto Caps Condensed/Nodesto Caps Condensed.otf","fonts/Nodesto Caps Condensed/NodestoCapsCondensed-Bold Italic.otf","fonts/Nodesto Caps Condensed/NodestoCapsCondensed-Bold.otf","fonts/Nodesto Caps Condensed/NodestoCapsCondensed-Italic.otf","fonts/Scaly Sans/Scaly Sans Bold Italic.otf","fonts/Scaly Sans/Scaly Sans Bold.otf","fonts/Scaly Sans/Scaly Sans Italic.otf","fonts/Scaly Sans/Scaly Sans.otf","fonts/Scaly Sans Caps/Scaly Sans Caps Bold Italic.otf","fonts/Scaly Sans Caps/Scaly Sans Caps Bold.otf","fonts/Scaly Sans Caps/Scaly Sans Caps Italic.otf","fonts/Scaly Sans Caps/Scaly Sans Caps.otf","fonts/Solbera Imitation/Solbera Imitation.otf","fonts/Zatanna Misdirection/Zatanna Misdirection Bold Italic.otf","fonts/Zatanna Misdirection/Zatanna Misdirection Bold.otf","fonts/Zatanna Misdirection/Zatanna Misdirection Italic.otf","fonts/Zatanna Misdirection/Zatanna Misdirection.otf","noteBorder.png","parchmentBackground.jpg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".otf":"font/otf",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.1a969c95.js","app":"_app/immutable/entry/app.babe003b.js","imports":["_app/immutable/entry/start.1a969c95.js","_app/immutable/chunks/index.6dba6488.js","_app/immutable/chunks/singletons.2e0e17d4.js","_app/immutable/entry/app.babe003b.js","_app/immutable/chunks/index.6dba6488.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
