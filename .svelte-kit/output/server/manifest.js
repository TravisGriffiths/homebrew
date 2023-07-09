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
		client: {"start":"_app/immutable/entry/start.8189640c.js","app":"_app/immutable/entry/app.e8d37d57.js","imports":["_app/immutable/entry/start.8189640c.js","_app/immutable/chunks/index.13cdf78d.js","_app/immutable/chunks/singletons.7b5cd3b2.js","_app/immutable/chunks/index.36475e15.js","_app/immutable/entry/app.e8d37d57.js","_app/immutable/chunks/index.13cdf78d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/5eAPI",
				pattern: /^\/5eAPI\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/5eAPI/monsters",
				pattern: /^\/5eAPI\/monsters\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/5eAPI/spells",
				pattern: /^\/5eAPI\/spells\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
