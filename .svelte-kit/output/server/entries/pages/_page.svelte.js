import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Note_svelte_svelte_type_style_lang = "";
const css = {
  code: '.note.svelte-1yfk3yd{font-family:ScalySansRemake;@apply bg-tertiary-500;;border-style:solid;border-width:1px;border-image:url("./noteBorder.png") 12 stretch;border-image-outset:9px 0px;border-image-width:11px;padding:0.13cm 0.16cm;box-shadow:1px 4px 14px #888;margin:1em 0}',
  map: null
};
const Note = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="note svelte-1yfk3yd">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1 class="text-primary-500">The Dustlands</h1>

	The Dustlands are merely the wreckage of a once rich and verdant world, called Grabin, rendered to ruins and sand by the great Cataclysm. Civilization clings to the poles where the cold and icecaps allow for enough water to allow for grassy tundra. The equatorial regions are heat baked death zones full of nothing but rock, sand and scorching death...and the treasures of the World that Was.

	<h2>Secondary</h2>


	<h3>Tertiary</h3>

	<h4>Fourth</h4>

	<h5>Fifth</h5>

	<h6>Sixth</h6>

	${validate_component(Note, "Note").$$render($$result, {}, {}, {
    default: () => {
      return `This is a note for highlighting information
	`;
    }
  })}</article>`;
});
export {
  Page as default
};
