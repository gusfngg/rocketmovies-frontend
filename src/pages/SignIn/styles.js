import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
   height: 100vh;
   display: flex;
   align-items: stretch;
`;

export const Form = styled.form`
   padding: 0 158px 0 136px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: start;

   text-align: left;

   > h1 {
      font-size: 48px;
      font-weight: 700;
      color: ${({ theme}) => theme.COLORS.PINK_900};
      line-height: 63px;
   }
   
   > p {
      font-size: 15px;
      font-weight: 400;
      color: #CAC4CF;
   }

   > h3 {
      font-size: 24px;
      font-weight: 400;
      margin-block: 48px;
   }

   button {
      margin-top: 20px;
      height: 58px;
   }
`;

export const Background = styled.div`
   flex: 1;
   background: url(${backgroundImg}) no-repeat center center;
   background-size: cover;
`;