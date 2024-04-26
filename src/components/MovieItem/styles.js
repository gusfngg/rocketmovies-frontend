import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   gap: 16px;
   
   background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_900};
   color: ${({ theme }) => theme.COLORS.GRAY_800};
   border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_800}` : "none"};
   
   border-radius: 10px;
   padding: 16px;
   
   > button {
      border: none;
      background: none;
      cursor: pointer;
   }

   .button-delete,
   .button-add {
      color: #FF859B;
   }
   
   > input {
      width: 98px;
      
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_800 : theme.COLORS.WHITE};
      background: transparent;
      border: none;

      cursor: ${({ isNew }) => isNew ? 'text' : 'pointer'};

      &::placeholder {
         color: ${({ theme }) => theme.COLORS.GRAY_800};
      }

      &:focus {
         outline: none;
      }
   }
`;