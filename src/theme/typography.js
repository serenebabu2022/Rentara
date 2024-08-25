import { pxToRem } from "../utility/formatFontSize";

/* Constants */
const MONTSERRAT = "Montserrat-Regular";
const MONTSERRAT_MEDIUM = "Montserrat-Medium";
const MONTSERRAT_SEMIBOLD = "Montserrat-SemiBold";
const MONTSERRAT_BOLD = "Montserrat-Bold";

const typography = {
    fontFamily: MONTSERRAT,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fonts: {
        Montserrat: MONTSERRAT,
        Montserrat_Medium: MONTSERRAT_MEDIUM,
        Montserrat_SemiBold: MONTSERRAT_SEMIBOLD,
        Montserrat_Bold: MONTSERRAT_BOLD,
    },
    h1: {
        fontFamily: MONTSERRAT_BOLD,
        lineHeight: 1,
        fontSize: pxToRem(35)
    },
    h2: {
        fontFamily: MONTSERRAT,
        fontWeight: 700,
        lineHeight: 1,
        fontSize: pxToRem(30),
        // ...responsiveFontSizes({ sm: 22, md: 30, lg: 36 }),
    },
    h3: {
        fontFamily: MONTSERRAT_BOLD,
        lineHeight: 1,
        fontSize: pxToRem(24),
        // ...responsiveFontSizes({ sm: 18, md: 22, lg: 24 }),
    },
    h4: {
        fontFamily: MONTSERRAT_SEMIBOLD,
        lineHeight: 1,
        fontSize: pxToRem(22),
        // ...responsiveFontSizes({ sm: 18, md: 20, lg: 22 }),
    },
    h5: {
        fontFamily: MONTSERRAT,
        lineHeight: 1,
        fontSize: pxToRem(20),
        // ...responsiveFontSizes({ sm: 16, md: 18, lg: 20 }),
    },
    h6: {
        fontFamily: MONTSERRAT,
        lineHeight: 1.5,
        fontSize: pxToRem(17),
        // ...responsiveFontSizes({ sm: 18, md: 18, lg: 17 }),
    },
    subtitle1: {
        fontFamily: MONTSERRAT,
        lineHeight: 1.5,
        fontSize: pxToRem(14),
        // ...responsiveFontSizes({ sm: 14, md: 14, lg: 14 }),
    },
    body2: {
        fontFamily: MONTSERRAT,
        // lineHeight: 1.5,
        fontSize: pxToRem(18),
        // ...responsiveFontSizes({ sm: 14, md: 14, lg: 14 }),
    },
    //   subtitle2: {
    //     fontFamily: MONTSERRAT,
    //     lineHeight: 22 / 14,
    //     fontSize: pxToRem(14),
    //   },

};
export default typography;