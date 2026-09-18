import { component$, Slot } from "@builder.io/qwik";
import type { UListAttributes } from "@/_global/types/components";
import type { DeepGuard } from "@/_global/types/types";
import "./VerticalList.sass";

export default component$((props: DeepGuard<UListAttributes>) => {
	return (
		<ul { ...props } class={[ 'vertical_list', props.class ]}>
			<Slot />
		</ul>
	)
});
