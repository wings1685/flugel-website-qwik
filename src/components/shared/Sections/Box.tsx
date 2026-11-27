import { component$, Slot } from "@qwik.dev/core";
import type { DivAttributes } from "@/_global/types/components";
import type { DeepGuard } from "@/_global/types/types";
import "./Box.sass";

export default component$((props: DeepGuard<DivAttributes>) => {
	return (
		<div { ...props } class={[ 'box', props.class ]}>
			<Slot />
		</div>
	)
});
