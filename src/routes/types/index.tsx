import { component$ } from "@builder.io/qwik";
import { buildSiteMeta } from "@/components/routes/_models/siteMeta";
import Page from "@/components/routes/types/Page";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = buildSiteMeta({ dir: '/types' });

export default component$(() => {
	return (
		<Page />
	);
});
