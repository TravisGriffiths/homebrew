<script lang="ts">
   // This is for creating and making styled tables easy while leaving the creator free to create
   // tabular resources free of the styling enforced here if desired. 

   // Table Data is of the format: [
   //    {
   //       column_one: 'cell content',
   //       column_two: 'cell content'
   //    }... 
   // ]
   // Important: put your pairs in your row objects and header objects in the same order
   export let tableData: Array<Record<string, string>> = []
   // This are your column headers, use the same keys used for the tableData, with your user visible column labels
   export let header: Record<string, string> = {}

</script>

<table>
   <thead>
      <tr>
         {#each Object.keys(header) as col }
            <th>
               {header[col]}
            </th>
         {/each}
      </tr>
   </thead>
   <tbody>
      {#each tableData as row}
         <tr>
            {#each Object.keys(row) as cell} 
               <td class="p-1.5">{row[cell]}</td>
            {/each}
         </tr>
      {/each}
   </tbody>
</table>

<style>
   tr:nth-child(even) {
      @apply bg-tertiary-500;
   }

</style>