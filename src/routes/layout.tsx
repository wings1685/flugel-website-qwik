import { component$, Slot } from "@qwik.dev/core";
import Layout from "@/components/routes/Layout";
import "@/_global/styles/global.sass";

export default component$(() => {
	return (
		<Layout>
			<Slot />
		</Layout>
	);
});
