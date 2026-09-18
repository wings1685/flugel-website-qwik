/* eslint-disable qwik/no-use-visible-task */
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { flugel } from "@/_global/lib/shared";
import { Glass, Group } from "./";

export default component$(() => {
	const year = useSignal<number>(2026);
	useVisibleTask$(() => {
		year.value = (new Date()).getFullYear();
	});

	return (
		<footer>
			<Group>
				<Glass mini>
					<p class="copyright">{ flugel } &copy; { year.value }</p>
				</Glass>
			</Group>
		</footer>
	)
});
