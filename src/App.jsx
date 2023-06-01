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
import Error from './components/Error'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} > 
    <Route index element={<StepOne />} errorElement={<Error />} />
    <Route path='2' element={<StepTwo />} errorElement={<Error />}/>
    <Route path='3' element={<StepThree />} errorElement={<Error />}/>
    <Route path='4' element={<StepFour />} errorElement={<Error />}/>  
  </Route>
))

function App() { 
  return (
    <RouterProvider router={router} />
  )
}

export default App
