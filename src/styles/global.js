import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   body,
   input,
   textarea,
   button {
      font-size: 16px;
      font-family: 'Roboto Slab', serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }

   body {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      color: ${({ theme }) => theme.COLORS.WHITE};
   }

   body, * {
    &::-webkit-scrollbar {
         height: 7px;
         width: 7px;
      }

      &::-webkit-scrollbar-track {
         border-radius: 3px;
         background-color: #433F4C;
      }

      &::-webkit-scrollbar-track:hover {
         background-color: #3E3B48;
      }

      &::-webkit-scrollbar-track:active {
         background-color: #464250;
      }

      &::-webkit-scrollbar-thumb {
         border-radius: 4px;
         background-color: #FF859B;
      }

      &::-webkit-scrollbar-thumb:hover {
         background-color: #FF859B;
      }

      &::-webkit-scrollbar-thumb:active {
         background-color: #FF859B;
      }
  }

   a {
      text-decoration: none;
   }

   button, a {
   cursor: pointer;
    transition: filter .2s;
   }

   button:hover, a:hover {
    filter: brightness(.8);
   }
`;