import { component$, Slot } from "@qwik.dev/core";
import { Link } from "@qwik.dev/router";
import { Section } from "./";
import { Icon } from "../Utils";
import type { PropsOf } from "@qwik.dev/core";
import type { DeepGuard } from "@/_global/types/types";
import type { AsDiv, AsSection, AsLink } from "@/_global/types/components";
import "./Glass.sass";

type IconProps = Pick<PropsOf<typeof Icon>, 'type'>;
type Props = {
	mini?: boolean;
	isDark?: boolean;
} & ( | AsDiv | AsSection | ( AsLink & {
	href: string;
	icon?: IconProps['type'];
}) );

export default component$((props: DeepGuard<Props>) => {
	if (props.as === 'a') {
		return (
			<Link { ...props } class={ [ 'glass mini is_dark', props.class ] }>
				<Slot />
				{props.icon && (
					<Icon type={ props.icon } />
				)}
			</Link>
		)
	} else if (props.as === 'section') {
		return (
			<Section { ...props } class={ [ 'glass', {mini: props.mini, is_dark: 'isDark' in props}, props.class ] }>
				<Slot />
			</Section>
		)
	} else {
		return (
			<div { ...props } class={ [ 'glass', {mini: props.mini, is_dark: 'isDark' in props}, props.class ] }>
				<Slot />
			</div>
		)
	}
});
