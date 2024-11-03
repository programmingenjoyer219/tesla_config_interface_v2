<script>
	import { interiorColorStore } from "../stores/interiorColor.svelte";

	let imgLink = $derived(
		`/assets/model-y/interior/${interiorColorStore.value}.jpg`
	);
</script>

<div
	class="bg-center bg-cover bg-no-repeat h-[220px]"
	style="background-image: url({imgLink});"
></div>
