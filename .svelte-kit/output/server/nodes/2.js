

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f144e437.js","_app/immutable/chunks/index.13cdf78d.js","_app/immutable/chunks/Table.9ecff711.js"];
export const stylesheets = ["_app/immutable/assets/2.abb63e53.css","_app/immutable/assets/Table.85e0db56.css"];
export const fonts = [];
