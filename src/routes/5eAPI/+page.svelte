<script lang="ts">
   import Table from "$lib/components/Table.svelte";
   import { getAllMonsters } from "$lib/api/5e/monsters";

   const monsterListHeader = {
      index: "Index",
      name: "Name",
      url: "Link"
   }
   let monsterFetch = getAllMonsters()

</script>

{#await monsterFetch}
   <h2>Loading...</h2>
{:then monsterList } 
   <h4>Fetched {monsterList.count} monsters</h4>
   <Table
      tableData={monsterList.results}
      header={monsterListHeader}
   />
{:catch error}
   <h2>An Error Occured Fetching the Monster List</h2>

{/await}