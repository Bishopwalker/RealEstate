
import Header from "./header/Header";
import Home from "./home/Home";
import './App.css'
import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";


function App() {


  return (
    <>
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                }}
        >
            <Routes>
                {/*<Route path="/fine-properties" element={<FineProperties/>} />*/}
                {/* other routes */}
            </Routes>
    <Header/>
            <Home/>
        </Box>

   </>
  )
}

export default App
