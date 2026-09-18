import { component$ } from "@builder.io/qwik";
import { About, Blog, Terms } from "./_parts";

export default component$(() => {
	return (
		<main>
			<About />
			<Blog />
			<Terms />
		</main>
	);
});
