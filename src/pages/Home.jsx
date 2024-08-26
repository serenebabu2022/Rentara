// ----------------------------------------------------------------------
/* Imports */
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Box, Button, Divider, TextField, Typography, Tooltip, Link } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

/* Relative Imports */
import camera from "../assets/images/camera.png";
import cloth from "../assets/images/cloth.png";
import furniture from "../assets/images/furniture.png"
import game from "../assets/images/game.png";
import gardenEquip from "../assets/images/gardenEquip.png";
import kids from "../assets/images/kids.png";
import music from "../assets/images/music.png";
import tech from "../assets/images/tech.png"
import tools from "../assets/images/tools.png"
import veh from "../assets/images/veh.png";
import sportEquip from "../assets/images/sport.png";
import event from "../assets/images/event.png";
import banner1 from "../assets/images/Banner1.png";
import banner2 from "../assets/images/Banner2.png";
import rentImage from "../assets/images/rent.png";

// ----------------------------------------------------------------------
/* Styles */
const styles = {
    rootStyle: {
        m: "20px 40px",
    },
    boxStyle: {
        m: "20px",
        display: 'flex',
        flexDirection: "column",
        alignItems: "center"
    },
    bannerImg: {
        width: "100%"
    },
    headerStyle: (theme) => ({
        color: theme.palette.primary.brandBlue,
        textAlign: "center",
        mt: "42px"
    }),
    searchStyle: {
        display: "flex",
        flexDirection: "row",
        mt: "20px",
        width: "60%",
        height: "45px"
    },
    searchButton: (theme) => ({
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.brandBlue,
        color: theme.palette.common.white,
        fontSize: "18px",
        width: "20%",
        borderRadius: "10px",
        textTransform: 'capitalize'
    }),
    bodyTextStyle: () => ({
        mt: "15px"
    }),
    inputStyle: (theme) => ({
        flexGrow: 1,
        color: theme.palette.primary.brandBlue,
        borderColor: theme.palette.primary.brandBlue,
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.primary.brandBlue,
                borderRadius: "10px"
            },
        },
    }),
    rentItemButtonStyle: (theme) => ({
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.brandBlue,
        textTransform: 'capitalize',
        fontSize: "20px",
        mt: "15px",
        "&:hover": {
            color: theme.palette.common.white
        }
    }),
    rentalItemsBox: (theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        m: "20px",
        width: "80%",
    }),
    rentalItemTexts: (theme) => ({
        m: "17px 0px",
        color: theme.palette.primary.brandBlue
    }),
    dividerBox: {
        display: "flex",
        justifyContent: "center",
    },
    dividerStyle: {
        backgroundColor: "#707070",
        width: "60%",
        borderBottomWidth: 1.5
    },
    testimonialText: {
        width: "60%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    indicatorStyle: {
        backgroundColor: "#000000",
        "& .carousel slide .carousel-indicators .button": {
            width: "15px",
            height: "15px",
            padding: 0,
            borderRadius: "50%",
            backgroundColor: "#000000",
        },
        "&:carousel-indicators .button .active": {
            backgroundColor: "#ffffff",
        },
    },
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "10px"
    },
    gridItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "27px"
    },
    ".gridItem img": {
        width: "100%",
        height: "150px",
        objectFit: "cover"
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'inherit'
    }

}

// ----------------------------------------------------------------------
/* Home Page */
// ----------------------------------------------------------------------
function Home() {
    const [index, setIndex] = useState(0);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const handleSelectTestimonial = (selectedIndex) => {
        setTestimonialIndex(selectedIndex);
    };
    return (
        <Box sx={styles.rootStyle} component="main" role="main" id="main" tabIndex="-1">
            <Box role="banner">
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null} sx={styles.indicatorStyle}>
                    <Carousel.Item id="1" >
                        <Box component="img" role="img" src={banner1} sx={styles.bannerImg} alt="Advertisement banner1"></Box>
                    </Carousel.Item>
                    <Carousel.Item id="2">
                        <Box component="img" role="img" src={banner2} sx={styles.bannerImg} alt="Advertisement banner2"></Box>
                    </Carousel.Item>
                    <Carousel.Item id="3">
                        <Box component="img" role="img" src={banner1} sx={styles.bannerImg} alt="Advertisement banner3"></Box>
                    </Carousel.Item>
                </Carousel>
            </Box>
            <Box sx={styles.boxStyle}>
                <Typography variant="h1" role="heading" aria-level="1" sx={styles.headerStyle}>Rent Anything</Typography>
                <Box sx={styles.searchStyle} component="form" role="search">
                    <TextField placeholder="I want to rent.." role="searchbox" id="mainSearchBox" inputProps={{ 'aria-label': 'search', style: { height: "13px" } }} sx={styles.inputStyle} name="search" type="search"></TextField>
                    <Tooltip title="Search"><Button variant="contained" sx={styles.searchButton} id="searchButton">Search</Button></Tooltip>
                </Box>
                <Typography variant="h6" sx={styles.bodyTextStyle}>Or</Typography>
                <Tooltip title="Rent your item"><Button variant="contained" sx={styles.rentItemButtonStyle}>Rent your Item</Button></Tooltip>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Box sx={styles.rentalItemsBox} role="group">
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", }}>
                            <Link href="/" sx={styles.linkStyle}><Typography sx={styles.rentalItemTexts} variant="h6">Scooter?</Typography></Link>
                            <Link href="/" sx={styles.linkStyle}><Typography sx={styles.rentalItemTexts} variant="h6">Camera?</Typography></Link>
                            <Link href="/" sx={styles.linkStyle}><Typography sx={styles.rentalItemTexts} variant="h6">Equipment?</Typography></Link>
                            <Link href="/" sx={styles.linkStyle}><Typography sx={styles.rentalItemTexts} variant="h6">Event Decoration?</Typography></Link>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
                            <Box component="img" role="img" src={rentImage} alt="rent image"></Box>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", }}>
                            <Link href="/" sx={styles.linkStyle}><Typography sx={styles.rentalItemTexts} variant="h6">Bike?</Typography></Link>
                            <Link href="/" sx={styles.linkStyle}><Typography sx={styles.rentalItemTexts} variant="h6">Heater?</Typography></Link>
                            <Link href="/" sx={styles.linkStyle}><Typography sx={styles.rentalItemTexts} variant="h6">Game consoles?</Typography></Link>
                            <Link href="/" sx={styles.linkStyle}><Typography sx={styles.rentalItemTexts} variant="h6">Sport Equipments?</Typography></Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.dividerBox}>
                <Divider sx={styles.dividerStyle} />
            </Box>
            <Box component="testimonial" role="testimonial">
                <Carousel activeIndex={testimonialIndex} onSelect={handleSelectTestimonial} interval={null} >
                    <Carousel.Item id="slide4" sx={styles.indicatorStyle}>
                        <Box sx={styles.dividerBox} style={{ marginTop: "30px" }}>
                            <Box sx={styles.testimonialText}>
                                <Typography sx={{ textAlign: "center" }} variant="h6">With Rentara, I can easily rent what I need, when I need it, and focus on what truly matters - my education. Thank you, Rentara, for making my student life so much easier!</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", marginRight: "20%" }}>
                            <Typography variant="subtitle1">-Mahendra Singh</Typography></Box>
                        <Box></Box>
                        <Box sx={{ display: 'flex', justifyContent: "flex-end", marginRight: "20%" }} role="img">
                            <StarIcon sx={{ color: 'gold' }} />
                            <StarIcon sx={{ color: 'gold' }} />
                            <StarIcon sx={{ color: 'gold' }} />
                            <StarIcon sx={{ color: 'gold' }} />
                            <StarIcon sx={{ color: 'gold' }} />
                        </Box>
                    </Carousel.Item>
                    <Carousel.Item id="5">
                        <Box sx={styles.dividerBox} style={{ marginTop: "30px" }}>
                            <Box sx={styles.testimonialText}>
                                <Typography sx={{ textAlign: "center" }} variant="h6">With Rentara, I can easily rent what I need, when I need it, and focus on what truly matters - my education. Thank you, Rentara, for making my student life so much easier!</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", marginRight: "20%" }}>
                            <Typography variant="subtitle1">-Mahendra Singh</Typography></Box>
                        <Box></Box>
                        <Box sx={{ display: 'flex', justifyContent: "flex-end", marginRight: "20%" }} role="img">
                            <StarIcon sx={{ color: 'gold' }} />
                            <StarIcon sx={{ color: 'gold' }} />
                            <StarIcon sx={{ color: 'gold' }} />
                            <StarIcon sx={{ color: 'gold' }} />
                            <StarIcon sx={{ color: 'gold' }} />
                        </Box>
                    </Carousel.Item>
                    <Carousel.Item id="6">
                        <Box sx={styles.dividerBox} style={{ marginTop: "30px" }}>
                            <Box sx={styles.testimonialText}>
                                <Typography sx={{ textAlign: "center" }} variant="h6">With Rentara, I can easily rent what I need, when I need it, and focus on what truly matters - my education. Thank you, Rentara, for making my student life so much easier!</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", marginRight: "20%" }}>
                            <Typography variant="subtitle1">-Mahendra Singh</Typography></Box>
                        <Box></Box>
                        <Box sx={{ display: 'flex', justifyContent: "flex-end", marginRight: "20%" }} role="img">
                            <StarIcon sx={{ color: 'gold' }} />
                            <StarIcon sx={{ color: 'gold' }} />
                            <StarIcon sx={{ color: 'gold' }} />
                            <StarIcon sx={{ color: 'gold' }} />
                            <StarIcon sx={{ color: 'gold' }} />
                        </Box>
                    </Carousel.Item>
                </Carousel></Box>
            <Box sx={styles.dividerBox}>
                <Divider sx={styles.dividerStyle} />
            </Box>
            <Box component="categories" role="categories">
                <Box sx={styles.dividerBox}><Box sx={{ width: "60%", marginTop: "20px" }}><Typography variant="h4" role="heading" aria-level="2">Categories</Typography></Box></Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ width: "60%", marginTop: "15px" }}>
                        <Box sx={styles.gridContainer}>
                            <Link href="/" sx={styles.linkStyle}><Box sx={styles.gridItem} style={{ marginTop: "0px" }}>
                                <Box component="img" src={veh} alt="Vehicles & Accessories" role="img"></Box>
                                <Typography variant="body2">Vehicles & Accessories</Typography>
                            </Box></Link>
                            <Link href="/" sx={styles.linkStyle}><Box sx={styles.gridItem} style={{ marginTop: "0px" }}>
                                <Box component="img" src={tools} alt="Tools" role="img"></Box>
                                <Typography variant="body2">Tools</Typography>
                            </Box></Link>
                            <Link href="/" sx={styles.linkStyle}><Box sx={styles.gridItem} style={{ marginTop: "0px" }}>
                                <Box component="img" src={camera} alt="Camera & Accessories" role="img"></Box>
                                <Typography variant="body2">Camera & Accessories</Typography>
                            </Box></Link>
                            <Link href="/" sx={styles.linkStyle}><Box sx={styles.gridItem} style={{ marginTop: "0px" }}>
                                <Box component="img" src={game} alt="Game Consoles" role="img" ></Box>
                                <Typography variant="body2">Game Consoles</Typography>
                            </Box></Link>
                            <Link href="/" sx={styles.linkStyle}><Box sx={styles.gridItem}>
                                <Box component="img" src={sportEquip} alt="Sports & Acitivites" role="img" ></Box>
                                <Typography variant="body2">Sports & Acitivites</Typography>
                            </Box></Link>
                            <Link href="/" sx={styles.linkStyle}><Box sx={styles.gridItem}>
                                <Box component="img" src={event} alt="For events" role="img"></Box>
                                <Typography variant="body2">For events</Typography>
                            </Box></Link>
                            <Link href="/" sx={styles.linkStyle}><Box sx={styles.gridItem}>
                                <Box component="img" src={tech} alt="Technology" role="img"></Box>
                                <Typography variant="body2">Technology</Typography>
                            </Box></Link>
                            <Link href="/" sx={styles.linkStyle}><Box sx={styles.gridItem}>
                                <Box component="img" src={music} alt="Music Instruments" role="img"></Box>
                                <Typography variant="body2">Music Instruments</Typography>
                            </Box></Link>
                            <Link href="/" sx={styles.linkStyle}><Box sx={styles.gridItem}>
                                <Box component="img" src={furniture} alt="Furniture" role="img"></Box>
                                <Typography variant="body2">Furniture</Typography>
                            </Box></Link>
                            <Link href="/" sx={styles.linkStyle}><Box sx={styles.gridItem}>
                                <Box component="img" src={gardenEquip} alt="Garden Equipments" role="img"></Box>
                                <Typography variant="body2">Garden Equipments</Typography>
                            </Box></Link>
                            <Link href="/" sx={styles.linkStyle}><Box sx={styles.gridItem}>
                                <Box component="img" src={cloth} alt="Clothing" role="img"></Box>
                                <Typography variant="body2">Clothing</Typography>
                            </Box></Link>
                            <Link href="/" sx={styles.linkStyle}><Box sx={styles.gridItem}>
                                <Box component="img" src={kids} alt="For children" role="img"></Box>
                                <Typography variant="body2">For children</Typography>
                            </Box></Link>
                        </Box></Box></Box></Box>
        </Box>
    );
}

export default Home;