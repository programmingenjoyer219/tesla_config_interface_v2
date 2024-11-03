<script>
	import { WHEEL_TYPE_RATE } from "$features/price/utils/priceConfig";
	import { selectedAddonsStore } from "../stores/selectedAddons.svelte";

	const wheelTypes = ["standard", "performance"];
	// TODO :: Use static components instead of using '#each' block
</script>

<div class="mb-6 space-y-3">
	<p class="font-medium text-gray-800">Wheels</p>
	<div class="grid grid-rows-2 gap-2">
		{#each wheelTypes as wheelType}
			<div
				class="flex items-center gap-2 p-4 rounded-md ring-2 ring-gray-400/75 shadow-md {wheelType ===
					'performance' && 'bg-gray-300/50'}"
			>
				<input
					type="radio"
					value={wheelType === "performance"}
					bind:group={selectedAddonsStore.performanceWheels}
					class="cursor-pointer size-6 appearance-none checked:bg-blue-500/60 border-2 border-slate-500 rounded-full"
				/>
				{#if wheelType === "standard"}
					<span class="font-medium text-sm min-[425px]:text-base">Standard</span
					>
				{:else}
					<span class="font-medium text-sm min-[425px]:text-base"
						>Performance (+{WHEEL_TYPE_RATE.toLocaleString()})</span
					>
				{/if}
			</div>
		{/each}
	</div>
</div>
