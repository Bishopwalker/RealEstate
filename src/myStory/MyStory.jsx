import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const MyStory = () => {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      window.scrollTo(0, 0);
      setFirstLoad(false);
    }
  }, [firstLoad]);

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
    <Box
      sx={{
        width: '100%',
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${'/flag.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        fontWeight: 800,
        padding: '20px',
        paddingBottom: '40px',
        fontFamily: 'Montserrat, sans-serif',
        display: 'flex', // Use flex display
        justifyContent: 'center', // Center align the children horizontally
      }}
    >
      <Box
        sx={{
          width: '80%',
        }}
      >
      <Typography
        variant="h1"
        sx={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          zIndex: 1,
          color: 'white',
          textShadow: '2px 2px 4px #000000',
          marginTop: '1rem',
          marginBottom: '2rem',
      	  fontFamily: "'Montserrat', sans-serif",
        }}
      >
        My Story
      </Typography>
        {paragraphs.map((paragraph, index) => (
          <Typography
            key={index}
            variant="body1"
            component="p"
            sx={{
              lineHeight: 1.5,
			  textAlign: 'justify',
              fontSize: '1.2rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              fontFamily: 'Montserrat, sans-serif',
              marginBottom: '1rem',
            }}
          >
            {paragraph}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default MyStory;

