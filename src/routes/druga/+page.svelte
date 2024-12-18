<script lang="ts">
	/**
	 * NALOGA:
	 * - Poglej v data.ts; tam bos nasel seznam categories (ki je tu ze importan)
	 * - V grid-u s tremi stolpci prikazi vse kategorije s karticami (uporabi komponento Card)
	 * - Vsaka kartica naj ima: Naslov, Opis, Sliko
	 *
	 * DODATNA NALOGA:
	 * - Na telefonu (oz majhnem ekranu) naj se kartice prikazejo v 1 stolpcu
	 *  (Pomoč: https://tailwindcss.com/docs/responsive-design)
	 */

	import { categories } from './data';
	import Card from './Card.svelte';

	let category = {
		id: '1',
		name: 'Beef',
		image: 'https://www.themealdb.com/images/category/beef.png',
		description:
			'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]'
	};

	let nekineki = 'asdojoaif';
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!--  ki bo šla čez categories in za vsako "okličenmo"-->

<div class="grid grid-cols-1 gap-2 md:grid-cols-3">
	{#each categories as category}
		<Card {category}></Card>
	{/each}
</div>
