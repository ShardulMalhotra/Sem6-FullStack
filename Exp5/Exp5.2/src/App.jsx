import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {lazy,Suspense} from 'react';
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Suspense fallback={<h3>Loading...</h3>}>
              <Home />
            </Suspense>} />
        <Route path='/about' element={<Suspense fallback={<h3>Loading...</h3>}>
              <About />
            </Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<h3>Loading...</h3>}>
              <Contact />
            </Suspense>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;