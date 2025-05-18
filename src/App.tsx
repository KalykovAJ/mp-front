import { Suspense } from 'react'
import PublicRoutes from 'routes/PublicRoutes'
import PrivateRoutes from 'routes/PrivateRoutes'

function App() {
	return (
    <Suspense fallback={<div>Loading...</div>}>
      <PublicRoutes />
      <PrivateRoutes />
    </Suspense>
  )
}

export default App
