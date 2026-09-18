import { component$ } from "@builder.io/qwik";
import { sites } from "../_models/usePage";
import { Glass, HorizontalList, VerticalList } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";
import "./Archives.sass";

export default component$(() => {
	return (
		<Glass as="section">
			<PageTitle icon="folder">構築・実験一覧</PageTitle>
			<VerticalList>
				{sites.map((site, index) => (
					<li key={ index }>
						<Paragraph class="archives_paragraph">{ site.description }</Paragraph>
						<HorizontalList class="monospace">
							{site.stacks.map(stack => (
								<li key={ `${index}.${stack}` }>{ stack }</li>
							))}
						</HorizontalList>
					</li>
				))}
			</VerticalList>
		</Glass>
	)
});
