import styled from "styled-components";

export const Container = styled.span`
   font-family: 'Roboto', sans-serif;
   font-size: 14px;
   padding: 8px 16px;
   border-radius: 8px;
   background-color: ${({ theme}) => theme.COLORS.PINK_800};
   color: ${({ theme }) => theme.COLORS.WHITE};
   margin-right: 9px;
`;