<script lang="ts">
   import Table from "$lib/components/Table.svelte";
   import { getAllMonsters } from "$lib/api/5e/monsters";
   import { onMount } from "svelte";

   const monsterListHeader = {
      index: "Index",
      name: "Name",
      url: "Link"
   }
   // let monsterFetch: Promise<any>;
   // onMount(() => monsterFetch = getAllMonsters())
  

</script>

<h1>
   5e Monsters
</h1>

<section>
   This is a interactive list of monsters from The 5e API mostly as a jump off point for how you could integrate this into your own creations
</section>

{#await getAllMonsters()}
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