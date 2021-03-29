import './App.css';
import DisplayItems from './displayItemsComp/DisplayItemsComp'

function App() {
    return (
        <div>
            <div className="App">
              <header className="App-header">
                <h2> Shipment Tracker </h2>
                <DisplayItems />
              </header>
            </div>
        </div>
    );
}

export default App;
