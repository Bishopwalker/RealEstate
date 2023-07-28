import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Box,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
    Button
} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouses } from "../redux/fetchHousesSlice.js";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

function Service() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const initialParams = {
        city: 'Lottsburg',
        limit: 50,
        price_min: '',
        price_max: '',
        beds_min: '',
        beds_max: '',
        baths_min: '',
        baths_max: '',
        property_type: [],
        community_ammenities: [],
        lot_views: [],
        new_construction: false,
        hide_pending_contingent: false,
        has_virtual_tours: false,
        has3d_tours: false,
        hide_foreclosure: false,
        price_reduction: false,
        open_house: false,
        no_hoa_fee: false,
        days_on_realtor: '',
        expand_search_radius: '',
        home_size_max: '',
        home_size_min: '',
        lot_size_min: '',
        lot_size_max: ''
    };

    const [params, setParams] = useState( initialParams );

    const houses = useSelector((state) =>  state.houses);
    const cities = [
        "Burgress",
        "Callao",
        "Colonial Beach",
        "Hague",
        "Heathsville",
        "Irvington",
        "King George",
        "Kilmarnock",
        "Lottsburg",
        "Reedville",
        "Tappahannock",
        "Urbanna",
        "Warsaw",
        "White Stone"
    ]

    const limits = [10, 25, 50, 100, 150,200];
    const propertyTypes = ['multi_family', 'single_family', 'mobile', 'land', 'farm'];
    const daysOnRealtorOptions = ['today', '7', '14', '21', '30'];
    const expandSearchRadiusOptions = ['1', '5', '10', '25', '50'];
    const homeSizeMaxOptions = ['1000', '1250', '1500', '1750', '2000', '2250', '2500', '2750', '3000', '3250', '3500', '3750', '5000', '7500', '10000'];
    const homeSizeMinOptions = ['1000', '1250', '1500', '1750', '2000', '2250', '2500', '2750', '3000', '3250', '3500', '3750', '5000', '7500', '10000'];
    const lotSizeOptions = ['2000', '300', '4000', '5000', '7500', '10890', '21780', '43560', '87120', '217800', '435600', '653400', '871200'];
    const lotViewOptions = ['waterfront','cul_de_sac','corner_lot',
        'golf_course_lot_or_frontage','hill_or_mountain_view','ocean_water','lake_view','river_view']
    const communityAmmenitiesOptions = ['community_swimming_pool','community_spa_or_hot_tub', 'community_golf','community_security_features',
    'community_boat_facilities','tennis_court','community_clubhouse','senior_community' ];

    useEffect(() => {
        console.log(params)
        dispatch(fetchHouses(params));
    }, [params, dispatch]);
console.log(houses);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: true,
                },
            },
        ],
    };
    const resetParams = () => {
        setParams(initialParams);
    };

    const handleParamChange = (paramName) => (event) => {
        setParams(prevParams => ({ ...prevParams, [paramName]: event.target.value }));
    };
    const handleMultiSelectChange = (paramName) => (event) => {
        setParams(prevParams => ({ ...prevParams, [paramName]: event.target.value }));
    };

    const handleCheckboxChange = (paramName) => (event) => {
        setParams(prevParams => ({ ...prevParams, [paramName]: event.target.checked }));
    };

    return (
        <Box minHeight='300px' padding="20px" margin="auto" >
            <Grid container spacing={3}>

                <Grid item xs={12}>


                    <FormControl>
                        <InputLabel id="city-label">City</InputLabel>
                        <Select
                            labelId="city-label"
                            id="city-select"
                            value={params.city}
                            label="City"
                            onChange={handleParamChange('city')}
                        >
                            {cities.map((city, index) => (
                                <MenuItem key={index} value={city}>{city}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl>
                        <InputLabel id="limit-label">Limit</InputLabel>
                        <Select
                            labelId="limit-label"
                            id="limit-select"
                            value={params.limit}
                            label="Limit"
                            onChange={handleParamChange('limit')}
                        >
                            {limits.map((limit, index) => (
                                <MenuItem key={index} value={limit}>{limit}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl>
                        <TextField
                            id="price-min"
                            label="Min Price"
                            value={params.price_min}
                            onChange={handleParamChange('price_min')}
                        />
                    </FormControl>

                    <FormControl>
                        <TextField
                            id="price-max"
                            label="Max Price"
                            value={params.price_max}
                            onChange={handleParamChange('price_max')}
                        />
                    </FormControl>

                    <FormControl>
                        <TextField
                            id="beds-min"
                            label="Min Beds"
                            value={params.beds_min}
                            onChange={handleParamChange('beds_min')}
                        />
                    </FormControl>

                    <FormControl>
                        <TextField
                            id="beds-max"
                            label="Max Beds"
                            value={params.beds_max}
                            onChange={handleParamChange('beds_max')}
                        />
                    </FormControl>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item  >
                    <FormControl>
                        <TextField
                            id="baths-min"
                            label="Min Baths"
                            value={params.baths_min}
                            onChange={handleParamChange('baths_min')}
                        />
                    </FormControl>

                    <FormControl>
                        <TextField
                            id="baths-max"
                            label="Max Baths"
                            value={params.baths_max}
                            onChange={handleParamChange('baths_max')}
                        />
                    </FormControl>

                    <FormControl style={{minWidth:150}} >
                        <InputLabel id="property-type-label">Property Type</InputLabel>
                        <Select
                            labelId="property-type-label"
                            id="property-type-select"
                            value={params.property_type}
                            multiple
                            label="Property Type"
                            onChange={handleMultiSelectChange('property_type')}
                        >
                            {propertyTypes.map((type, index) => (
                                <MenuItem key={index} value={type}>{type}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                                <FormControl style={{minWidth:150}} >
                                    <InputLabel id="lot-views-label">Lot Views</InputLabel>
                                    <Select
                                        labelId="lot-views-label"
                                        id="lot-views-select"
                                        value={params.lot_views}
                                        multiple
                                        label="Lot Views"
                                        onChange={handleMultiSelectChange('lot_views')}
                                    >
                                        {lotViewOptions.map((type, index) => (
                                            <MenuItem key={index} value={type}>{type}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                    </Grid>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={params.new_construction}
                                onChange={handleCheckboxChange('new_construction')}
                                name="new-construction"
                                color="primary"
                            />
                        }
                        label="New Construction"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={ params.hide_pending_contingent}
                                onChange={handleCheckboxChange('hide_pending_contingent')}
                                name="hide-pending-contingent"
                                color="primary"
                            />
                        }
                        label="Hide Pending Contingent"
                    />


                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={params.has_virtual_tours}
                                onChange={handleCheckboxChange('has_virtual_tours')}
                                name="has-virtual-tours"
                                color="primary"
                            />
                        }
                        label="Has Virtual Tours"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={params.has3d_tours}
                                onChange={handleCheckboxChange('has3d_tours')}
                                name="has-3d-tours"
                                color="primary"
                            />
                        }
                        label="Has 3D Tours"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={params.hide_foreclosure}
                                onChange={handleCheckboxChange('hide_foreclosure')}
                                name="hide-foreclosure"
                                color="primary"
                            />
                        }


                    label="Hide Foreclosure"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={params.price_reduction}
                                onChange={handleCheckboxChange('price_reduction')}
                                name="price-reduction"
                                color="primary"
                            />
                        }
                        label="Price Reduction"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={params.open_house}
                                onChange={handleCheckboxChange('open_house')}
                                name="open-house"
                                color="primary"
                            />
                        }
                        label="Open House"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={params.no_hoa_fee}
                                onChange={handleCheckboxChange('no_hoa_fee')}
                                name="no-hoa-fee"
                                color="primary"
                            />
                        }
                        label="No HOA Fee"
                    />
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item  >
                            <FormControl style={{minWidth:175}} >
                                <InputLabel id="days-on-realtor-label">Days on Realtor</InputLabel>
                                <Select
                                    labelId="days-on-realtor-label"
                                    id="days-on-realtor-select"
                                    value={params.days_on_realtor}
                                    label="Days on Realtor"
                                    onChange={handleParamChange('days_on_realtor')}
                                >
                                    {daysOnRealtorOptions.map((day, index) => (
                                        <MenuItem key={index} value={day}>{day}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item  >
                            <FormControl  style={{minWidth:175}}>
                                <InputLabel id="expand-search-radius-label">Expand Search Radius</InputLabel>
                                <Select
                                    labelId="expand-search-radius-label"
                                    id="expand-search-radius-select"
                                    value={params.expand_search_radius}
                                    label="Expand Search Radius "
                                    onChange={handleParamChange('expand_search_radius')}
                                >
                                    {expandSearchRadiusOptions.map((radius, index) => (
                                        <MenuItem key={index} value={radius}>{radius}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item  >
                            <FormControl  style={{minWidth:175}}>
                                <InputLabel id="home-size-max-label">Home Size Max</InputLabel>
                                <Select
                                    labelId="home-size-max-label"
                                    id="home-size-max-select"
                                    value={params.home_size_max}
                                    label="Home Size Max"
                                    onChange={handleParamChange('home_size_max')}
                                >
                                    {homeSizeMaxOptions.map((size, index) => (
                                        <MenuItem key={index} value={size}>{size}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item  >
                            <FormControl  style={{minWidth:175}}>
                                <InputLabel id="home-size-min-label">Home Size Min</InputLabel>
                                <Select
                                    labelId="home-size-min-label"
                                    id="home-size-min-select"
                                    value={params.home_size_min}
                                    label="Home Size Min"
                                    onChange={handleParamChange('home_size_min')}
                                >
                                    {homeSizeMinOptions.map((size, index) => (
                                        <MenuItem key={index} value={size}>{size}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item  >
                            <FormControl  style={{minWidth:175}}>
                                <InputLabel id="lot-size-min-label">Lot Size Min</InputLabel>
                                <Select
                                    labelId="lot-size-min-label"
                                    id="lot-size-min-select"
                                    value={params.lot_size_min}
                                    label="Lot Size Min"
                                    onChange={handleParamChange('lot_size_min')}
                                >
                                    {lotSizeOptions.map((size, index) => (
                                        <MenuItem key={index} value={size}>{size}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item  >
                            <FormControl  style={{minWidth:175}}>
                                <InputLabel id="lot-size-max-label">Lot Size Max</InputLabel>
                                <Select
                                    labelId="lot-size-max-label"
                                    id="lot-size-max-select"
                                    value={params.lot_size_max}
                                    label="Lot Size Max"
                                    onChange={handleParamChange('lot_size_max')}
                                >
                                    {lotSizeOptions.map((size, index) => (
                                        <MenuItem key={index} value={size}>{size}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl style={{minWidth:150}} >
                                <InputLabel id="community-ammenities-label">Community Ammenities</InputLabel>
                                <Select
                                    labelId="community-ammenities-label"
                                    id="community-ammenities-select"
                                    value={params.community_ammenities}
                                    multiple
                                    label="Lot Views"
                                    onChange={handleMultiSelectChange('community_ammenities')}
                                >
                                    {communityAmmenitiesOptions.map((type, index) => (
                                        <MenuItem key={index} value={type}>{type}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Typography variant="body" gutterBottom>
                                {"*Search Radius in miles"}
                            </Typography>

                        </Grid>
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" onClick={resetParams}>
                    Reset
                </Button>
            </Grid>
<Typography variant="h6" gutterBottom>
                {houses && houses.length > 0 ? `Results: ${houses.length} houses found` : "No Houses Found"}
            </Typography>

                <Slider {...settings}>
                {houses && houses.map((house, index) => (
                    <div key={index} className="card" onClick={()=> navigate('/house-details', { state: { detail: house } })}>
                        <div className="card-top">
                            <img src={house.primary_photo && house.primary_photo.href} alt="House" />
                            <h2>{parseInt(house.list_price) < 100000 ? "Only $" + house.list_price : "$" + house.list_price}</h2>

                            <h3>{house.location.address.line}, {house.location.address.city}, {house.location.address.state_code} {house.location.address.postal_code}</h3>
                            <p>{house.branding[0].name}</p>
                            <p>Baths: {house.description.baths}</p>
                            <p>Full Baths: {house.description.baths_full}</p>
                            <p>Beds: {house.description.beds}</p>
                            <p>Garage: {house.description.garage}</p>
                            <p>Lot Sqft: {house.description.lot_sqft}</p>
                            <p>Sqft: {house.description.sqft}</p>
                            <p>Stories: {house.description.stories}</p>
                            <p>Type: {house.description.type}</p>
                            <p>Year Built: {house.description.year_built}</p>
                            <p>Last Update Date: {house.last_update_date}</p>
                        </div>
                    </div>
                ))}
            </Slider>

        </Box>
    );
}

export default Service;
