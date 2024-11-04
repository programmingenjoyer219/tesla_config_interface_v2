export type InteriorColor = "light" | "dark";

export let interiorColorStore = $state<{ value: InteriorColor }>({
	value: "light",
});
