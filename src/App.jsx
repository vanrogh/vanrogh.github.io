import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout';

// pages
import Use from './pages/Use'
import Description from './pages/Description'
import NotFound from './pages/NotFound'
import Home from './pages/Home'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="how-to-use" element={<Use />} />
      <Route path="/product/:productName" element={<Description />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App
