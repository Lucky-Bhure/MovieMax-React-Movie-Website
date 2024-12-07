import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact, { getFormData } from './pages/Contact'
import Movies from './pages/Movies'
import AppLayout from './components/AppLayout/AppLayout'
import SignIn, { getSignInData } from './pages/SignIn'
import SignUp, { getSignUpData } from './pages/SignUp'
import ErrorPage from './pages/ErrorPage'
import getMoviesData from './API/GetMoviesData'
import MovieDetails from './components/UI/MovieDetails'
import getMovieDetails from './API/GetMovieDetails'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<AppLayout />} errorElement={<ErrorPage />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movies' element={<Movies />} loader={getMoviesData}/>
        <Route path='/movies/:movieId' element={<MovieDetails />} loader={getMovieDetails}/>
        <Route path='/contact' element={<Contact />} action={getFormData} /> {/*Contact Route */}
        <Route path='/signin' element={<SignIn />} action={getSignInData} />
        <Route path='/signup' element={<SignUp />} action={getSignUpData}/>
      </Route>
    )
  )

  return <RouterProvider router={router}/>;
}

export default App

