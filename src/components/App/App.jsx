import './App.css';
// import CurrentUserContext from '../../context/CurrentUserContext.js';
import Login from '../Login/Login';
import Register from '../Register/Register.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile.jsx';

function App() {
  return (
    // <CurrentUserContext.Provider>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>     
    // </CurrentUserContext.Provider>
  )
}

export default App;
