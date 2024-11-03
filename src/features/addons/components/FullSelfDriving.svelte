<script>
	import { FULL_SELF_DRIVING_RATE } from "$features/price/utils/priceConfig";
	import { selectedAddonsStore } from "../stores/selectedAddons.svelte";
</script>

<div class="mb-6 space-y-3">
	<p class="font-medium text-gray-800">Full Self-Driving</p>
	<div
		class="p-4 rounded-md ring-2 ring-gray-400/75 shadow-md flex items-center gap-2"
	>
		<input
			type="checkbox"
			name="full-self-driving"
			id="full-self-driving"
			class="cursor-pointer size-6 appearance-none checked:bg-blue-500/60 border-2 border-slate-500 rounded-sm"
			bind:checked={selectedAddonsStore.fullSelfDriving}
		/>
		<p class="text-sm min-[425px]:text-base">
			Add Full Self-Driving for ${FULL_SELF_DRIVING_RATE}
		</p>
	</div>
</div>
