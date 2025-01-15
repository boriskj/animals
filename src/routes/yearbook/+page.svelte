<script lang="ts">
	import { animals, type Animal } from './animals';
	import AnimalCard from './AnimalCard.svelte';
	import { text } from '@sveltejs/kit';
	let searchAnimal: string = '';
</script>

<div class="flex flex-cols justify-center">
	<input
		class="rounded-xl m-2 p-2"
		placeholder="Search animal "
		type="text"
		bind:value={searchAnimal}
	/>
</div>
<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each animals as animal}
		<AnimalCard {animal}></AnimalCard>
	{/each}
</div>
