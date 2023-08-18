import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { useSelector } from "react-redux";
import { selectDisplay } from "./redux/slices/displayCountrySlice";

function App() {
    const potential = useSelector(selectPotentials);
    console.log(potential);

    const currentDisplay = useSelector(selectDisplay);
    console.log('DISPLAY', currentDisplay); 
    return (
        <div className="App font-link">
            <Header />
            {currentDisplay ? <MainDisplay /> : <OptionDisplay/>}
            <OptionDisplay />
        </div>
    );
}

export default App;
