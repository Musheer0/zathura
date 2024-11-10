// bg-[linear-gradient(25deg,#AC56C1,#092258,#2D85CB)]

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/home/home'
import Footer from "./components/home/footer";
import About from "./components/about/about";
import ErrorPage from "./components/error";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage/>
    },
    {
      path:'/about',
      element: <About/>
    }
  ]);
  return (
    <main className='w-full  relative 
    flex flex-col  min-h-screen
    '>
      <RouterProvider router={router} />
      <Footer/>
    </main>
  )
}

export default App
