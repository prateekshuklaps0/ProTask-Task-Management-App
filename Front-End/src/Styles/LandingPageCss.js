import { css } from "@emotion/react";

export const OuterBox = css`
  -webkit-font-smoothing: antialiased;
  width: 100%;
`;

// Top Part Css ******************************
export const OuterTopPart = css`
  text-align: center;
  overflow: hidden;
  padding-bottom: 15px;

  @media (max-width: 992px) {
    padding-bottom: 45px;
  }
  @media (max-width: 768px) {
    overflow: visible;
    margin-top: -55px;
    padding-top: 55px;
    padding-bottom: 40px;
  }
  @media (max-width: 480px) {
    padding-top: 45px;
    padding-bottom: 30px;
  }
`;
export const TopText = css`
  margin: auto;
  text-align: center;
  max-width: 600px;
  font-size: 50px;
  line-height: 65px;
  font-weight: 100;
  margin-top: 55px;

  @media (max-width: 768px) {
    max-width: auto;
    margin: auto;
    width: 85%;
    font-size: 38px;
    line-height: 55px;
    margin-top: 30px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 40px;
  }
`;
export const SubTopText = css`
  margin: auto;
  text-align: center;
  max-width: 535px;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 1px;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin: auto;
    max-width: auto;
    width: 85%;
    font-size: 16.5px;
    line-height: 28px;
    letter-spacing: 1px;
    margin-top: 15px;
  }
  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin-top: 10px;
  }
`;
export const TopGetStartedBtn = css`
  text-align: center;
  margin: auto;
  color: white;
  padding: 28px 20px;
  border-radius: 4px;
  font-size: 18px;
  letter-spacing: 0.5px;
  margin-top: 40px;
  transition: background-color 0.3s ease, color 0.3s ease;

  :hover {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 768px) {
    padding: 22px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    margin-top: 30px;
    font-weight: 100;
  }
  @media (max-width: 480px) {
    padding: 16px 14px;
    border-radius: 5px;
    font-size: 14px;
    letter-spacing: 0.5px;
    margin-top: 20px;
  }
`;
export const ImageParentOuterTop = css`
  margin: auto;
  padding-top: 52px;
  text-align: center;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 850px 1fr;
  grid-template-rows: 520px;
  gap: 33px;

  @media (max-width: 992px) {
    display: flex;
  }
  @media (max-width: 768px) {
    overflow: visible;
    padding-top: 42px;
  }
  @media (max-width: 480px) {
    padding-top: 35px;
  }
`;
export const SideImageConts = (pos) => css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 23px;
  position: relative;
  transition: 1s ease-out top;

  @media (max-width: 992px) {
    display: none;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const SoloSideImage = css`
  height: 222px;
  min-width: 250px;
  max-height: 50%;

  border-radius: 14px;
  overflow: hidden;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const DoubleSideImgBox = css`
  display: flex;
  align-items: center;
  max-height: 50%;
  gap: 20px;
  width: 800px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const TopDoubleImgs = css`
  height: 222px;
  box-shadow: 2.7px 3.5px 22.4px rgba(0, 0, 0, 0.14);

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const MiddleImageTop = css`
  margin: auto;
  text-align: center;
  overflow: hidden;
  box-shadow: 2.7px 3.5px 22.4px rgba(0, 0, 0, 0.14);
  border-radius: 14px;
  min-width: 850px;
  height: auto;

  img {
    height: 100%;
  }

  @media (max-width: 992px) {
    min-width: auto;
    max-width: 750px;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 480px) {
  }
`;
export const SmallScreenTopImgsCont = css`
  display: none;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;

    img {
      width: 48%;
      box-shadow: 2.7px 3.5px 22.4px rgba(0, 0, 0, 0.14);
      border-radius: 10px;
    }
  }
  @media (max-width: 480px) {
  }
`;

/* 

export const Temp = css`

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

*/
