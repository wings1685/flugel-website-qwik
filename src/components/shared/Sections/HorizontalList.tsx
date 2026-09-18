import { component$, Slot } from "@builder.io/qwik";

import type { UListAttributes } from "@/_global/types/components";
import type { DeepGuard } from "@/_global/types/types";

import "./HorizontalList.sass";

export default component$((props: DeepGuard<UListAttributes>) => {
	return (
		<ul { ...props } class={[ 'horizontal_list', props.class ]}>
			<Slot />
		</ul>
	)
});
