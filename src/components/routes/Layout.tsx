import { component$, Slot, useContextProvider, useSignal } from "@builder.io/qwik";
import { selectedMonth, navOpened } from "@/_global/contexts/flags";
import { Footer, Header, Nav } from "@/components/shared/Sections";
import { Bg } from "@/components/shared/Utils";
import type { Months } from "@/_global/lib/shared";
import "@/_global/styles/global.sass";

export default component$(() => {
	const navOpenedSignal = useSignal<boolean>(false);
	useContextProvider(navOpened, navOpenedSignal);

	const isLoaderShowSignal = useSignal<Months>();
	useContextProvider(selectedMonth, isLoaderShowSignal);

	return (
		<>
			<Header />
			<Slot />
			<Nav />
			<Footer />
			<Bg />
		</>
	);
});
