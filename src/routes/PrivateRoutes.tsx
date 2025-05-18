import { lazy } from 'react'
import { Route, Navigate, Routes, useLocation } from 'react-router'
import { paths, CheckPathMatch } from './helpers'

const AccountSettingsPage = lazy(() => import('pages/AccountSettingsPage'))

const PrivateRoutes: React.FC = () => {
	const { pathname } = useLocation()

	const isMatch = CheckPathMatch(pathname, paths)

	return (
		<Routes>
			<Route path={paths.accountSettings} element={<AccountSettingsPage />} />
			<Route
				path='*'
				element={!isMatch ? <Navigate to={paths.home} /> : null}
			/>
		</Routes>
	)
}

export default PrivateRoutes
