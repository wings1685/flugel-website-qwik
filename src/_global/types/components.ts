import type { PropsOf } from "@builder.io/qwik";

export type DivAttributes = PropsOf<'div'>;
export type AsDiv = DivAttributes & {
	as?: 'div';
};
export type SectionAttributes = PropsOf<'section'>;
export type AsSection = SectionAttributes & {
	as: 'section';
};

export type LinkAttributes = PropsOf<'a'>;
export type AsLink = LinkAttributes & {
	as: 'a';
};

export type HAttributes = PropsOf<'h1'> &
							PropsOf<'h2'> &
							PropsOf<'h3'> &
							PropsOf<'h4'> &
							PropsOf<'h5'> &
							PropsOf<'h6'>;

export type ParagraphAttributes = PropsOf<'p'>;

export type UListAttributes = PropsOf<'ul'>;

export type Sizes = 'small' | 'medium' | 'large' | 'extrasmall' | 'extralarge' | 'none';
export type Directions = 'left' | 'center' | 'right' | 'justify';
