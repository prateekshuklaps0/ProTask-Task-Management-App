import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { Text, Image, Link } from "@chakra-ui/react";

import Img from "../../public/LogoB.png";

const Logo = ({ fontSize }) => {
  return (
    <Link fontFamily="k" fontSize={fontSize} to="/" css={LinkCss}>
      <Text css={TextCss}>PR</Text>
      <Image w={fontSize} src={Img} css={ImageCss} />
      <Text css={TextCss}>TASK</Text>
    </Link>
  );
};

Logo.propTypes = {
  fontSize: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Logo;

export const LinkCss = css`
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  font-weight: 600;
  gap: 1px;

  :hover {
    text-decoration: none;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const TextCss = css`
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ImageCss = css`
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
