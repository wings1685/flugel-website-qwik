import { component$ } from "@builder.io/qwik";

import { Glass, Group } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";

export default component$(() =>  {
	return (
		<main>
			<Glass as="section">
				<PageTitle icon="home">404 Not Found</PageTitle>
				<Paragraph>お探しのページは存在しないか、移動された可能性があります。</Paragraph>
				<Group>
					<Glass as="a" href="/" icon="arrow" isDark>Home</Glass>
				</Group>
			</Glass>
		</main>
	)
});
