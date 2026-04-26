// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

const vague = {
	name: 'vague',
	type: 'dark',
	colors: {
		'editor.background': '#141415',
		'editor.foreground': '#cdcdcd',
	},
	tokenColors: [
		{
			scope: ['comment', 'punctuation.definition.comment'],
			settings: { foreground: '#606079', fontStyle: 'italic' },
		},
		{
			scope: [
				'string',
				'string.quoted',
				'meta.string',
				'string.template',
				'string.regexp',
				'punctuation.definition.string',
				'punctuation.definition.string.begin',
				'punctuation.definition.string.end',
				'punctuation.definition.string.template.begin',
				'punctuation.definition.string.template.end',
			],
			settings: { foreground: '#e8b589' },
		},
		{
			scope: ['constant.numeric', 'constant.character.numeric'],
			settings: { foreground: '#e0a363' },
		},
		{
			scope: ['constant.language.boolean', 'constant.language.null', 'constant.language'],
			settings: { foreground: '#e0a363' },
		},
		{
			scope: [
				'keyword',
				'keyword.control',
				'keyword.control.flow',
				'keyword.control.import',
				'keyword.control.from',
				'keyword.other',
				'storage.type',
				'storage.modifier',
				'storage',
			],
			settings: { foreground: '#6e94b2' },
		},
		{
			scope: ['keyword.operator', 'punctuation.accessor', 'keyword.operator.arithmetic'],
			settings: { foreground: '#90a0b5' },
		},
		{
			scope: [
				'entity.name.function',
				'meta.function entity.name.function',
				'meta.definition.function entity.name.function',
			],
			settings: { foreground: '#c48282' },
		},
		{
			scope: [
				'meta.function-call entity.name.function',
				'meta.function-call.generic',
				'support.function',
			],
			settings: { foreground: '#bb9dbd' },
		},
		{
			scope: ['variable', 'variable.other', 'meta.definition.variable'],
			settings: { foreground: '#cdcdcd' },
		},
		{
			scope: ['variable.parameter', 'meta.parameter'],
			settings: { foreground: '#bb9dbd' },
		},
		{
			scope: ['variable.language.this', 'variable.language.self', 'variable.language.super'],
			settings: { foreground: '#b4d4cf' },
		},
		{
			scope: [
				'variable.other.property',
				'variable.other.object.property',
				'meta.object-literal.key',
				'support.type.property-name',
			],
			settings: { foreground: '#c3c3d5' },
		},
		{
			scope: [
				'entity.name.type',
				'entity.name.namespace',
				'support.type',
				'support.class',
				'entity.other.inherited-class',
			],
			settings: { foreground: '#9bb4bc' },
		},
		{
			scope: ['support.type.builtin', 'support.type.primitive'],
			settings: { foreground: '#b4d4cf' },
		},
		{
			scope: ['entity.name.class', 'meta.class entity.name.type'],
			settings: { foreground: '#aeaed1' },
		},
		{
			scope: ['entity.name.tag', 'meta.tag.html entity.name.tag'],
			settings: { foreground: '#b4d4cf' },
		},
		{
			scope: ['entity.other.attribute-name'],
			settings: { foreground: '#aeaed1' },
		},
		{
			scope: ['punctuation', 'meta.brace', 'meta.delimiter', 'punctuation.definition.tag'],
			settings: { foreground: '#cdcdcd' },
		},
		{
			scope: ['constant', 'support.constant'],
			settings: { foreground: '#aeaed1' },
		},
		{
			scope: ['markup.heading'],
			settings: { foreground: '#6e94b2', fontStyle: 'bold' },
		},
		{
			scope: ['markup.bold'],
			settings: { foreground: '#cdcdcd', fontStyle: 'bold' },
		},
		{
			scope: ['markup.italic'],
			settings: { foreground: '#cdcdcd', fontStyle: 'italic' },
		},
		{
			scope: ['markup.underline.link', 'markup.link'],
			settings: { foreground: '#c48282' },
		},
		{
			scope: ['markup.list'],
			settings: { foreground: '#c48282' },
		},
		{
			scope: ['markup.quote'],
			settings: { foreground: '#606079' },
		},
		{
			scope: ['markup.raw', 'markup.inline.raw'],
			settings: { foreground: '#aeaed1' },
		},
	],
};

// https://astro.build/config
export default defineConfig({
	site: 'https://krabbe.dev',
	redirects: {
		'/posts/[...slug]': '/[...slug]',
	},
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: vague,
		},
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Source Serif 4',
			cssVariable: '--font-source-serif',
			fallbacks: ['serif'],
			weights: [400, 700],
			styles: ['normal', 'italic'],
		},
		{
			provider: fontProviders.google(),
			name: 'DM Mono',
			cssVariable: '--font-dm-mono',
			fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
			weights: [400, 500],
			styles: ['normal', 'italic'],
		},
	],
});
