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
import Reviews from "./review/Reviews.jsx";
import Blog from "./blog/Blog.jsx";
import Properties from "./properties/Properties.jsx";
import HouseDetails from "./properties/HouseDetails.jsx";
import RealatorPropertyDetails from "./propertyDetails/RealatorPropertyDetails.jsx";


function App() {

console.log('App.jsx')
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
                <Route  exact path='/' element={<Home/>}/>
                <Route path='/about' element={<MyStory/>}/>
                <Route path='/cities' element={<CityList/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/property-details' element={<PropertyDetails/>}/>
                <Route path='/review' element={<Reviews/>}/>
                <Route path='house-details' element={<HouseDetails/>}/>
                <Route path='/properties' element={<Properties/>} />
                <Route path='*' element={<h1>Not Found</h1>} />
                <Route path='/blog' element={<Blog/>} />
                <Route path='/realator-details' element={<RealatorPropertyDetails />} />

                {/* other routes */}
            </Routes>
            <Footer/>

        </Box>

   </>
  )
}

export default App
