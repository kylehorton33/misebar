<script lang="ts">
	import 'iconify-icon';
	import { filterTerm, stockList, recipes } from '$lib/store';
	export let ingredient;
	const { id, name, recipe } = ingredient;

	const slug = $recipes.find((r) => r.id === recipe)?.slug

	function stockChange(id: string) {
		$stockList[id] = !$stockList[id];
	}
</script>

<li class="card p-2 w-72" hidden={!name.toUpperCase().includes($filterTerm.toUpperCase())}>
	<span class="flex items-center">
		<input
			type="checkbox"
			name=""
			id="{id}"
			class="checkbox mr-3"
			on:change={() => stockChange(id)}
			checked={$stockList[id]}
		/>
		<label for="{id}" class="h5 truncate grow">{name}</label>
		{#if recipe}
			<a href="/recipes/{slug}" class="badge variant-ghost-surface">
				<iconify-icon width="15" height="15" icon="fluent:beaker-add-24-regular"></iconify-icon>
			</a>
		{/if}
	</span>
</li>
