import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import MainContent from "./Components/MainContent/MainContent";
import AddToCart from "./Components/MainContent/AddToCart";

const foodItems = [
    {
        id: "1",
        name: "Pizza",
        description: "Finest pizza with delicious toppings!",
        price: 499,
    },
    {
        id: "2",
        name: "Pasta",
        description: "An italian specialty!",
        price: 349,
    },
    {
        id: "3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 299,
    },
    {
        id: "4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 399,
    },
];

function App() {
    return (
        <div className="App">
            <NavBar />
            <MainContent />
            <AddToCart foodItems={foodItems} />
        </div>
    );
}

export default App;
