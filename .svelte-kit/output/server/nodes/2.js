

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.db4eb298.js","_app/immutable/chunks/index.6dba6488.js"];
export const stylesheets = ["_app/immutable/assets/2.abaecb3d.css"];
export const fonts = [];
