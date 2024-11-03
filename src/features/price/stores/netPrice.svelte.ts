import { selectedAddonsStore } from "$features/addons/stores/selectedAddons.svelte";
import {
	BASE_PRICE,
	CENTER_CONSOLE_TRAY_RATE,
	FULL_SELF_DRIVING_RATE,
	INTERIOR_LINERS_RATE,
	PERFORMANCE_PACKAGE_RATE,
	SUNSHADE_RATE,
	WHEEL_TYPE_RATE,
} from "../utils/priceConfig";

const rateMap = {
	performanceWheels: WHEEL_TYPE_RATE,
	performanceUpgrade: PERFORMANCE_PACKAGE_RATE,
	fullSelfDriving: FULL_SELF_DRIVING_RATE,
	centerConsoleTray: CENTER_CONSOLE_TRAY_RATE,
	sunshade: SUNSHADE_RATE,
	interiorLiners: INTERIOR_LINERS_RATE,
};

let netPrice = $derived.by(() => {
	let derivedPrice = BASE_PRICE;
	for (const addon in selectedAddonsStore) {
		if (selectedAddonsStore[addon as keyof typeof selectedAddonsStore]) {
			derivedPrice += rateMap[addon as keyof typeof rateMap];
		}
	}
	return derivedPrice;
});

export const netPriceStore = {
	get value() {
		return netPrice;
	},
};
