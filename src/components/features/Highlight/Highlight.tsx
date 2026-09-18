import { component$ } from "@builder.io/qwik";

import type { DeepGuard } from "@/_global/types/types";

import "./Highlight.sass";

type Props = {
	code: string;
	filename?: string;
};

export default component$((props: DeepGuard<Props>) =>  {
	return (
		<div class="code_highlight">
			{props.filename && (
				<p class="filename monospace">{ props.filename }</p>
			)}
			<div class="shiki_wrapper" dangerouslySetInnerHTML={ props.code } />
		</div>
	)
});
