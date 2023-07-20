import VideoSlider from "../videoSlider/VideoSlider.jsx";
import Houses from "../houseSlider/Houses.jsx";
import {Box} from "@mui/material";

import { useDispatch, useSelector } from 'react-redux';
import {fetchHousesbyMLS} from "../redux/agentListingsSlice.js";
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import BusinessCard from "./BusinessCard.jsx";

export default function Home() {
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        if (firstLoad) {
            window.scrollTo(0, 0);
            setFirstLoad(false);
        }
    }, [firstLoad]);


    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses);
    useEffect(() => {
        const mlsIds = [112844, 113591, 113740, 113741, 113935];
        dispatch(fetchHousesbyMLS(mlsIds));
    }, [dispatch]);



    return(
        <Box>
            <VideoSlider/>
            <Typography sx={{
                textAlign: 'center',
                marginTop: '2rem',
                marginBottom: '2rem',
                fontFamily: 'cursive',
            }} variant={'h4'}>
                My Exclusive Listings
            </Typography>
            <Houses houses={houses} />
            <BusinessCard/>
        </Box>

    );
}
