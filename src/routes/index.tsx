import { component$ } from "@qwik.dev/core";
import { buildSiteMeta } from "@/components/routes/_models/siteMeta";
import Page from "@/components/routes/Page";
import type { DocumentHead } from "@qwik.dev/router";

export const head: DocumentHead = buildSiteMeta();

export default component$(() => {
	return (
		<Page />
	);
});
