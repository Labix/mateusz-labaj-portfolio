import Eshopnavbar from "../Components/Eshopnavbar";
import Announcement from "../Components/Announcement";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories"
import Products from "../Components/Products"
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Home = () =>{
    return(
        <div>
            <div className="">
                <div className="z-20">
            <Eshopnavbar />
            <Slider />
                </div>
                <div className="z-10 ">
            <Products/>
                </div>
            <div className="">
            <Newsletter />
                </div>
            </div>
        </div>
    )
}

export default Home