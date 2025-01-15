<script lang="ts">
	export let animal;
</script>

<div class="p-5 rounded-xl shadow-xl border-cyan-700 border-4">
	<p class="font-bold">{animal.name}</p>
	<p class="italic">{animal.latinName}</p>
	<img src={animal.photo} alt={animal} />
	<p>{animal.weight}</p>
	<p>{animal.lifespan}</p>
	<p>{animal.class}</p>
</div>
