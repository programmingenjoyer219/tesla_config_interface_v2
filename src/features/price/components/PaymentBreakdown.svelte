<script lang="ts">
	import { downPaymentStore } from "../stores/downPayment.svelte";
	import { monthlyPaymentStore } from "../stores/monthlyPayment.svelte";
	import { INTEREST_RATE, LOAN_TERM } from "../utils/priceConfig";
</script>

{#snippet field(name: string, value: string)}
	<p class="text-sm min-[425px]:text-base">
		{name}:
		<span class="font-medium text-gray-800">
			{value}
		</span>
	</p>
{/snippet}

<div class="space-y-3">
	<h3 class="text-lg font-medium text-gray-800">Estimated Payment Breakdown</h3>
	<div class="space-y-1">
		{@render field("Down Payment", "$" + downPaymentStore.value.toLocaleString())}
		{@render field("Loan Term", LOAN_TERM + " months")}
		{@render field("Interest Rate", INTEREST_RATE * 100 + "% APR")}
	</div>
	<div>
		<p class="text-sm min-[425px]:text-base">Estimated Monthly Payment:</p>
		<span class="text-2xl min-[425px]:text-3xl font-bold text-gray-800"
			>${monthlyPaymentStore.value.toFixed(2).toLocaleString()}
		</span>
	</div>
</div>
