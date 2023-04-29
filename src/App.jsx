import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
    return (
        <>
            <Navbar name="BMJ Education" />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/services" element={<Services/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
            <Footer />

        </>
    )
}
export default App