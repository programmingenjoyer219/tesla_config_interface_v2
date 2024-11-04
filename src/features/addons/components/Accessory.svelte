<script lang="ts">
	interface Props {
		name: string;
		selected: boolean;
		rate: number;
	}

	let { name, selected = $bindable(false), rate }: Props = $props();
</script>

{#snippet field(content: string)}
	<div class="flex items-center justify-start">
		<span class="text-sm min-[425px]:text-base">{content}</span>
	</div>
{/snippet}

<div class="accessory p-4 rounded-md ring-2 ring-gray-400/75 shadow-md">
	{@render field(name)}
	<div class="flex items-center justify-start">
		<input type="checkbox" class="custom-checkbox" bind:checked={selected} />
	</div>
	{@render field("$" + rate)}
</div>

<style>
	.accessory {
		display: grid;
		grid-template-columns: 5fr 1fr 1fr;
		column-gap: 0.25rem;
	}
</style>
