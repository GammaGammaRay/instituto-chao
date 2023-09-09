import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    /* html{
        scroll-snap-type: y proximity;

    } */

    :root {
    --nav-height: 50px;

    --color-yellow: #e5d26a;
    --color-brown: #a58b74;
    --color-green: #6b7e5f;
    --color-pink: #e5a5b0;
    --color-red: #e65226;
    --color-salmon: #d57659;

    --title-font: 'Poppins', sans-serif;
    --title-font-weight: 500;
    --title-font-size: 14vh;

}


    
    body{
    font-family: Arial, Helvetica, sans-serif;
    background-color: #d7d7d7;
    
}
    input::-webkit-input-placeholder {
  font-family: inherit; 
  font-size: inherit;
}
    button {
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #adc857;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    width: 100%;
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
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: white;
    text-decoration: none;
    padding-top: 30px;
}
    
`;

export default GlobalStyle;
