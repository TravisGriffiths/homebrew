<script lang="ts">
   import { getAllFeats } from "$lib/api/5e/feats";
</script>

{#await getAllFeats()}
   <h2>Loading...</h2>
{:then featList } 
   <h4>Fetched {featList.count} feats</h4>
   <pre>
      {JSON.stringify(featList, null, 2)}
   </pre>
   <!-- <Table
      tableData={featsList.results}
      header={monsterListHeader}
   /> -->
{:catch error}
   <h2>An Error Occured Fetching the feat List</h2>

{/await}