import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { T as Table } from "../../chunks/Table.js";
const Note_svelte_svelte_type_style_lang = "";
const css = {
  code: '.note.svelte-15ehghs{font-family:ScalySansRemake;@apply bg-tertiary-500;;border-style:solid;border-width:1px;border-image:url("https://s3.us-west-2.amazonaws.com/travis.griffiths.files/noteBorder.png") 12 stretch;border-image-outset:9px 0px;border-image-width:11px;padding:0.13cm 0.16cm;box-shadow:1px 4px 14px #888;margin:1em 0}',
  map: null
};
const Note = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="note svelte-15ehghs">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const exampleTableHeader = {
    language: "Language",
    speakers: "Common Speakers"
  };
  const exampleTableData = [
    {
      language: "Draconic",
      speakers: "Dragons, Kobolds and scholars"
    },
    {
      language: "Abbysal",
      speakers: "Deamons and cultists"
    },
    { language: "Elvish", speakers: "elves" },
    {
      language: "Ignan",
      speakers: "Elementals, Salamanders and Effrit"
    }
  ];
  return `<article><h1>Title</h1>

	<h2>Secondary</h2>


	<h3>Tertiary</h3>

	<h4>Fourth</h4>

	<h5>Fifth</h5>

	<h6>Sixth</h6>

	<article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</article>


	${validate_component(Note, "Note").$$render($$result, {}, {}, {
    default: () => {
      return `This is a note for highlighting information
	`;
    }
  })}

	
	
	<div class="my-12"></div>


	${validate_component(Table, "Table").$$render(
    $$result,
    {
      header: exampleTableHeader,
      tableData: exampleTableData
    },
    {},
    {}
  )}</article>`;
});
export {
  Page as default
};
