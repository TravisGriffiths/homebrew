import { c as create_ssr_component, p as each, e as escape } from "./index2.js";
const Table_svelte_svelte_type_style_lang = "";
const css = {
  code: "tr.svelte-1jxqbf0:nth-child(even){@apply bg-tertiary-500;}",
  map: null
};
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tableData = [] } = $$props;
  let { header = {} } = $$props;
  if ($$props.tableData === void 0 && $$bindings.tableData && tableData !== void 0)
    $$bindings.tableData(tableData);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  $$result.css.add(css);
  return `<table><thead><tr class="svelte-1jxqbf0">${each(Object.keys(header), (col) => {
    return `<th>${escape(header[col])}
            </th>`;
  })}</tr></thead>
   <tbody>${each(tableData, (row) => {
    return `<tr class="svelte-1jxqbf0">${each(Object.keys(row), (cell) => {
      return `<td class="p-1.5">${escape(row[cell])}</td>`;
    })}
         </tr>`;
  })}</tbody>
</table>`;
});
export {
  Table as T
};
