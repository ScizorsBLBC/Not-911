// style links like I did on persoanl page without an underline
import styled, { createGlobalStyle } from "styled-components";

const backgroundBlack = "#010101";

const GlobalStyled = createGlobalStyle`
    body {
        background: ${backgroundBlack};
    }
`;

export default GlobalStyled;