import { $, component$, useComputed$, useContext } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { provideSignalContext } from "@/_global/contexts";
import { navOpened } from "@/_global/contexts/flags";
import { Glass } from "./";
import "./Header.sass";

export default component$(() => {
	const navOpenedContext = provideSignalContext(useContext(navOpened));
	const loc = useLocation();

	const handleClick$ = $((isController?: boolean) => {
		if (isController) {
			navOpenedContext.set(!navOpenedContext.signal.value);
		} else {
			navOpenedContext.set(false);
		}
	});
	const page = useComputed$(() => loc.url.pathname.replace(/\//g, '') || 'top');

	return (
		<header>
			<input type="checkbox" checked={ navOpenedContext.signal.value } />
			<Glass as="a" mini isDark href="/" icon="home" onClick$={ () => handleClick$() } class={ { active: page.value === 'top' } }>
				<p>
					<span>Home</span>
				</p>
			</Glass>
			<Glass as="a" mini isDark href="/archives/" icon="folder" onClick$={ () => handleClick$() } class={ { active: page.value === 'archives' } }>
				<p>
					<span>Archives</span>
				</p>
			</Glass>
			<Glass as="a" mini isDark href="/types/" icon="code" onClick$={ () => handleClick$() } class={ { active: page.value === 'types' } }>
				<p>
					<span>Types</span>
				</p>
			</Glass>
			<Glass as="div" mini isDark id="btn_nav" onClick$={ () => handleClick$(true) }>
				<span></span>
			</Glass>
		</header>
	)
});
