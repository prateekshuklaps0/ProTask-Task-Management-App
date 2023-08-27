import { css } from "@emotion/react";

export const OuterBox = (isScrolled, location) => css`
  width: 100%;
  top: 0;
  position: sticky;
  z-index: 1000;
  box-shadow: ${location != "/"
    ? "0px 3px 6px 0px rgba(140, 149, 159, 0.15)"
    : isScrolled
    ? "0px 3px 6px 0px rgba(140, 149, 159, 0.15)"
    : "none"};

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const TopInnerCont = css`
  width: 85%;
  height: 55px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    height: 45px;
  }
  @media (max-width: 480px) {
    height: 40px;
  }
`;
export const LinksCont = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 435px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    //border: 1px solid red;
    display: none;
  }
  @media (max-width: 480px) {
  }
`;
export const LinksText = css`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  :hover {
    color: black;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const SearchCont = css`
  position: absolute;
  margin: auto;
  margin-top: 12px;
  border-radius: 6px;
  left: 53%;
  transform: translateX(-50%);
  width: 435px;
  padding: 5px 30px 15px;

  @media (max-width: 992px) {
    left: 55%;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 480px) {
  }
`;
export const SearchIcon = css`
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const InputBox = css`
  height: 30px;
  border-radius: 50px;
  font-size: 16px;

  :focus {
    outline: none;
    border: none;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

// LogIn  Css
export const PersonIconCss = css`
  font-size: 26px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;
export const MenuOuter = css`
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const MenuTextsCss = css`
  font-size: 16px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 13.5px;
    font-weight: 600;
  }
`;

// After Log In Css
export const NameText = css`
  font-size: 18px;
  margin-left: 13px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 12px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
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
