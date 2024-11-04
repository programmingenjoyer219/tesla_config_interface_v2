export type ExteriorColor =
	| "deep-blue-metallic"
	| "pearl-white"
	| "quicksilver"
	| "solid-black"
	| "stealth-grey"
	| "ultra-red";

export let exteriorColorStore = $state<{ value: ExteriorColor }>({
	value: "deep-blue-metallic",
});
