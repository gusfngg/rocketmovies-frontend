import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: grid;
   grid-template-areas: 
   "header"
   "content";

   > main {
      width: 100%;
      padding: 40px 123px 85px;
      grid-area: content;
      overflow-y: auto;
   }
`;

export const Form = styled.form`
   > header {
      button {
         margin-bottom: 24px;
         font-size: 16px;
      }

      h1 {
         font-size: 36px;
         font-weight: 500;
         margin-bottom: 40px;
      }
   }

   > div {
      display: flex;
      align-items: center;
      gap: 40px;
      margin-bottom: 40px;
   }

   > textarea {
      height: 274px;
      margin-bottom: 40px;
   }


   > h2 {
      font-size: 20px;
      font-weight: 400;
      color: ${({ theme}) => theme.COLORS.GRAY_600};
      margin-bottom: 24px;
   }

   > .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      padding: 16px;
      border-radius: 8px;

      margin-bottom: 40px;
   }

   > .buttons {
      display: flex;
      align-items: center;

      button {
         height: 58px;
      }

      button:first-child {
         background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
         color: ${({ theme }) => theme.COLORS.PINK_900};
         font-weight: 300;
      }
   }
`;