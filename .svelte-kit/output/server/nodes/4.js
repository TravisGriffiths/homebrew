

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/5eAPI/monsters/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.57666a07.js","_app/immutable/chunks/index.13cdf78d.js","_app/immutable/chunks/Table.9ecff711.js"];
export const stylesheets = ["_app/immutable/assets/Table.85e0db56.css"];
export const fonts = [];
