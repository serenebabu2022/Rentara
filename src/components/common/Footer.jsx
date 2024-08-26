// ----------------------------------------------------------------------
/* Imports */
import React from "react";
import Link from '@mui/material/Link';
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
    footerTexts: {
        marginTop: "15px",
        "&:hover": {
            cursor: "pointer !important"
        }
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'inherit'
    },
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
        }} component="footer" role="footer">
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: "30%" }}>
                    <Link href="/" sx={styles.linkStyle}><Box component="img" role="img" src={logo} alt="Logo" sx={styles.logo}>
                    </Box></Link></Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: "50%" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '20px', justifyContent: "flex-start", color: "#ffffff" }}>

                        <Typography variant="body2" sx={styles.footerTexts}> <Link href="/about" sx={styles.linkStyle}>About</Link></Typography>

                        <Typography variant="body2" sx={styles.footerTexts}>Find an Item</Typography>
                        <Typography variant="body2" sx={styles.footerTexts}>Post an Item</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '20px', justifyContent: "flex-start", color: "#ffffff" }}>
                        <Link href="/contact" sx={styles.linkStyle}><Typography variant="body2" sx={styles.footerTexts}>Contact</Typography></Link>
                        <Typography variant="body2" sx={styles.footerTexts}>FAQ's</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: "15px" }}>
                            <InstagramIcon url="https://www.facebook.com/" role="img" />
                            <LinkedInIcon url="https://twitter.com/" role="img" />
                            <FacebookIcon url="https://www.instagram.com/" role="img" />
                            <XIcon url="https://www.linkedin.com/" role="img" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Typography variant="body2" sx={{ marginTop: "20px", color: "#ffffff" }}>© Rentara Limited 2024. We love our users!</Typography>

        </Box>
    )
}
export default Footer;