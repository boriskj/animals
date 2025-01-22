<script lang="ts">
	export let animal;
	export let addToWatchlist: (name: string) => void;
</script>

<div class="p-5 rounded-xl shadow-xl border-black border-4">
	<p class="font-bold">{animal.name}</p>
	<p class="italic">{animal.latinName}</p>
	<img src={animal.photo} alt={animal} />
	<p>{animal.weight}</p>
	<p>{animal.lifespan}</p>
	<p>{animal.class}</p>
	<button class="bg-black rounded-full text-white px-2" on:click={() => addToWatchlist(animal.name)}
		>add to watchlist</button
	>
</div>
