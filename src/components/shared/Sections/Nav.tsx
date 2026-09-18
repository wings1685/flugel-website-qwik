import { $, component$, useContext } from "@builder.io/qwik";
import { provideSignalContext } from "@/_global/contexts";
import { selectedMonth } from "@/_global/contexts/flags";
import { monthData } from "@/_global/lib/shared";
import { Glass } from "./";
import type { Months } from "@/_global/lib/shared";
import "./Nav.sass";

export default component$(() => {
	const selectedMonthContext = provideSignalContext(useContext(selectedMonth));

	const handleClick$ = $((key: Months) => {
		if (selectedMonthContext.signal.value) return;

		selectedMonthContext.set(key);
	});

	return (
		<nav class="wrapper">
			{Object.entries(monthData).map(([key, name]) => (
				<Glass key={ key } as="div" mini isDark onClick$={ () => handleClick$(key) } class="btn_nav">{ name }</Glass>
			))}
		</nav>
	)
});
