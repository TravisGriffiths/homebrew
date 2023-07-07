<script lang="ts">
   import { AppRail, AppRailTile, AppRailAnchor } from "@skeletonlabs/skeleton";
   let currentTile: number = 0;
</script>

<AppRail>

   <AppRailAnchor href="/" slot="lead">
      <h1>Resources</h1>
   </AppRailAnchor>

   <AppRailTile bind:group={currentTile} name="5eAPI" value={0} >
      <a href="/5eAPI">
         The Excellent 5e API
      </a>
   </AppRailTile>
   
</AppRail>