/* eslint-disable qwik/no-use-visible-task */
import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { fetchEntries } from "../_models/usePage";
import { Glass, VerticalList } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";
import type { BlogEntries } from "../_models/schema";
import "./Blog.sass";

export default component$(() => {
	const formatDate = (published: BlogEntries[number]['published']) => (new Date(published)).toLocaleDateString('ja-JP', {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
	const entries = useStore<{data: BlogEntries}>({data: [...Array(5)].map(i => ({
		title: '**********',
		link: i,
		published: '2026-01-01 00:00:00',
		summary: "********** ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** **********",
	}))});

	useVisibleTask$(async () => {
		entries.data = await fetchEntries();
	});

	return (
		<Glass as="section">
			<PageTitle icon="rss">記事</PageTitle>
			<VerticalList id="blog_entries">
				{entries.data.map(entry => (
					<li key={ entry.link }>
						<article>
							<Glass as="a" href={ entry.link } icon="tab" isDark target="_blank" rel="noopener noreferrer">
								<p>{ entry.title }</p>
							</Glass>
							<span class="published">{ formatDate(entry.published )}</span>
							<Paragraph class="summary">{ entry.summary }</Paragraph>
						</article>
					</li>
				))}
			</VerticalList>
		</Glass>
	)
});
