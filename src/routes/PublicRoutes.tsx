import { lazy } from 'react'
import { Route, Navigate, Routes, useLocation } from 'react-router'
import { paths, CheckPathMatch } from './helpers'

const HomePage = lazy(() => import('pages/HomePage'))
const ProductDetailsPage = lazy(() => import('pages/ProductDetailsPage'))

const PublicRoutes: React.FC = () => {
	const { pathname } = useLocation()

	const isMatch = CheckPathMatch(pathname, paths)

	return (
		<Routes>
			<Route path={paths.home} element={<HomePage />} />
			<Route path={paths.productDetails} element={<ProductDetailsPage />} />
			<Route
				path='*'
				element={!isMatch ? <Navigate to={paths.home} /> : null}
			/>
		</Routes>
	)
}

export default PublicRoutes
