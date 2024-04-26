import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   overflow: hidden;

   display: grid;
   grid-template-areas: 
   "header"
   "content";

   grid-template-rows: 116px auto;

   > main {
      grid-area: content;
      width: 100%;
      padding: 51px 123px 106px;
      margin: 54px auto;

      header {
         display: flex;
         align-items: center;
         justify-content: space-between;
         margin-bottom: 38px;
         margin-right: 16px;
      }

      h1 {
         font-weight: 400;
      }

      button {
         width: 207px;
         height: 48px;
      }
   }
`; 

export const Content = styled.div`
   overflow-y: auto; 
   max-height: calc(100vh - 280px);
`;
