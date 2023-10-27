import './App.css';
import CurrentUserContext from '../../context/CurrentUserContext.js';
import Main from '../Main/Main.jsx';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import { useCallback, useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import apiMain from '../../utils/MainApi.js';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import SendContext from '../../context/SendContext.js';
import ErrorContext from '../../context/ErrorContext.js';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';


function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [currentUser, setCurrentUser] =  useState({})
  const [savedMovies, setSavedMovies] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [isSend, setIsSend] = useState(false)
  const [isCheckToken, setIsCheckToken] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isSuccessful, setIsSuccessful] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([apiMain.getUserData(localStorage.jwt), apiMain.getMovies(localStorage.jwt)])
        .then(([userData, dataMovies]) => {
          setSavedMovies(dataMovies.reverse())
          setCurrentUser(userData)
          setLoggedIn(true)
          setIsCheckToken(false)
        })
        .catch((error) => {
          console.error(`Ошибка при загрузке начальных данных ${error}`)
          setIsCheckToken(false)
          localStorage.clear()
        })
    } else {
      setLoggedIn(false)
      setIsCheckToken(false)
      localStorage.clear()
    }
  }, [loggedIn])

  const setSuccessful = useCallback(() => {
    setIsSuccessful(false)
  }, [])

  function handleMovieDelete(deletemovieId) {
    apiMain.deleteMovie(deletemovieId, localStorage.jwt)
      .then(() => {
        setSavedMovies(savedMovies.filter(movie => { return movie._id !== deletemovieId }))
      })
      .catch((error) => console.error(`Ошибка при удалении фильма ${error}`))
  }

  function handleToggleMovie(data) {
    const isAdd = savedMovies.some(element => data.id === element.movieId)
    const searchClickMovie = savedMovies.filter((movie) => {
      return movie.movieId === data.id
    })
    if (isAdd) {
      handleMovieDelete(searchClickMovie[0]._id)
    } else {
      apiMain.addMovie(data, localStorage.jwt)
        .then(res => {
          setSavedMovies([res, ...savedMovies])
        })
        .catch((error) => console.error(`Ошибка при добавлении лайка ${error}`))
    }
  }

  function handleLogin(email, password) {
    setIsSend(true)
    apiMain.authorization(email, password)
      .then(res => {
        localStorage.setItem('jwt', res.token)
        setLoggedIn(true)
        navigate('/movies')
        window.scrollTo(0, 0)        
      })
      .catch(error => {
        setIsError(true)
        console.error(`Ошибка при авторизации ${error}`)
      })
      .finally(() => setIsSend(false))
  }

      function handleRegister(username, email, password) {
        setIsSend(true)
        apiMain.registration(username, email, password)
          .then((res) => {
            if (res) {
              setLoggedIn(false)
              apiMain.authorization(email, password)
                .then((res) => {
                  localStorage.setItem('jwt', res.token)
                  setLoggedIn(true)
                  navigate('/movies')
                  window.scrollTo(0, 0)
                })
                .catch((error) => {
                  setIsError(true)
                  console.error(`Ошибка авторизации после регистрации ${error}`)
                })
                .finally(() => setIsSend(false))
            }
          })
          .catch((error) => {
            setIsError(true)
            console.error(`Ошибка при регистрации ${error}`)
          })
          .finally(() => setIsSend(false))
      }

      function logOut() {
        localStorage.clear()
        setLoggedIn(false)
        navigate('/')
      }

      function handleUpdateUser(username, email) {
        setIsSend(true)
        apiMain.setUserInfo(username, email, localStorage.jwt)
          .then(res => {
            setCurrentUser(res)
            setIsSuccessful(true)
            setIsEdit(false)
          })
          .catch((error) => {
            setIsError(true)
            console.error(`Ошибка при редактировании данных профиля ${error}`)
          })
          .finally(() => setIsSend(false))
      }

  return (
    <div className='app'>
      {isCheckToken ? <Preloader />:
        <CurrentUserContext.Provider value={currentUser}>
          <SendContext.Provider value={isSend}>
            <ErrorContext.Provider value={isError}>

            {location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile' ?
             <Header loggedIn={loggedIn} name='homepage' /> : ''}

              <Routes>

              <Route path='/signin' element={
                  loggedIn ? <Navigate to='/movies' replace /> :
                    <Main name='signin' onLogin={handleLogin} setIsError={setIsError} />
              } />

              <Route path='/signup' element={
                  loggedIn ? <Navigate to='/movies' replace /> :
                    <Main name='signup' onRegister={handleRegister} setIsError={setIsError} />
              } />

              <Route path='/profile' element={
                  <ProtectedRoute
                  element={Profile}
                  name='profile'
                  loggedIn={loggedIn}
                  logOut={logOut}
                  editUserData={handleUpdateUser}
                  setIsError={setIsError}
                  isSuccessful={isSuccessful}
                  setSuccessful={setSuccessful}
                  setIsEdit={setIsEdit}
                  isEdit={isEdit}
                />
                } />

                <Route path='/' element={
                  <>
                    <Main name='homepage' />
                  </>  
                } />

                <Route path='/movies' element={
                  <ProtectedRoute
                  element={Movies}
                  name='movies'
                  savedMovies={savedMovies}
                  addMovie={handleToggleMovie}
                  loggedIn={loggedIn}
                  setIsError={setIsError}
                />
                } />
                
                <Route path='/saved-movies' element={
                  <ProtectedRoute
                  element={SavedMovies}
                  name='savedmovies'
                  onDelete={handleMovieDelete}
                  savedMovies={savedMovies}
                  loggedIn={loggedIn}
                  setIsError={setIsError}
                />
                } />        

                <Route path='*' element={<NotFound />} />
              </Routes>
              {location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' ? <Footer /> : ''}
            </ErrorContext.Provider>
          </SendContext.Provider>
        </CurrentUserContext.Provider>
      }
    </div>     
  )
}

export default App;
