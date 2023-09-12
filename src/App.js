import "./App.css";
import About from "./components/About/About";
import Achievements from "./components/Achievements/Achievements";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Price from "./components/Price/Price";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <Achievements></Achievements>
            <About></About>
            <Service></Service>
            <Portfolio></Portfolio>
            <Price></Price>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Footer></Footer>
        </>
    );
}

export default App;
