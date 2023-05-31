import {
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import Layout from './components/Layout'

// PAGES
import StepOne from './pages/StepOne'
import StepTwo from './pages/StepTwo'
import StepThree from './pages/StepThree'
import StepFour from './pages/StepFour'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}> 
    <Route index element={<StepOne />} />
    <Route path='2' element={<StepTwo />} />
    <Route path='3' element={<StepThree />} />
    <Route path='4' element={<StepFour />} />  
  </Route>
))

function App() { 
  return (
    <RouterProvider router={router} />
  )
}

export default App
