import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   background-color: ${({ theme }) => theme.COLORS.GRAY_900};
   color: ${({ theme }) => theme.COLORS.GRAY_800};

   border-radius: 10px;
   margin-bottom: 8px;

   > input {
      height: 56px;
      width: 100%;

      padding: 18px 24px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      border: none;
      background: none;

      &::placeholder {
         color: ${({ theme }) => theme.COLORS.GRAY_800};
      }

      &:focus {
         outline: none;

      }
   }

   > svg {
       margin-left: 18px;
       color: ${({ theme }) => theme.COLORS.GREAY_300};
   }
`;