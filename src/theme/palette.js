// SETUP COLORS
const PRIMARY = {
    light: "#DDEFE0",
    main: "#0D58A6",
    brandBlue: "#0D58A6",
    brandOrange: "FF9900"
};
const SECONDARY = {
    main: "#B3D8FF",
    light: "#B3D8FF"
}

const COMMON = {
    common: {
        black: "#000",
        white: "#fff",
        grey: "#58595B",
    },
    primary: { ...PRIMARY, contrastText: "#fff" },
    secondary: { ...SECONDARY }
};
const GREY = {
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#EDEDED",
    400: "#999999",
    500: "#858585",
    600: "#666666",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24"
}
const palette = {
    light: {
        ...COMMON,
        text: {
            primary: "#414042",
            secondary: GREY[600],
            disabled: GREY[500],
        },
        background: { paper: "#F5F5F5", default: COMMON.white, navbar: "#E8E8E8" },
        action: { active: GREY[600], ...COMMON.action },
    },
    dark: {
        ...COMMON,
        text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
        background: { paper: GREY[800], default: "#F5F5F5" },
        action: { active: GREY[500], ...COMMON.action },
    },
};
export default palette;