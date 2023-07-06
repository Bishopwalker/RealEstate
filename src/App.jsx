
import Header from "./header/Header.jsx";
 import Home from "./home/Home.jsx";
import './App.css'
import {Box} from "@mui/material";

import {Route, Routes} from "react-router-dom";
import MyStory from "./myStory/MyStory";
import CityList from "./areas/CityList";
import Footer from "./footer/Footer";
import Contact from "./contact/Contact";
import PropertyDetails from "./propertyDetails/PropertyDetails";
function App() {


    return (
    <>
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                }}
        >
                <Header/>

            <Routes>
                <Route  exact path='/' element={<Home  />}/>
                <Route path='/about' element={<MyStory/>}/>
                <Route path='/cities' element={<CityList/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/property-details' element={<PropertyDetails/>}/>
                {/* other routes */}
            </Routes>
            <Footer/>

        </Box>

   </>
  )
}

export default App
