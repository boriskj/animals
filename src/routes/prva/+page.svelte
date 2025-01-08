<script lang="ts">
	let stevilo = 0;
	let sodo: boolean;

	function jeSodo(num: number) {
		return num % 2 == 0;
	}

	function randomNumber() {
		stevilo = Math.floor(Math.random() * 10000000);
	}
	$: {
		sodo = jeSodo(stevilo);
	}

	/**
	 * NALOGA:
	 * 	- Dodaj <input> za vnos števila
	 *  - Definiraj spremenljivko "num" in jo "poveži" z <input> (Nasvet: uporabi bind:value)
	 *  - Če je num sodo, izpiši "Število je sodo", če je liho, izpiši "Število je liho"
	 *
	 * DODATNA NALOGA:
	 *  - Dodaj <button> s tekstom "Random"
	 *  - Po kliku na "Random" naj se num nastavi na naključno število med 1 in 100000000
	 */
</script>

<div class="flex flex-col gap-2 items-center justify-center min-h-screen">
	<input
		min="0"
		bind:value={stevilo}
		class="border-4 rounded-2xl text-center p-4 text-4xl border-cyan-700"
		type="number"
	/>
	<div class="flex gap-10 justify-center items-center">
		<p class="text-6xl">{sodo ? 'sodo' : 'liho'}</p>

		<button
			on:click={randomNumber}
			class="border-cyan-700 border-4 w-7
    h-7 rounded-full"
		>
			?</button
		>
	</div>
</div>
