

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.79ec02d8.js","_app/immutable/chunks/index.6dba6488.js","_app/immutable/chunks/singletons.2e0e17d4.js"];
export const stylesheets = [];
export const fonts = [];
