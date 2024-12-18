<script lang="ts">
	import type { Category } from './data';

	export let category: Category;
</script>

<div class=" border-4 border-cyan-700 rounded-lg p-4">
	<div class="font-bold">{category.name}</div>

	<div><img src={category.image} /></div>
	<div>{category.description}</div>
</div>
