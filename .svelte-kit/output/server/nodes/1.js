

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ba3a6fdd.js","_app/immutable/chunks/index.13cdf78d.js","_app/immutable/chunks/singletons.7b5cd3b2.js","_app/immutable/chunks/index.36475e15.js"];
export const stylesheets = [];
export const fonts = [];
