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
	site: 'http://assistivetech.mit.edu/', // Write here your website url
	author: 'Alison Soong', // Site author
	title: 'MIT Assistive Technology Club', // Site title.
	description: 'Designing today for a more inclusive tomorrow.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
