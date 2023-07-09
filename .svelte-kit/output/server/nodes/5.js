

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/5eAPI/spells/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.487b4115.js","_app/immutable/chunks/index.13cdf78d.js"];
export const stylesheets = [];
export const fonts = [];
