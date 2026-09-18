import { component$, Slot } from "@builder.io/qwik";
import type { ParagraphAttributes, DivAttributes } from "@/_global/types/components";
import type { DeepGuard } from "@/_global/types/types";
import "./Paragraph.sass";

type Props = (ParagraphAttributes & {
	as?: 'p';
}) | (DivAttributes & {
	as: 'div';
});

export default component$((props: DeepGuard<Props>) => {
	const Component = props.as ?? 'p';

	return (
		<Component { ...props } class={[ 'paragraph', props.class ]}>
			<Slot />
		</Component>
	)
});
