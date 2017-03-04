const pathsWithParams = [
	'/path-one',
	'/path-two',
	'/path-two/sub-path-two/:subParam',
	'/path-three',
	'/path-three/sub-path-three/:subParam',
	'/path-three/sub-path-three/:subParam/:subSubParam',
];

const paths = [
	{ url: '/path-one' },
	{ url: '/path-two' },
	{ url: '/path-two/sub-path-two/1', hello: 'world' },
	{ url: '/path-three' },
	{ url: '/path-three/sub-path-three/1' },
	{ url: '/path-three/sub-path-three/2' },
	{ url: '/path-three/sub-path-three/1/a' },
	{ url: '/path-three/sub-path-three/1/a' },
	{ url: '/path-three/sub-path-three/2/a' },
	{ url: '/path-three/sub-path-three/1/a' },
	{ url: '/path-three/sub-path-three/1/b' },
	{ url: '/path-three/sub-path-three/2/a' },
	{ url: '/path-three/sub-path-three/2/b' },
];

export { paths, pathsWithParams };
