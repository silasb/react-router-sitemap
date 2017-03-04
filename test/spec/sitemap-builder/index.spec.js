import 'jasmine-collection-matchers';
import buildSitemap from '../../../lib/sitemap-builder';

describe('sitemap builder', () => {

	it('should build the sitemap', () => {

		const paths = [
			{
				url: '/hello/',
				changefreq: 'daily'
			}
		];

		const hostname = 'http://localhost';

		const etalon = {
			limit: 50000,
			hostname,
			urls: [
				{
					url: '/hello/',
					changefreq: 'daily'
				}
			],
			cacheResetPeriod: 0,
			cache: ''
		};

		expect(buildSitemap(hostname, paths)).toHaveSameItems(etalon, true);

	});

});
