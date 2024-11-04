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
			class="custom-checkbox"
			bind:checked={selectedAddonsStore.performanceUpgrade}
		/>
		<p class="text-sm min-[425px]:text-base">
			Add Performance Upgrade for ${PERFORMANCE_PACKAGE_RATE}
		</p>
	</div>
</div>
