const styles = () => ({
    col: {
        display: "flex",
        justifyContent: "center"
    },
    img: {
        marginTop: "30px",
        width: "340px",
        height: "100px",
        objectFit: "contain"
    },
    root: {
        color: "black",
        width: "340px",
        height: "300px",
        marginTop: "10px",
        marginBottom: "10px",
        transition: "transform 0.3s",
        border: "groove",
        '&:hover': {
            transform: "scale(1.1)"
        }
    },
    name: {
        float: "left"
    }
});

export default styles;