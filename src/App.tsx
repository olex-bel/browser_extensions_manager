
import HeaderBar from "./components/HeaderBar";
import Filters from "./components/Filters";
import ExtensionGrid from "./components/ExtensionGrid";
import './App.css';

function App() {
    return (
        <div className="app">
            <HeaderBar />
            <div className="app__extensions-toolbar">
                <h1>Extensions List</h1>
                <Filters />
            </div>

            <ExtensionGrid />
        </div>
    )
}

export default App
