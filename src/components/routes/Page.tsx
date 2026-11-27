import { component$ } from "@qwik.dev/core";
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
