<script lang='ts'>
	// SYSTEM STYLING, touch with caution
	// DOCS: 
		// Your custom Skeleton theme:
		import '../theme.postcss';
		// This contains the bulk of Skeletons required styles:
		import '@skeletonlabs/skeleton/styles/skeleton.css';
		// Finally, your application's global stylesheet (sometimes labeled 'app.css')
		import '../app.postcss';
	// END SYSTEM STYLING

	// https://www.skeleton.dev/components/app-shell
	import { AppShell } from '@skeletonlabs/skeleton';
	// Makes heavy use of slots: https://svelte.dev/tutorial/slots

	import SideNav from '$lib/components/SideNav.svelte';

</script>


<AppShell>
	<!-- <svelte:fragment slot="header">Header</svelte:fragment> -->
	<svelte:fragment slot="sidebarLeft">
		<SideNav />
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<div class="p-10">
		<slot />
	</div>
	
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>