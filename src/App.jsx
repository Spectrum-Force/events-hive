import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing'
import Event from './pages/event'
import College from './pages/college'
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import CreateEvent from './pages/createEvent'
import NotFound from './pages/notFound'
import RootLayout from './layout/rootLayout'


const router = createBrowserRouter([

  {
    path:"/",
    element: <RootLayout/>,
    children:[
      {index: true, element: <Landing/>},
      {path: "/events", element: <Event/>},
      {path: "/college", element: <College/>},
      {path: "/signUp", element: <SignUp/>},
      {path: "/signIn", element: <SignIn/>},
      {path: "/createEvent", element: <CreateEvent/>},
      {path: "/notFound", element: <NotFound/>},
    ]
  }

])
function App() {
 
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
