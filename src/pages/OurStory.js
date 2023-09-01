import Navbar from "../components/Navbar";
import food from "./../images/food.jpg"
import "./../styles/OurStory.css"

const OurStory = () => {
    return (
        <div>
            <Navbar />
            <div className="ourStory">
                <div>
                    <h1>Our Story</h1>
                    <p>In a warm, bustling neighborhood in Bangkok, Thailand, my neighbor would whisk up the most marvelous traditional Thai dishes. Her passion for cooking was matched only by her immense generosity. Our houses were so close together that they were practically touching. Every night, my neighbor would pass me plates of her delicious creations through our windows.</p>
                    <p>It wasn't long before my neighbor became like a sister to me. We laughed, we shared stories, and we savored the incredible flavors that she crafted with love. Through those magical moments, Sisters was born.</p>
                    <p>Today, at Sisters, we are on a mission to bring you the same authentic recipes that my neighbor shared with me. Our menu is a testament to the rich tapestry of Thai cuisine, featuring an array of vibrant curries, fragrant stir-fries, and aromatic soups that will transport you to the vibrant streets of Bangkok.</p>
                </div>
                <div>
                    <img src={food} alt="pic" className="pic" />
                </div>
            </div>
        </div>
    )
}

export default OurStory;