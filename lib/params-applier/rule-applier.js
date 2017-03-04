import replaceParams from './params-replacer';

export default (path = '', rule = {}) => {

	const { siteMap, ...rest } = rule;
	const params = Object.keys(rest);

	const urls = replaceParams([path], params, rule);
	return urls.map(url => ({
		url,
		...siteMap
	}));

};
