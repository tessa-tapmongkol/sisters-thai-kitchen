import Navbar from "../components/Navbar";
import food from "./../images/food.jpg";
import "./../styles/Home.css"

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="homeFeature">
                <h1>Authentic Thai Food</h1>
                <img className="foodImage" src={food} alt="food" />
            </div>
        </>
    )
};

export default Home;