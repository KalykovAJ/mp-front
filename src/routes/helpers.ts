export const pathsPublic: { [key: string]: string } = {
	home: '/',
	productDetails: '/product/:idOrSlug',
}

export const pathsPrivate: { [key: string]: string } = {
	accountSettings: '/account-settings',
}

export const paths: { [key: string]: string } = Object.assign(
	{},
	pathsPublic,
	pathsPrivate
)

export const CheckPathMatch = (
	pathname: string,
	paths: { [key: string]: string }
) => {
	let isMatch = false

	const allPaths = Object.keys(paths).map(key => paths[key])
	const pathFirstPart = pathname.split('/')[1]

	allPaths.forEach(path => {
		if (path.slice(1) === pathFirstPart) isMatch = true
	})

	return isMatch
}
