import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;
const Box = styled.div.attrs({ onMouseOver: Father })`
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;
`;

const Circle = styled(Box)`
    border-radius: 50px;
`;

function App() {
    return (
        <Father>
            <Box bgColor="teal"></Box>
            <Box as="a" href="/">
                Hello
            </Box>
            <Circle bgColor="whitesmoke"></Circle>
        </Father>
    );
}

export default App;
