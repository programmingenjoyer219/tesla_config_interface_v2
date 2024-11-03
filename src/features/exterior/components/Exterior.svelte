<script>
	import { selectedAddonsStore } from "$features/addons/stores/selectedAddons.svelte";
	import { exteriorColorStore } from "../stores/exteriorColor.svelte";

	let imgLink = $derived.by(() => {
		return selectedAddonsStore.performanceWheels
			? `/assets/model-y/exterior/${exteriorColorStore.value}-performance.jpg`
			: `/assets/model-y/exterior/${exteriorColorStore.value}.jpg`;
	});
</script>

<div
	id="car"
	class="bg-center bg-cover bg-no-repeat h-[200px] sm:h-[300px]"
	style="background-image: url({imgLink});"
></div>

<style>
	#car {
		background-size: 150%;
	}
	@media (max-width: 680px) {
		#car {
			background-size: 125%;
		}
	}
</style>
