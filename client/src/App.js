import './app.css'
import Navbar from './components/Navbar/Navbar'
import AllBlogs from './components/Pages/AllBlogs/AllBlogs'
import Home from './components/Pages/Home/Home'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Write from './components/write/Write'
import Show from './components/Show/Show'
import Trending from './components/Pages/Trending/Trending'
import Login from './components/login/login.jsx'
import SignUp from './components/signUp/signup.jsx'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'


const queryClient = new QueryClient()

function App() {
  const { currentUser } = useContext(AuthContext)
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/register" />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <SignUp />,
    },
    {
      path: '/blogs',
      element: (
        <ProtectedRoute>
          <Navbar />
          <Home />
          <Trending />
          <AllBlogs />
        </ProtectedRoute>
      ),
    },
    {
      path: '/blogs/new',
      element: (
        <ProtectedRoute>
          <Navbar />
          <Write />
        </ProtectedRoute>
      ),
    },
    {
      path: '/blogs/:id',
      element: (
        <ProtectedRoute>
          <Navbar />
          <Show />
        </ProtectedRoute>
      ),
    },
    {
      path: '/blogs/:id/edit',
      element: (
        <ProtectedRoute>
          <Navbar />
          <Write />
        </ProtectedRoute>
      ),
    },
  ])
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
