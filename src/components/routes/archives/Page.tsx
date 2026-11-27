import { component$ } from "@qwik.dev/core";
import { Archives, Experiments, Environment } from "./_parts";

export default component$(() => {
	return (
		<main>
			<Environment />
			<Experiments />
			<Archives />
		</main>
	);
});
