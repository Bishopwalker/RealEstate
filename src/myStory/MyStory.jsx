import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";

const MyStory = () => {
    const paragraphs = [
        "In 1986, I was looking for a Weekend Waterfront Get-a-Way for me and my family. I owned boats for years and realized our 30ft Cruiser was a Hole in the Water I threw money into",
        "I needed a Home on the Water. I knew I wanted a place within 2 hours drive of the DC Beltway and somewhere near the Chesapeake Bay off of the Potomac River. We discovered an old 1900's Farmhouse on the Yeocomico River near a great little town called Callao. We came every weekend and our Kids aged 3 to 12 loved it as well.",
        "After over 30 years of working in the DC Metro area Custom Home Business, I needed to get away from the Big City and we came here to live full time. I loved the Northern Neck area so much that I became a Realtor and for the past 10 years, I have been helping folks just like me find just the PERFECT property.",
        "I know the area and waters here very well. I know which areas are the right spots as well as which areas should be avoided due to water depth, erosion, storm damage, and other negative aspects. Now my Kids are bringing their Kids and they love it here as well!",
        "My experience in the Home Building Industry gives me an edge. Though not a Certified Home Inspector, I have enough knowledge to know when viewing property any \"issues\" that most folks just do not see. I work with a great group of contractors to help with any/all repairs or issues if needed.",
        "I do not sell a home and move on to the next Client, but offer my friendship and service after the sale and help my Clients with any issue they may have with getting trees or yards cut or any maintenance issues. I have made many new friends from past Clients and get many referrals knowing how well their friends will be cared for.",
        "So please remember, I was once where you are now, needing a Waterfront Expert to help find the \"right\" place for you and your family. If you want your own \"Get-a-Way\"....I can help!"
    ];

    return (
        <Box sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${'/flag.png'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color:"yellow",
            fontStyle:"italic",
            fontWeight: 800,
            overflow:"scroll",
            padding:"10px",
            margin:"0 0 10px",
        }}>
            {paragraphs.map((paragraph, index) => (
                <Typography key={index} variant="body1" component="p" sx={{
                    fontWeight: 'bold',
                    lineHeight: 1.5,
                    fontSize: '1.2em',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}>
                    {paragraph}
                </Typography>
            ))}
        </Box>
    );
};

export default MyStory;
