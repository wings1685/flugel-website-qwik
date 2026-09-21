import { component$ } from "@builder.io/qwik";
import { experiments } from "../_models/usePage";
import { Glass, HorizontalList, VerticalList } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";
import "./Archives.sass";

export default component$(() => {
	return (
		<Glass as="section">
			<PageTitle icon="folder">実験一覧</PageTitle>
			<VerticalList>
				{experiments.map((experiment, index) => (
					<li key={ index }>
						<Paragraph class="archives_paragraph">{ experiment.description }</Paragraph>
						<HorizontalList class="monospace">
							{experiment.stacks.map(stack => (
								<li key={ `${index}.${stack}` }>{ stack }</li>
							))}
						</HorizontalList>
					</li>
				))}
			</VerticalList>
		</Glass>
	)
});
