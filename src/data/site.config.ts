interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://assistivetech.mit.edu/', // Write here your website url
	author: 'MIT Assistive Technology Club', // Site author
	title: 'MIT Assistive Technology Club', // Site title.
	description:
		'MIT Assistive Technology Club: Creating inclusive technology through co-design with people with disabilities. Join us in building a more accessible world through collaborative engineering and design.', // Description to display in the meta tags
	lang: 'en-US',
	ogLocale: 'en_US',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
