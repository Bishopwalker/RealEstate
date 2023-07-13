import VideoSlider from "../videoSlider/VideoSlider.jsx";
import Houses from "../houseSlider/Houses.jsx";
import {Box} from "@mui/material";

import { useDispatch, useSelector } from 'react-redux';
import {fetchHouses} from "../redux/agentListingsSlice.js";
import {useEffect} from "react";
import Typography from "@mui/material/Typography";

export default function Home() {
    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses);
    useEffect(() => {
        const mlsIds = [112844, 113591, 113740, 113741, 113935];
        dispatch(fetchHouses(mlsIds));
    }, [dispatch]);

console.log(houses);

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
        </Box>

    );
}
