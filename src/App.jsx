import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import Tshirts from './components/Tshirts';
import Shoes from './components/Shoes';
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
    return (
        <>
            <Navbar name="BMJ Education" />

            <Routes>
                <Route path="/" element={<h1>THis is Home</h1>} />
                <Route path="/maincategory" element={<Main />}>
                    <Route path='tshirts' element={<Tshirts/>} />           
                    <Route path='shoes' element={<Shoes/>} />
                </Route>
                {/* <Route path="/maincategory" element={<Main />}>
                    <Route path=':size' element={<Tshirts />} />
                </Route> */}
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>Error 404</h1>} />
            </Routes>

            <Footer />
        </>
    )
}
export default App