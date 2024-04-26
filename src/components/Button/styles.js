import styled from "styled-components";

export const Container = styled.button`
   width: 100%;
   height: 48px;

   background-color: ${({ theme }) => theme.COLORS.PINK_900};
   color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

   padding: 13.5px 32px;
   font-weight: 500;
   font-size: 16px;

   border: none;
   border-radius: 8px;
   
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 8px;
`;