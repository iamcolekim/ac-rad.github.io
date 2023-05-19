import './App.css';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link to="https://reactjs.org">Learn React</Link>
            </header>
            <h1 className="text-green-500 font-bold underline">Hello world!</h1>
        </div>
    );
}

export default App;
