import { component$, Slot } from "@builder.io/qwik";
import Layout from "@/components/routes/Layout";
import "@/_global/styles/global.sass";

export default component$(() => {
	return (
		<Layout>
			<Slot />
		</Layout>
	);
});
