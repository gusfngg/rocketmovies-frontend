import styled from "styled-components";

export const Container = styled.textarea`
   width: 100%;
   height: 274px;

   background-color: ${({ theme}) => theme.COLORS.GRAY_900};
   color: ${({ theme }) => theme.COLORS.WHITE};

   border: none;
   resize: none;

   margin-bottom: 8px;
   border-radius: 16px;
   padding: 16px;

   &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }

  &:focus {
    outline: none;
  }
`;