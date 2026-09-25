import * as v from "valibot";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { DeepGuard } from "../types/types";

const MetaSchema = v.object({
	title: v.string(),
	description: v.optional(v.string()),
	ogImage: v.optional(v.string()),
});
type SiteMeta = v.InferOutput<typeof MetaSchema>;
type PageMeta = Partial<SiteMeta>;

export type YamlFiles = Record<string, {
	default: SiteMeta;
}>;
type MetaInfo = Omit<SiteMeta, 'title'> & {
	titles: string[];
};

type Props = {
	dir?: string;
	meta?: PageMeta;
	globData: YamlFiles;
};
export type MetaProps = Omit<Props, 'globData'>;

const separator = ' | ';
const convertDirectoryArray = (dir: string) => {
	const dirs = dir.split('/');

	return dirs.filter((path, index) => path || index < dirs.length - 1).map(path => path ? `${path}/` : path);
};

export const buildMeta = (props: DeepGuard<Props>): DocumentHead => {
	const { dir = '/', globData } = props;
	const metaData: MetaInfo = { titles: [], description: '', ogImage: '' };

	const pagePaths = convertDirectoryArray(dir);
	const pagePath = pagePaths.slice(-1)[0];
	const globPaths = Object.keys(globData);

	const setMeta = (data?: PageMeta, canOverrideTitle: boolean = true) => {
		if (!data) return;

		if (data.title && canOverrideTitle) metaData.titles = [ data.title, ...metaData.titles];
		if (data.description) metaData.description = data.description;
		if (data.ogImage) metaData.ogImage = data.ogImage;
	};

	Object.values(pagePaths).forEach(path => {
		const yamlPath = `../${path}_data/meta.yaml`;
		if (!globPaths.includes(yamlPath)) return;

		const data = globData[yamlPath].default;
		v.parse(MetaSchema, data);

		const canOverrideTitle = !props.meta?.title || path !== pagePath;
		setMeta(data, canOverrideTitle);
	});
	setMeta(props.meta);

	const title = metaData.titles.join(separator);

	const meta = [
		{
			name: 'description',
			content: metaData.description,
		},
		{
			property: 'og:title',
			content: title,
		},
		{
			property: 'og:type',
			content: 'website',
		},
		{
			property: 'og:description',
			content: metaData.description,
		},
		{
			property: 'og:site_name',
			content: title,
		},
		{
			property: 'twitter:card',
			content: 'summary_large_image',
		}
	];
	if (metaData.ogImage) meta.push({ property: 'og:image', content: metaData.ogImage });

	return {
		title: title,
		meta: meta,
	};
};
