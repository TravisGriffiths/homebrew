<script lang="ts">
   import { getAllSpells } from "$lib/api/5e/spells";
</script>

{#await getAllSpells()}
   <h2>Loading...</h2>
{:then spellList } 
   <h4>Fetched {spellList.count} spells</h4>
   <pre>
      {JSON.stringify(spellList, null, 2)}
   </pre>
   <!-- <Table
      tableData={spellsList.results}
      header={monsterListHeader}
   /> -->
{:catch error}
   <h2>An Error Occured Fetching the Monster List</h2>

{/await}