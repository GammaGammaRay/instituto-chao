import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* @font-face {
  font-family: 'Grotesk'; 
  src: url('/fonts/Grotesk-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
} */

@font-face {
  font-family: 'MDNichrome'; 
  src: url('/fonts/MDNichrome-Dark.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

    html{
        scroll-snap-type: y mandatory;
        
        &::-webkit-scrollbar {
            width: 0;
            height: 0;
            background: transparent;
}

    }

    :root {

    --nav-height: 5dvh;

    --color-gray: #ded6d0;
    /* --text-font-size: clamp(24px, 1.5dvw, 50px); */
    --title-font-size-horz: clamp(10dvw, 4dvw, 2dvw);
    /* --title-font-size-vert: max(10dvh, 20dvh); */

    --scroll-bar-width: 6px;
    --scroll-bar-width-large: 8px;
    
    
    
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
  

    /* font-family: 'Grotesk', sans-serif; */
    font-family: "Hanken Grotesk", sans-serif;
    font-weight: 400;
    /* font-family: "Nunito", sans-serif;
    font-weight: 400;
    background-color: #d7d7d7; */
    width: 100%;

    
}




  
    a {
    color: white;
    text-decoration: none;
}
    
`;

export default GlobalStyle;
