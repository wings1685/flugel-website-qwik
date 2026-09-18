import { component$, Slot } from "@builder.io/qwik";

import "@/_global/styles/global.sass";
import Layout from "@/components/routes/Layout";

export default component$(() => {
	return (
		<Layout>
			<Slot />
		</Layout>
	);
});
