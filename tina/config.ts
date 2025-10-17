import { CATEGORIES } from '../src/data/categories.ts'
import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

/**
 * Image Path Configuration for TinaCMS
 *
 * IMPORTANT: Always use relative paths for images in MDX content files.
 *
 * Correct format: ../../assets/images/filename.jpg
 *
 * This ensures that:
 * 1. Images are properly resolved by Astro/MDX
 * 2. Paths work correctly in both development and production
 * 3. Images are optimized by Astro's image processing
 *
 * The Image component in src/components/mdx/Image.astro handles path conversion
 * automatically for images inserted through TinaCMS rich-text editor.
 */

export default defineConfig({
	branch,
	// For local development without TinaCloud, use local mode
	// For production with TinaCloud, set these to your actual values
	clientId: process.env.TINA_CLIENT_ID || null,
	token: process.env.TINA_TOKEN || null,

	build: {
		outputFolder: 'admin',
		publicFolder: 'public'
	},
	media: {
		tina: {
			mediaRoot: 'src/assets/images',
			publicFolder: 'public'
		}
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Blog Post',
				path: 'src/content/blog',
				format: 'mdx',
				fields: [
					{
						type: 'image',
						label: 'Cover Image',
						required: true,
						name: 'heroImage',
						description: 'The image used for the cover of the post'
					},

					{
						type: 'string',
						required: true,
						name: 'category',
						label: 'Category',
						description: 'Select an category for this post',
						options: [...CATEGORIES]
					},
					{
						type: 'string',
						label: 'description',
						required: true,
						name: 'description',
						description: 'A short description of the post'
					},
					{
						type: 'datetime',
						name: 'pubDate',
						label: 'Publication Date',
						required: true
					},
					{
						name: 'draft',
						label: 'Draft',
						type: 'boolean',
						description: 'If this is checked the post will not be published'
					},
					{
						type: 'string',
						name: 'tags',
						required: true,
						label: 'Tags',
						description: 'Tags for this post',
						list: true,
						ui: {
							component: 'tags'
						}
					},
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'rich-text',
						label: 'Body',
						name: 'body',
						isBody: true,
						templates: [
							// Image template for consistent image insertion
							{
								label: 'Image',
								name: 'image',
								fields: [
									{
										type: 'image',
										label: 'Image',
										name: 'src',
										description: 'Select an image from the assets folder',
										required: true
									},
									{
										type: 'string',
										label: 'Alt Text',
										name: 'alt',
										description: 'Describe the image for accessibility',
										required: true
									},
									{
										type: 'string',
										label: 'Title (optional)',
										name: 'title',
										description: 'Optional title attribute for the image'
									}
								]
							},
							// Custom Components
							{
								label: 'SButton',
								name: 'SButton',
								fields: [
									{
										type: 'rich-text',
										label: 'SButton',
										name: 'children',
										isBody: true
									}
								]
							}
						]
					}
				]
			}
		]
	}
})
