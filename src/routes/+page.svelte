<script lang="ts">
	import Note from "$lib/components/Note.svelte";
	import Table from "$lib/components/Table.svelte";

	const exampleTableHeader: Record<string, string> = {
		language: 'Language',
		speakers: 'Common Speakers'
	}

	const exampleTableData: Array<Record<string, string>> = [
		{
			language: 'Draconic',
			speakers: 'Dragons, Kobolds and scholars'
		},
		{
			language: 'Abbysal',
			speakers: 'Deamons and cultists'
		},
		{ 
			language: 'Elvish', 
			speakers: 'elves'
		},
		{
			language: 'Ignan',
			speakers: 'Elementals, Salamanders and Effrit'
		}
	]
</script>

<article>
	<h1>Title</h1>

	<h2>Secondary</h2>


	<h3>Tertiary</h3>

	<h4>Fourth</h4>

	<h5>Fifth</h5>

	<h6>Sixth</h6>

	<article>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</article>


	<Note>
		This is a note for highlighting information
	</Note>

	<!-- Just for some space-->
	
	<div class="my-12" />


	<Table
		header={exampleTableHeader}
		tableData={exampleTableData} 
	/>



</article>