import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Grotesk'; /* The name you want to use for the 'Grotesk' font */
  src: url('/fonts/Grotesk-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'MDNichrome'; /* The name you want to use for the 'MDNichrome' font */
  src: url('/fonts/MDNichrome-Dark.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

    html{
        scroll-snap-type: y proximity;
        &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
}

    }

    :root {

    --nav-height: 5svh;

    --color-gray: #ded6d0;
    /* --text-font-size: clamp(24px, 1.5svw, 50px); */
    --title-font-size-horz: clamp(10svw, 4svw, 2svw);
    /* --title-font-size-vert: max(10svh, 20svh); */

    --scroll-bar-width: 12px;
    
    
    
    --color-yellow: #e5d26a;
    --color-brown: #a58b74;
    --color-brown2: #a58b74;
    --color-green: #6b7e5f;
    --color-pink: #e5a5b0;
    --color-red: #e65226;
    --color-salmon: #d57659;

    --title-font: 'MDNichrome', sans-serif;
    --title-font-weight: 500;

    /* --text-padding: 50px; */

    --sm-screen: 768px;

}


    
    body{
    font-family: 'Grotesk', sans-serif;
    background-color: #d7d7d7;
    width: 100%;

    
}
    input::-webkit-input-placeholder {
  font-family: inherit; 
  font-size: inherit;
}
    button {
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #e6d36b;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    width: 60%;
    /* padding: 12px; */
}
    h1 {
    font-weight: 700;
    font-size: 26px;
    color: white;
}



  
    a {
    color: white;
    text-decoration: none;
}
    
`;

export default GlobalStyle;
