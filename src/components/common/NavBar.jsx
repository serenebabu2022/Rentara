// ----------------------------------------------------------------------
/* Imports */
import React from "react";
import { Box, Typography, Paper, InputBase, IconButton, FormControl, Select, MenuItem, Button, useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
/* Relative Imports */
import logo from "../../assets/images/logo.png"

// ----------------------------------------------------------------------
/* Styles */
const styles = {
    rootStyle: (theme) => ({
        display: "flex",
        flexDirection: "row",
        p: "12px 40px 8px 40px",
        justifyContent: "space-between",
        [theme.breakpoints.down("1200")]: {
            mt: theme.spacing(2),
            mb: theme.spacing(3),
        },
        [theme.breakpoints.down("sm")]: {
            mt: theme.spacing(5),
            mb: theme.spacing(2),
        },
        backgroundColor: theme.palette.background.navbar
    }),
    searchBar: (theme) => ({
        mr: "30px",
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.common.white,
        height: "35px",
        border: `1px solid ${theme.palette.primary.brandBlue}`,
        borderRadius: "7px"
    }),
    topRightBox: () => ({
        justifyContent: "flex-end",
        display: "flex",
        flexDirection: "row",
    }),
    logo: () => ({
        height: "32px",
        width: "120px"
    }),
    howItWorks: () => ({
        outlineWidth: 0,
        outline: 'none',
        m: "2px 30px 2px auto",
        borderStyle: 'none'
    }),
    navBarTexts: (theme) => ({
        color: theme.palette.primary.brandBlue,
        fontSize: "18px",
        fontWeight: 500,
        m: "4px 0px 5px 0px",
        "&:hover": {
            cursor: "pointer !important"
        }
    }),
    searchIconStyle: (theme) => ({
        padding: '10px',
        color: theme.palette.primary.brandBlue
    }),
    notificationIconStyle: (theme) => ({
        ml: theme.spacing(3.7),
    }),
    profilePic: (theme) => ({
        ml: theme.spacing(2.5),
    }),
}

// ----------------------------------------------------------------------
/* Navigation Bar Component */
// ----------------------------------------------------------------------
function NavBar() {
    const theme = useTheme();

    function postItem() {
        console.log("Post Item Clicked")
    }
    return (
        <Box sx={styles.rootStyle}>
            <Box
                sx={styles.logo}
                component="img"
                src={logo}
                alt="logo"
            >
            </Box>
            <FormControl variant="standard" sx={styles.howItWorks}>
                <Select defaultValue={1} disableUnderline={true} style={{
                    color: "#0D58A6",
                    fontSize: "18px",
                    fontWeight: 500
                }} sx={{
                    '& .MuiSelect-icon': {
                        color: theme.palette.primary.brandBlue,
                    }
                }} MenuProps={{
                    PaperProps: {
                        sx: {
                            color: theme.palette.primary.brandBlue,
                        },
                    },
                }}>
                    <MenuItem value={1}>How it Works</MenuItem>
                    <MenuItem value={2}>Guarantee</MenuItem>
                    <MenuItem value={3}>FAQ's</MenuItem>
                </Select>
            </FormControl>
            <Paper component="form" sx={styles.searchBar}>
                <InputBase placeholder="Search for.." inputProps={{ 'aria-label': 'search' }} sx={styles.navBarTexts} />
                <IconButton sx={styles.searchIconStyle} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Typography variant="subtitle1" sx={styles.navBarTexts} style={{ marginRight: "30px" }} onClick={postItem}>
                Post an Item
            </Typography>
            <Typography variant="subtitle1" sx={styles.navBarTexts} style={{ marginRight: "30px" }}>
                Contact
            </Typography>
            <Box sx={styles.topRightBox}>
                <Button variant="outlined">Log In</Button>
            </Box>
        </Box>
    );
}

export default NavBar;