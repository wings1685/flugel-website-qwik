import { component$ } from "@builder.io/qwik";

import { Archives, Environment } from "./_parts";

export default component$(() => {
	return (
		<main>
			<Environment />
			<Archives />
		</main>
	);
});
