import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    color: {
        primary: "#D32F2F",
        secondary: "#03A9F4",
        error: "#03A9F4"
    },
    typoraphy: {
        fontFamily: "Roboto"
    },
    shape: {
        borderRadius: 4,
        backgroundColor: "#03A9F4",
        textColor: "#FFECB3",
        border: "#CCCCCC"
    }
})

export default theme;