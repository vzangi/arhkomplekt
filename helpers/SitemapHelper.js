const fs = require('fs');
const xml = require('xml');
const db = require('../models');

class SitemapHelper {
  site = process.env.SITENAME || 'https://arhkomplekt.ru';
  path = './public/sitemap.xml';
  xmlVersion = '<?xml version="1.0" encoding="UTF-8"?>';

  async regenerate() {
    const seos = await db.Seo.findAll();
    const categories = await db.Category.findAll();
    const portfolioItems = await db.Portfolio.findAll();
    const blogItems = await db.BlogItem.findAll();
    const reviewItems = await db.Review.findAll();

    const xmlObject = {
			urlset: [
				{
					_attr: {
						xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
					},
				},

				...seos.map((seo) => {
					return {
						url: [
							{ loc: this.site + seo.page },
							{ lastmod: seo.updatedAt.toJSON().substr(0,10) },
							{ priority: 0.9 },
						],
					}
				}),

				...categories.map((category) => {
					return {
						url: [
							{ loc: this.site + category.url },
							{ lastmod: category.updatedAt.toJSON().substr(0,10) },
							{ priority: 0.8 },
						],
					}
				}),

				...portfolioItems.map((portfolioItem) => {
					return {
						url: [
							{ loc: this.site + '/portfolio/' + portfolioItem.link },
							{ lastmod: portfolioItem.updatedAt.toJSON().substr(0,10) },
							{ priority: 0.8 },
						],
					}
				}),

				...blogItems.map((blogItem) => {
					return {
						url: [
							{ loc: this.site + '/blog/' + blogItem.link },
							{ lastmod: blogItem.updatedAt.toJSON().substr(0,10) },
							{ priority: 0.8 },
						],
					}
				}),

				...reviewItems.map((reviewItem) => {
					return {
						url: [
							{ loc: this.site + '/reviews/' + reviewItem.link },
							{ lastmod: reviewItem.updatedAt.toJSON().substr(0,10) },
							{ priority: 0.8 },
						],
					}
				}),

			],
		}

    const data = this.xmlVersion + xml(xmlObject);
    fs.writeFileSync(this.path, data);
  }

}

module.exports = new SitemapHelper();
