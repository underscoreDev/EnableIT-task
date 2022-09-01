import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;

         @media (max-width: 1280px) {
            font-size: 60.5%;
        }
         @media (max-width: 1024px) {
            font-size: 57%;
        }
         @media (max-width: 768px) {
            font-size: 54%;
        }
         @media (max-width: 550px) {
            font-size: 51%;
        }
         @media (max-width: 425px) {
            font-size: 48%;
        }
    }

    body {
        font-family: 'Inter', sans-serif;
        // background: linear-gradient(180deg, #ffffff 0%, #f2f7fd 100%);
    }

    body::-webkit-scrollbar {
        width: 7px;
        background: #6061e5;
    }
    body::-webkit-scrollbar-track {
        background: linear-gradient(180deg, #ffffff 0%, #f2f7fd 100%);
    }
    body::-webkit-scrollbar-thumb {
        background: #6061e5;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;
