import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { codes as codeDeepGuard } from "./_models/codeDeepGuard";
import { codes as codeProps } from "./_models/codeProps";
import { codes as codeExclude } from "./_models/codeExclude";
import { getHighlightedCode } from "./_models/usePage";
import { unescapeTag } from "@/_global/lib/utils";
import { DeepGuard, Exclude, Props } from "./_parts";
import { Box, Glass } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";

export default component$(() => {
	const codes = useResource$(async () => {
		const typesDeepGuard = await getHighlightedCode(codeDeepGuard.types);
		const glassDeepGuard = await getHighlightedCode(codeDeepGuard.glass);

		const iconsProps = await getHighlightedCode(unescapeTag(codeProps.icon));
		const pageTitleProps = await getHighlightedCode(unescapeTag(codeProps.pageTitle));
		const typesProps = await getHighlightedCode(unescapeTag(codeProps.types));
		const groupProps = await getHighlightedCode(unescapeTag(codeProps.group));

		const glassExclude = await getHighlightedCode(unescapeTag(codeExclude.glass));

		return {
			deepGuard: {
				types: typesDeepGuard,
				glass: glassDeepGuard,
			},
			props: {
				icon: iconsProps,
				pageTitle: pageTitleProps,
				types: typesProps,
				group: groupProps,
			},
			exclude: {
				glass: glassExclude,
			}
		};
	});

	return (
		<main>
			<Glass as="section">
				<Box>
					<PageTitle icon="code">型の制御例</PageTitle>
					<Paragraph>
						フロントエンドのフレームワークを使用した型の制御においては、以下のような方法を採用しています。<br />
						以下は、本サイト内でのソースの一例をご案内します。
					</Paragraph>
				</Box>
				<Resource value={ codes } onResolved={data => (
					<>
						<DeepGuard { ...data.deepGuard } />
						<Props { ...data.props } />
						<Exclude { ...data.exclude } />
					</>
				)} />
			</Glass>
		</main>
	);
});
