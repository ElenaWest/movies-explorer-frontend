import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Main from '../Main/Main.jsx';

function ProtectedRouteContent({ ...props }) {
    return(
        <>    
        <Header {...props} />
        <Main {...props} />
        <Footer {...props} />    
        </>
    )
}

export default ProtectedRouteContent;