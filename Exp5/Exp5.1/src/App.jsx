import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Dashboard from './components/dashboard'
import {lazy, Suspense} from 'react'
const Dashboard = lazy(() => import('./components/dashboard'))

function App() {
  //const [count, setCount] = useState(0)
  

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    </>
  )
}

export default App