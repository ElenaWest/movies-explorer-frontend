import './Main.css';
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
// import Footer from '../Footer/Footer.jsx';
// import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
// import NotFound from '../NotFound/NotFound';

function Main({
    name,
    onRegister,
    onLogin,
    logOut,
    editUserData,
    setIsError,
    savedMovies,
    onDelete,
    addMovie,
    isSuccessful,
    setSuccessful,
    setIsEdit,
    isEdit
}) {
    return(
        <main className="main">
            {{
              homepage:
                <>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
              </>,
              signin: <Login name={name} onLogin={onLogin} setIsError={setIsError} />,
              signup: <Register name={name} onRegister={onRegister} setIsError={setIsError} />,
              profile: <Profile
              name={name}
              logOut={logOut}
              editUserData={editUserData}
              setIsError={setIsError}
              isSuccessful={isSuccessful}
              setSuccessful={setSuccessful}
              setIsEdit={setIsEdit}
              isEdit={isEdit}
            />,
            movies:
              <>
                <Movies savedMovies={savedMovies} addMovie={addMovie} setIsError={setIsError} />
              </>,
            savedmovies:
              <>
                <SavedMovies savedMovies={savedMovies} onDelete={onDelete} setIsError={setIsError} />                
              </>                
            }[name]}
          </main>
        )
      }

export default Main;