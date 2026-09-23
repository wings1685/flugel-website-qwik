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
	const imagePath = '/images/bg/';
	const getImagePc = (month?: Months) => month ? `${imagePath}${ month }.webp` : '';
	const getImageSp = (month?: Months) => month ? `${imagePath}${ month }_sp.webp` : '';
	const getSrcset = (month?: Months) => {
		if (import.meta.env.SSR || !month) return '';

		return window.innerWidth <= 750 ? getImageSp(month) : getImagePc(month);
	};

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
			<picture>
				<source media="(max-width: 750px)" srcset={ getImageSp(currentMonth.value) } width={ undefined } height={ undefined } />
				<img ref={ el => elImage.value = el } src={ getImagePc(currentMonth.value) } width={ undefined } height={ undefined } alt="" data-testid="bg" />
			</picture>
			{fadingMonth.value && (
				<img id="selected_bg" src={ getSrcset(fadingMonth.value) } alt="" width={ undefined } height={ undefined } />
			)}
		</div>
	)
});
