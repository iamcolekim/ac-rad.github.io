import { Routes, Route } from 'react-router-dom';
import { Header, Landing, About, Footer, Error } from './components/exports.js';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/error" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
