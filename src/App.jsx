import {
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import Layout from './components/Layout'

// PAGES
import StepOne from './pages/StepOne'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}> 
    <Route index element={<StepOne />} />
    {/* <Route index element={<h2>step one goes here</h2>} /> */}
  </Route>
))

function App() { 
  return (
    <RouterProvider router={router} />
  )
}

export default App
