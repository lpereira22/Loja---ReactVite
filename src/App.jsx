import Banner from "./components/Banner";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Global from "./styles/Global.js";

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