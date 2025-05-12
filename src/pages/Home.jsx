import Banner from "../components/Banner/index.jsx";
import Header from "../components/Header/index.jsx";
import Main from "../components/Main/index.jsx";
import Footer from "../components/Footer/index.jsx";

import Global from "../styles/Global.js";

function App(){
    return(
        <div>
            <Header/>
            <Global/>
            <Banner/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;