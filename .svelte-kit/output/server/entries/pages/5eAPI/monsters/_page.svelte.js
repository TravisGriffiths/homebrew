import { c as create_ssr_component, o as is_promise, n as noop, e as escape, v as validate_component } from "../../../../chunks/index2.js";
import { T as Table } from "../../../../chunks/Table.js";
const ENDPOINT = "https://www.dnd5eapi.co/api";
const getAllMonsters = async () => {
  try {
    const fetchResult = await fetch(`${ENDPOINT}/monsters`);
    const monsters = await fetchResult.json();
    return monsters;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const monsterListHeader = {
    index: "Index",
    name: "Name",
    url: "Link"
  };
  return `<h1>5e Monsters
</h1>

<section>This is a interactive list of monsters from The 5e API mostly as a jump off point for how you could integrate this into your own creations
</section>

${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
   <h2>Loading...</h2>
`;
    }
    return function(monsterList) {
      return ` 
   <h4>Fetched ${escape(monsterList.count)} monsters</h4>
   ${validate_component(Table, "Table").$$render(
        $$result,
        {
          tableData: monsterList.results,
          header: monsterListHeader
        },
        {},
        {}
      )}
`;
    }(__value);
  }(getAllMonsters())}`;
});
export {
  Page as default
};
