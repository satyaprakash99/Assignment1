import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
const Home = () => {
    return (
        <div>
            <Banner />
            <div className="main-contant">
                <div className="layout">
                    <Category />
                    <Products headingText="Populer Products" />
                </div>
            </div>
        </div>
    );
};

export default Home;
