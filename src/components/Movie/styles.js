import styled from "styled-components";

export const Container = styled.div`
   width: calc(100% - 16px);
   height: 223px;

   background-color: ${({ theme}) => theme.COLORS.PINK_800};
   border-radius: 10px;

   padding: 32px;
   margin-bottom: 24px;
   text-align: left;

   cursor: pointer;

   > h1 {
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 8px;
      line-height: 32px;
   }

   > p {
      font-size: 16px;
      line-height: 19px;
      color: ${({ theme }) => theme.COLORS.GRAY_600};

      word-wrap: normal;
      overflow: hidden;
      text-overflow: ellipsis;

      height: 40px;
      margin-block: 15px;
   }

   > footer:last-child {
    align-self: end;

    span {
      background-color: ${({ theme}) => theme.COLORS.TEXT_BUTTON};
    }
  }
`;