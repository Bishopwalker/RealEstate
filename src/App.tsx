
import Header from "./header/Header.jsx";
// @ts-ignore
 import Home from "./home/Home.jsx";
import './App.css'
import {Box} from "@mui/material";

import {Route, Routes} from "react-router-dom";
// @ts-ignore
import MyStory from "./myStory/MyStory";
// @ts-ignore
import CityList from "./areas/CityList";
// @ts-ignore
import Footer from "./footer/Footer";
// @ts-ignore
import Contact from "./contact/Contact";
// @ts-ignore
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
                <Route path='/' element={<Home/>}/>
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
