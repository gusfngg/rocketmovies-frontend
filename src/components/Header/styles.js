import styled from "styled-components";

export const Container = styled.header`
   grid-area: header;

   height: 116px;
   width: 100%;

   border-bottom: 2px solid ${({ theme}) => theme.COLORS.GRAY_700};

   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 64px;

   padding: 0px 124px;

   background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

   > h1 {
      font-weight: bold;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.PINK_900};
   }
`;

export const Profile = styled.div`
   display: flex;
   align-items: center;
   justify-self: end;
   gap: 9px;
   width: 198px;

   cursor: pointer;
 
   > img {
      width: 58px;
      height: 58px;
      border-radius: 50%;
   }

   > div {
      display: flex;
      flex-direction: column;
      margin-left: 16px;
      line-height: 24px;;
   }

   strong {
      font-weight: 500;
      font-size: 14px;
      color:  ${({ theme }) => theme.COLORS.WHITE};
      white-space: nowrap;
   }

   button {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_800};
      text-align: right;

      border: none;
      background: none;
   }
`;