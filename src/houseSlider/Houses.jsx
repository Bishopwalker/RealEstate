import React, { useEffect } from "react";
//@ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchHousesbyMLS } from "../redux/agentListingsSlice.js";

const mlsIds = [112844, 113591, 113740, 113741, 113935];

function Service() {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses);

  useEffect(() => {
    console.log(houses);
    //    const mlsIds = [112844, 113591, 113740, 113741, 113935];
    dispatch(fetchHousesbyMLS(mlsIds));
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 3, // Display 3 slides in a line
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Number of slides to show on tablet
          slidesToScroll: 1, // Number of slides to scroll on tablet
          vertical: false, // Disable vertical orientation
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Number of slides to show on mobile
          slidesToScroll: 1, // Number of slides to scroll on mobile
          vertical: true, // Enable vertical orientation
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Number of slides to show on smaller mobile
          slidesToScroll: 1, // Number of slides to scroll on smaller mobile
          vertical: true, // Enable vertical orientation
        },
      },
    ],
  };

  return (
    <Box sx={{ fontFamily: "Montserrat, sans-serif" }}>
      {houses && houses.length > 0 && houses[0].data.results.length > 0 ? (
        <Slider {...settings} sx={{ maxWidth: "80%", margin: "auto" }}>
          {houses[0].data.results.map((property, index) => (
            <Card key={index} sx={{ borderRadius: "16px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", mb: 2, mt: 2 }}>
              <CardMedia component="img" alt="Property Image" height="140" image={property.primary_photo.href} />
              <CardContent>
                <Typography variant="h5" component="div" sx={{ fontFamily: "Montserrat, sans-serif" }}>
                  {property.location.address.line}, {property.location.address.city}, {property.location.address.state_code} {property.location.address.postal_code}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Montserrat, sans-serif" }}>
                  Price: ${property.list_price}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Montserrat, sans-serif" }}>
                  Status: {property.status}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Montserrat, sans-serif" }}>
                  Description: {property.description.type}
                </Typography>
                {property.branding.map((brand, i) => (
                  <Typography key={i} variant="body2" color="text.secondary" sx={{ fontFamily: "Montserrat, sans-serif" }}>
                    Branding: {brand.name}
                  </Typography>
                ))}
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Montserrat, sans-serif" }}>
                  Community: {property.community || "N/A"}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Montserrat, sans-serif" }}>
                  Baths: {property.description.baths || "N/A"}
                </Typography>
                <Typography variant="body2" color="text.secondary"  sx={{ fontFamily: "Montserrat, sans-serif" }}>
                  Lot Sqft: {property.description.lot_sqft || "N/A"}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Montserrat, sans-serif" }}>
                  New Listing: {property.flags.is_new_listing ? "Yes" : "No"}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      ) : (
        <div>Loading...</div>
      )}
    </Box>
  );
}

export default Service;

