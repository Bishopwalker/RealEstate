import React, {useState} from 'react';
import {ThemeProvider, useTheme} from '@mui/material/styles';
import {Card, CardContent, CardHeader, CardMedia, Container, Grid, Typography} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from "@mui/material/Button";


const blogPosts = [
  {
    title: 'How to hire a mover',
    date: 'August 20, 2023',
    image: '/dog_ufo.png',
    content: 'Moving can be a stressful and time-consuming process, but hiring the right moving company can make it a lot smoother and easier. Here are some tips on how to hire the best moving company for your needs.\n' +
        '\n' +
        '1. Start Early\n' +
        'Start your search for a moving company as soon as you know you\'ll be moving. This gives you plenty of time to research and compare different companies. Remember, the best movers often get booked up quickly, especially during peak moving season.\n' +
        '\n' +
        '2. Get Recommendations\n' +
        'Ask friends, family, and colleagues for recommendations. Personal experiences can give you a good idea of what to expect. Online reviews and ratings can also be helpful, but remember to take them with a grain of salt.\n' +
        '\n' +
        '3. Verify Credentials\n' +
        'Ensure that the moving company is licensed and insured. If you\'re moving out of state, the company should have a U.S. Department of Transportation number. For in-state moves, check with your local consumer affairs agency.\n' +
        '\n' +
        '4. Get Estimates\n' +
        'Get at least three estimates from different moving companies. Be wary of any estimate that is significantly lower than the others, as it could be a sign of a scam. Remember, an estimate is only as accurate as the information you provide, so be thorough in listing all the items you need to move.\n' +
        '\n' +
        '5. Ask the Right Questions\n' +
        'Ask about the moving company\'s experience, especially with moves similar to yours. Find out what is included in the price and if there are any additional fees. Ask about their cancellation policy and if they subcontract their moves.\n' +
        '\n' +
        '6. Understand Your Insurance Options\n' +
        'All moving companies are required to provide basic liability coverage, but this may not fully cover the value of your belongings. Consider purchasing additional insurance for peace of mind.\n' +
        '\n' +
        '7. Trust Your Gut\n' +
        'Finally, trust your instincts. If something doesn\'t feel right about a company, it\'s better to choose another one. The moving company will be handling your most precious belongings, so it\'s important that you feel comfortable with them.\n' +
        '\n' +
        'Hiring a moving company is an important decision that can greatly impact your moving experience. By following these tips, you can find a reliable, professional moving company that suits your needs and makes your move as stress-free as possible. Happy moving!',
  },
  {
    title: 'How to Shop for a Waterfront Property',
    date: 'August 22, 2023',
    image: '/dog_ufo4.png',
    content: "Before you start your search for a waterfront property, define what you want from it. Are you looking for a peaceful retreat, a place for water sports, or a stunning view? Your needs will significantly influence the type of property and location you should consider. Hiring a real estate agent who specializes in waterfront properties can help you navigate these issues. They can provide invaluable advice about the quality of the property, shoreline, and water, as well as regulations related to waterfront properties. While the house is an important factor, pay more attention to the property itself. Changing the house is easy, but changing the view and location is impossible. Consider factors like the property's proximity to the water, the type of water body, and the privacy. Waterfront property owners may have rights and restrictions related to the water and shoreline. These can affect your ability to fish, dock a boat, or make changes to the shoreline. Make sure you understand these rights and restrictions before purchasing. Waterfront homes endure more wear and tear due to their exposure to the elements. Hire a professional to inspect the home for potential issues like water damage, mold, and corrosion. Also, consider factors like flood risk and insurance costs. Waterfront properties often come with additional costs, including higher insurance and maintenance expenses. Make sure you understand these costs and factor them into your budget. Visit the property at different times of the day and during different seasons. This will give you a better understanding of factors like sunlight, water levels, and the amount of activity on the water. Shopping for a waterfront property can be a complex process, but with careful consideration and the right help, you can find a property that offers the lifestyle you dream of. Happy house hunting!"

  },
  {
    title: "Locating a Mortgage Loan Officer",
    date: "2023-08-01",
    image: "/ferret.png",
    content: "When it comes to buying a home, securing the right mortgage is a crucial step. One of the key players in this process is a mortgage loan officer. Here are some tips to help you locate a competent and reliable mortgage loan officer:\n\n1. Referrals: Start by asking for referrals from friends, family, or your real estate agent. They can provide firsthand accounts of their experiences and recommend a loan officer who provided excellent service.\n\n2. Research: Conduct online research to find loan officers in your area. Look at their reviews and ratings on various platforms to gauge their reputation.\n\n3. Interview: Once you have a shortlist, set up meetings with each loan officer. This will give you an opportunity to assess their communication skills, knowledge, and willingness to help.\n\n4. Credentials and Experience: Check the loan officer's credentials and experience. They should be licensed to operate in your state and have a good understanding of the mortgage process, loan types, and lenders.\n\n5. Transparency: A good loan officer will be transparent about the loan process, interest rates, fees, and any potential issues that may arise. They should be willing to answer your questions and provide clear explanations.\n\n6. Responsiveness: Timely communication is crucial in the mortgage process. The loan officer should be prompt in responding to your calls or emails.\n\n7. Compatibility: Finally, choose a loan officer you feel comfortable with. This is someone you'll be working closely with, so it's important that you trust them and feel at ease discussing your financial situation.\n\nRemember, the right mortgage loan officer can make your home buying experience smoother and less stressful. Take your time to find someone who fits your needs and can guide you through this important financial decision."
  },
  {
    title: "The Importance of Home Staging: Making Your Property Stand Out",
    date: "2023-08-15",
    image: "/garden.png",
    content: "Home staging is a crucial part of selling your property. It involves presenting your home in the best possible light to potential buyers, making it more appealing and helping it sell faster and for a higher price. In this article, we will discuss the importance of home staging and provide some tips on how to effectively stage your home for sale."
  },
  {
    title: "The Importance of Home Staging: Making Your Property Stand Out",
    date: "2023-08-15",
    image: "/dog_fishing.png",
    content: "Home staging is a crucial part of selling your property. It involves presenting your home in the best possible light to potential buyers, making it more appealing and helping it sell faster and for a higher price. In this article, we will discuss the importance of home staging and provide some tips on how to effectively stage your home for sale."
  },
  {
    title: "Tips for First-Time Home Buyers: Navigating the Real Estate Market",
    date: "2023-09-01",
    image: "/lincon_sales.png",
    content: "Buying your first home can be an exciting but daunting process. There are many factors to consider, from finding the right property and securing a mortgage to understanding the local real estate market and negotiating the sale. In this article, we will provide some useful tips for first-time home buyers to help you navigate the real estate market and make the home buying process as smooth as possible."
  }

];

const Blog = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [expandedPost, setExpandedPost] = useState(null);

  const handleViewMore = (index) => {
    if (expandedPost === index) {
      setExpandedPost(null);
    } else {
      setExpandedPost(index);
    }
  };

  return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{ padding: '40px 0' }}>
          <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', margin: '0rem 0 2rem 0', color: '#2d3436', fontFamily: 'Montserrat, sans-serif', }}>
            Blog
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {blogPosts.map((post, index) => (
                <Grid key={index} item xs={12} sm={expandedPost === index ? 12 : 6} md={expandedPost === index ? 12 : 4}>
                  <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderRadius: '16px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)', }, }}>
                    <CardHeader title={post.title} sx={{ background: '#2d3436', color: '#fff', padding: '12px 16px', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', fontWeight: 'bold', fontSize: '1.2rem', }} />
                    <CardMedia component="img" height="150" image={post.image} alt="Blog Post Image" sx={{ objectFit: 'cover', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', }} />
                    {!isSmallScreen && (
                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="subtitle1" color="text.secondary">{post.date}</Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '12px', flexGrow: 1 }}>
                            {expandedPost === index ? post.content : `${post.content.slice(0, 100)}...`}
                          </Typography>
                        </CardContent>
                    )}
                    <Button variant="contained" color="primary" onClick={() => handleViewMore(index)}>
                      {expandedPost === index ? 'View Less' : 'View More'}
                    </Button>
                  </Card>
                </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
  );
};

export default Blog;