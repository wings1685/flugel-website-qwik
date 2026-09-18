import { component$ } from "@builder.io/qwik";

import { buildTitle } from "@/_global/lib/utils";

import Page from "@/components/routes/types/Page";

import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = buildTitle({ title: 'Types' });

export default component$(() => {
	return (
		<Page />
	);
});
