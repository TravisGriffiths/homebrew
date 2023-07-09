

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.8c6b0670.js","_app/immutable/chunks/index.13cdf78d.js","_app/immutable/chunks/index.36475e15.js"];
export const stylesheets = ["_app/immutable/assets/0.0b2278fc.css"];
export const fonts = [];
