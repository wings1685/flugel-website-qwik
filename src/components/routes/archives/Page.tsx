import { component$ } from "@builder.io/qwik";
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
