
import Header from "./header/Header";
// @ts-ignore
 import Home from "./home/Home.jsx";
import './App.css'
import {Box} from "@mui/material";

import {Route, Routes} from "react-router-dom";
// @ts-ignore
import MyStory from "./myStory/MyStory";

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

                <Route path='/about' element={<MyStory/>}/>
                {/* other routes */}
            </Routes>
            <Home/>
        </Box>

   </>
  )
}

export default App
