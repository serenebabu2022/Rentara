// ----------------------------------------------------------------------
/* Imports */
import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
/* Relative Imports */
import logo from "../../assets/images/FooterLogo.png"

// ----------------------------------------------------------------------
/* Styles */
const styles = {
    logo: () => ({
        height: "32px",
        width: "120px"
    }),
}

// ----------------------------------------------------------------------
/* Footer Component */
// ----------------------------------------------------------------------
function Footer() {

    return (
        <Box sx={{
            backgroundColor: '#0D58A6',
            padding: '20px',
            textAlign: 'center'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: "30%" }}>
                    <Box component="img" src={logo} alt="Logo" sx={styles.logo}>
                    </Box></Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: "50%" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '20px', justifyContent: "flex-start", color: "#ffffff" }}>
                        <Typography variant="body2" sx={{ marginTop: "15px" }}>About</Typography>
                        <Typography variant="body2" sx={{ marginTop: "15px" }}>Find an Item</Typography>
                        <Typography variant="body2" sx={{ marginTop: "15px" }}>Post an Item</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '20px', justifyContent: "flex-start", color: "#ffffff" }}>
                        <Typography variant="body2" sx={{ marginTop: "15px" }}>Contact</Typography>
                        <Typography variant="body2" sx={{ marginTop: "15px" }}>FAQ's</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: "15px" }}>
                            <InstagramIcon url="https://www.facebook.com/" />
                            <LinkedInIcon url="https://twitter.com/" />
                            <FacebookIcon url="https://www.instagram.com/" />
                            <XIcon url="https://www.linkedin.com/" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Typography variant="body2" sx={{ marginTop: "20px", color: "#ffffff" }}>© Rentara Limited 2024. We love our users!</Typography>

        </Box>
    )
}
export default Footer;