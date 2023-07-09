

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/5eAPI/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.b8b614b5.js","_app/immutable/chunks/index.13cdf78d.js"];
export const stylesheets = [];
export const fonts = [];
