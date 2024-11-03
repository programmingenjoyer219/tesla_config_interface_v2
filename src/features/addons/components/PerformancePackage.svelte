<script>
	import { PERFORMANCE_PACKAGE_RATE } from "$features/price/utils/priceConfig";
	import { selectedAddonsStore } from "../stores/selectedAddons.svelte";
</script>

<div class="mb-6 space-y-3">
	<p class="text-gray-800 font-medium">Performance Package</p>
	<div
		class="p-4 rounded-md ring-2 ring-gray-400/75 shadow-md flex items-center gap-2"
	>
		<input
			type="checkbox"
			name="full-self-driving"
			id="full-self-driving"
			class="cursor-pointer size-6 appearance-none checked:bg-blue-500/60 border-2 border-slate-500 rounded-sm"
			bind:checked={selectedAddonsStore.performanceUpgrade}
		/>
		<p class="text-sm min-[425px]:text-base">
			Add Full Self-Driving for ${PERFORMANCE_PACKAGE_RATE}
		</p>
	</div>
</div>
