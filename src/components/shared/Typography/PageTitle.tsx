import { component$, Slot } from "@builder.io/qwik";

import { Icon } from "../Utils";

import type { DeepGuard } from "@/_global/types/types";
import type { HAttributes } from "@/_global/types/components";
import type { PropsOf } from "@builder.io/qwik";

import "./PageTitle.sass";

type IconProps = Pick<PropsOf<typeof Icon>, 'type'>;
type Props = HAttributes & {
	icon: IconProps['type'];
};

export default component$((props: DeepGuard<Props>) => {
	return (
		<h1 class="page_title">
			<Icon type={ props.icon } />
			<span>
				<Slot />
			</span>
		</h1>
	)
});
