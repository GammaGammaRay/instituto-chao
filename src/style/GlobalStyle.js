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

    --nav-height: 50px;
    --section-height: 100vh;
    --nav-height: 0px;

    --color-gray: #ded6d0;
    --title-font-size-horz: clamp(10vw, 4vw, 20px);
    --title-font-size-vert: clamp(4em, 20vh, 70vh);
    
    
    
    --color-yellow: #e5d26a;
    --color-brown: #a58b74;
    --color-brown2: #a58b74;
    --color-green: #6b7e5f;
    --color-pink: #e5a5b0;
    --color-red: #e65226;
    --color-salmon: #d57659;

    --title-font: 'MDNichrome', sans-serif;
    --title-font-weight: 500;

    --text-padding: 50px;

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
    padding: 12px;
}
    h1 {
    font-weight: 700;
    font-size: 26px;
    color: white;
}
    input {
    font-size: 20px;
    width: calc(100% - 30px);
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    padding: 15px;
    margin: 1px;
    :focus {
        border: 2px solid #ffb6b6;
        margin: 0px;
    }
}

    input::placeholder {
    font-weight: 100;
    font-style: italic;
    color: #cfcfcfff;
}
    form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    border-radius: 5px;
}
    a {
    /* line-height: 18px; */
    color: white;
    text-decoration: none;
}
    
`;

export default GlobalStyle;
