import styled from "styled-components";

export const Container = styled.button`
   display: flex;
   align-items: center;
   gap: 8px;

   background: none;
   color: ${({ theme }) => theme.COLORS.PINK_900};

   border: none;
   font-size: 16px;
`;