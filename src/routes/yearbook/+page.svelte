<script lang="ts">
	import { animals, type Animal } from './animals';
	import AnimalCard from './AnimalCard.svelte';
	import { text } from '@sveltejs/kit';
	let searchAnimal: string = '';
	let filteredAnimals: Animal[] = [];
	let classOptions: string[] = [];
	let searchClass: string = 'all';
	let watchlist: string[] = [];

	$: {
		for (let animal of animals) {
			if (!classOptions.includes(animal.class)) {
				classOptions.push(animal.class);
			}
		}
	}

	function searchByName(name: string) {
		filteredAnimals = animals.filter((animal) =>
			animal.name.toLowerCase().includes(name.toLowerCase())
		);
	}

	function searchByClass(search: string) {
		if (search !== 'all') {
			filteredAnimals = animals.filter((animals) => animals.class === search);
		} else {
			filteredAnimals = animals;
		}
	}

	function addToWatchlist(name: string) {
		watchlist = [...watchlist, name];
	}

	$: {
		searchByName(searchAnimal);
	}

	$: {
		searchByClass(searchClass);
	}
</script>

watchlist:
<div class="flex gap-2">
	<p>watchlist</p>
	{watchlist}
</div>
<div class="flex flex-cols justify-center">
	<input
		class="rounded-xl m-2 p-2"
		placeholder="Search animal "
		type="text"
		bind:value={searchAnimal}
	/>
	<p>search by class:</p>
	<select bind:value={searchClass}>
		<option value="all">all</option>
		{#each classOptions as option}
			<option>{option}</option>
		{/each}
	</select>
</div>
<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each filteredAnimals as animal}
		<AnimalCard {animal} {addToWatchlist}></AnimalCard>
	{/each}
</div>
