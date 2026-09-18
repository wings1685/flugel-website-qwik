import { siteDescription, siteTitle } from "./shared";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { DeepGuard } from "../types/types";

export const sleep = (ms: number): Promise<number> => {
	return new Promise(resolve => {
		const timeoutID = window.setTimeout(() => resolve(timeoutID), ms);
	});
}

type BuildTitle = {
	title?: string;
	description?: string;
};
export const buildTitle = (props: DeepGuard<BuildTitle>): DocumentHead => {
	const separator = ' | ';
	const title = props.title ? `${props.title}${separator}${siteTitle}` : siteTitle;
	const description = props.description ?? siteDescription;

	return {
		title: title,
		meta: [
			{
				name: 'description',
				content: description,
			},
			{
				property: 'og:type',
				content: 'website',
			},
			{
				property: 'og:title',
				content: title,
			},
			{
				property: 'og:description',
				content: description,
			},
			{
				property: 'og:site_name',
				content: title,
			},
			{
				property: 'twitter:card',
				content: 'summary_large_image',
			},
		],
	};
};

export const unescapeTag = (text: string) => text.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
