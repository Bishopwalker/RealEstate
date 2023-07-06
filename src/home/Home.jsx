import VideoSlider from "../videoSlider/VideoSlider.jsx";
import Houses from "../imageSlider/Houses.jsx";
import {Box} from "@mui/material";
import { houses } from './houses.ts';
export default function Home() {
    return(
        <Box>
            <VideoSlider/>
            <Houses houses={houses} />
        </Box>

    );
}
