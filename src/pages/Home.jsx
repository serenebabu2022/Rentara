// ----------------------------------------------------------------------
/* Imports */
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
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
        height: "45px",
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
        color: theme.palette.primary.brandBlue,
        "&:hover": {
            cursor: "pointer !important"
        }
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
        mt: "27px",
        "&:hover": {
            cursor: "pointer !important"
        }
    },
    ".gridItem img": {
        width: "100%",
        height: "150px",
        objectFit: "cover"
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
        <Box sx={styles.rootStyle}>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null} sx={styles.indicatorStyle}>
                <Carousel.Item id="1" >
                    <Box component="img" src={banner1} sx={styles.bannerImg} alt="Advertisement banner1"></Box>
                </Carousel.Item>
                <Carousel.Item id="2">
                    <Box component="img" src={banner2} sx={styles.bannerImg} alt="Advertisement banner2"></Box>
                </Carousel.Item>
                <Carousel.Item id="3">
                    <Box component="img" src={banner1} sx={styles.bannerImg} alt="Advertisement banner3"></Box>
                </Carousel.Item>
            </Carousel>
            <Box sx={styles.boxStyle}>
                <Typography variant="h1" sx={styles.headerStyle}>Rent Anything</Typography>
                <Box sx={styles.searchStyle}>
                    <TextField placeholder="I want to rent.." inputProps={{ 'aria-label': 'search', disableUnderline: true, style: { height: "13px" } }} sx={styles.inputStyle} ></TextField>
                    <Button variant="contained" sx={styles.searchButton}>Search</Button>
                </Box>
                <Typography variant="h6" sx={styles.bodyTextStyle}>Or</Typography>
                <Button variant="contained" sx={styles.rentItemButtonStyle}>Rent your Item</Button>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Box sx={styles.rentalItemsBox}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", }}>
                            <Typography sx={styles.rentalItemTexts} variant="h6">Scooter?</Typography>
                            <Typography sx={styles.rentalItemTexts} variant="h6">Camera?</Typography>
                            <Typography sx={styles.rentalItemTexts} variant="h6">Equipment?</Typography>
                            <Typography sx={styles.rentalItemTexts} variant="h6">Event Decoration?</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
                            <Box component="img" src={rentImage} alt="rent image"></Box>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", }}>
                            <Typography sx={styles.rentalItemTexts} variant="h6">Bike?</Typography>
                            <Typography sx={styles.rentalItemTexts} variant="h6">Heater?</Typography>
                            <Typography sx={styles.rentalItemTexts} variant="h6">Game consoles?</Typography>
                            <Typography sx={styles.rentalItemTexts} variant="h6">Sport Equipments?</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.dividerBox}>
                <Divider sx={styles.dividerStyle} />
            </Box>

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
                    <Box sx={{ display: 'flex', justifyContent: "flex-end", marginRight: "20%" }}>
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
                    <Box sx={{ display: 'flex', justifyContent: "flex-end", marginRight: "20%" }}>
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
                    <Box sx={{ display: 'flex', justifyContent: "flex-end", marginRight: "20%" }}>
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'gold' }} />
                    </Box>
                </Carousel.Item>
            </Carousel>
            <Box sx={styles.dividerBox}>
                <Divider sx={styles.dividerStyle} />
            </Box>
            <Box sx={styles.dividerBox}><Box sx={{ width: "60%", marginTop: "20px" }}><Typography variant="h4">Categories</Typography></Box></Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ width: "60%", marginTop: "15px" }}>
                    <Box sx={styles.gridContainer}>
                        <Box sx={styles.gridItem} style={{ marginTop: "0px" }}>
                            <Box component="img" src={veh} alt="Vehicles & Accessories" ></Box>
                            <Typography variant="body2">Vehicles & Accessories</Typography>
                        </Box>
                        <Box sx={styles.gridItem} style={{ marginTop: "0px" }}>
                            <Box component="img" src={tools} alt="Tools" ></Box>
                            <Typography variant="body2">Tools</Typography>
                        </Box>
                        <Box sx={styles.gridItem} style={{ marginTop: "0px" }}>
                            <Box component="img" src={camera} alt="Camera & Accessories" ></Box>
                            <Typography variant="body2">Camera & Accessories</Typography>
                        </Box>
                        <Box sx={styles.gridItem} style={{ marginTop: "0px" }}>
                            <Box component="img" src={game} alt="Game Consoles" ></Box>
                            <Typography variant="body2">Game Consoles</Typography>
                        </Box>
                        <Box sx={styles.gridItem}>
                            <Box component="img" src={sportEquip} alt="Sports & Acitivites" ></Box>
                            <Typography variant="body2">Sports & Acitivites</Typography>
                        </Box>
                        <Box sx={styles.gridItem}>
                            <Box component="img" src={event} alt="For events" ></Box>
                            <Typography variant="body2">For events</Typography>
                        </Box>
                        <Box sx={styles.gridItem}>
                            <Box component="img" src={tech} alt="Technology" ></Box>
                            <Typography variant="body2">Technology</Typography>
                        </Box>
                        <Box sx={styles.gridItem}>
                            <Box component="img" src={music} alt="Music Instruments" ></Box>
                            <Typography variant="body2">Music Instruments</Typography>
                        </Box>
                        <Box sx={styles.gridItem}>
                            <Box component="img" src={furniture} alt="Furniture" ></Box>
                            <Typography variant="body2">Furniture</Typography>
                        </Box>
                        <Box sx={styles.gridItem}>
                            <Box component="img" src={gardenEquip} alt="Garden Equipments" ></Box>
                            <Typography variant="body2">Garden Equipments</Typography>
                        </Box>
                        <Box sx={styles.gridItem}>
                            <Box component="img" src={cloth} alt="Clothing" ></Box>
                            <Typography variant="body2">Clothing</Typography>
                        </Box>
                        <Box sx={styles.gridItem}>
                            <Box component="img" src={kids} alt="For children" ></Box>
                            <Typography variant="body2">For children</Typography>
                        </Box>
                    </Box></Box></Box>
        </Box>
    );
}

export default Home;