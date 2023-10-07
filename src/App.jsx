import './App.css'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import HomePage from './components/Home'
import Product from './components/Product'
import Rootlayout from './components/Rootlayout'
import ErrorPage from './components/pages/ErrorPage'
import ProductDetailPage from './components/pages/ProductDetails'
const router = createBrowserRouter([
{
  path:'/',
  element:<Rootlayout/>,
  errorElement:<ErrorPage/>,
  children:[
    {path:'',element:<HomePage/>},
    {path:'products',element:<Product/>},
    {path:'products/:productId',element:<ProductDetailPage/>},
  ]
}
])

// const routeDefinations = createRoutesFromElements(
//   <Route><Route path='/' element={<HomePage/>}/>
//   <Route path='/products' element={<Product/>}/></Route>
// )

// const router = createBrowserRouter(routeDefinations);

function App() {
  return (

      <div>
        <RouterProvider router={router}/> 
    </div>
  )
}

export default App
