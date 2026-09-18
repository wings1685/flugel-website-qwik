/* eslint-disable qwik/no-use-visible-task */
import { $, component$, useContext, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { months } from "@/_global/lib/shared";
import { sleep } from "@/_global/lib/utils";
import { provideSignalContext } from "@/_global/contexts";
import { selectedMonth } from "@/_global/contexts/flags";
import type { Months } from "@/_global/lib/shared";
import "./Bg.sass";

export default component$(() => {
	const currentMonth = useSignal<Months>();
	const selectedMonthContext = provideSignalContext(useContext(selectedMonth));

	const elImage = useSignal<HTMLImageElement>();
	const fadingMonth = useSignal<Months>();
	const getSrcset = (month?: Months) => month ? `/images/bg/${ month }.webp 1920w, /images/bg/${ month }_sp.webp 768w` : '';

	useVisibleTask$(() => {
		const month = months[(new Date()).getMonth()];
		currentMonth.value = month;
	});

	const fading$ = $(async (delay: number) => {
		await sleep(delay);

		currentMonth.value = fadingMonth.value;
		fadingMonth.value = '';
		selectedMonthContext.set('');
	});

	useTask$(({ track }) => {
		track(() => selectedMonthContext.signal.value);

		fadingMonth.value = selectedMonthContext.signal.value;

		if (!elImage.value || !fadingMonth.value) return;

		if (!('computedStyleMap' in elImage.value)) {
			currentMonth.value = fadingMonth.value;
			return;
		}

		const style = elImage.value.computedStyleMap();
		const duration = style.get('animation-duration') as CSSUnitValue;
		const delay = duration.value * 1000;
		fading$(delay);
	});

	return (
		<div id="bg">
			<img ref={ el => elImage.value = el } alt="" srcset={ getSrcset(currentMonth.value) } width={ undefined } height={ undefined } />
			{fadingMonth.value && (
				<img id="selected_bg" srcset={ getSrcset(fadingMonth.value) } alt="" width={ undefined } height={ undefined } />
			)}
		</div>
	)
});
