import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-rows: 116px auto;
   grid-template-areas:  
   "header"
   "content";

   > main {
      grid-area: content;
      overflow-y: auto;
      padding: 60px 0;
   }
`;

export const Content = styled.div`
   width: 100%;
   padding: 40px 124px 103px;
   margin: 0 auto;

   > header {
      margin-bottom: 24px;
   
      div {
         display: flex;
         align-items: center;
      }

      div:first-of-type {
         gap: 19px;
         margin-block: 24px;

         h1 {
            font-weight: 500;
            font-size: 36px;
         }

         svg {
            font-size: 25px;
         }

      }

      div:last-of-type {
         gap: 8px;

         img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
         }

         svg {
            color: ${({ theme }) => theme.COLORS.PINK_900};
         }
      }
   }

   p {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-top: 40px;
      text-align: justify;
      line-height: 25px;
   }
`;