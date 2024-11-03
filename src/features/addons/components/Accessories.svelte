<script lang="ts">
	import {
		CENTER_CONSOLE_TRAY_RATE,
		INTERIOR_LINERS_RATE,
		SUNSHADE_RATE,
	} from "$features/price/utils/priceConfig";
	import { selectedAddonsStore } from "../stores/selectedAddons.svelte";
	import Accessory from "./Accessory.svelte";
</script>

<div class="mb-6 space-y-3">
	<p class="text-gray-800 font-medium">Accessories</p>
	<div class="grid grid-rows-3 gap-2">
		<Accessory
			name={"Center Console Tray"}
			rate={CENTER_CONSOLE_TRAY_RATE}
			bind:selected={selectedAddonsStore.centerConsoleTray}
		/>
		<Accessory
			name={"Sunshade"}
			rate={SUNSHADE_RATE}
			bind:selected={selectedAddonsStore.sunshade}
		/>
		<Accessory
			name={"All-Weather Interior Liners"}
			rate={INTERIOR_LINERS_RATE}
			bind:selected={selectedAddonsStore.interiorLiners}
		/>
	</div>
</div>
