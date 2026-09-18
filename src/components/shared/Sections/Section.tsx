import { component$, Slot } from "@builder.io/qwik";
import type { SectionAttributes } from "@/_global/types/components";
import type { DeepGuard } from "@/_global/types/types";
import "./Section.sass";

type Props = SectionAttributes;

export default component$((props: DeepGuard<Props>) => {
	return (
		<section { ...props } class={[ 'section', props.class ]}>
			<Slot />
		</section>
	)
});
