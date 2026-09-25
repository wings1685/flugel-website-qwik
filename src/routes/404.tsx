import { component$ } from "@builder.io/qwik";
import { buildSiteMeta } from "@/components/routes/_models/siteMeta";
import Page from "@/components/routes/error/Page";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = buildSiteMeta({ dir: '/error', meta: { title: '404 Not Found' } });

export default component$(() => {
	return (
		<Page />
	);
});
