function FlexContainer(props) {
    const styleFlex = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        gap: "50px",
    };

    return <div style={styleFlex}>{props.children}</div>;
}

export default FlexContainer;