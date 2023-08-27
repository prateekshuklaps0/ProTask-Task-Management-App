import * as css from "../Styles/LandingPageCss";
import { useEffect, useState } from "react";
import { Box, Text, Link, Button, Image } from "@chakra-ui/react";

import TopMiddleImg from "../Images/LandingPage/TopMiddleImg.png";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <Box fontFamily="primaryf" css={css.OuterBox}>
      {/* Top Part */}
      <Box bg="greybg" css={css.OuterTopPart}>
        <Text color="blacktext" css={css.TopText}>
          The best platform for cross-functional work
        </Text>
        <Text color="blacktext" css={css.SubTopText}>
          Want more efficiency in your organization? ProTask is easy for all
          teams to use, so you can deliver quality work, faster.
        </Text>
        <Button
          href="/login"
          bg="blacktext"
          _hover={{ bg: "primary" }}
          as={Link}
          css={css.TopGetStartedBtn}
        >
          Get Started
        </Button>
        <Box css={css.ImageParentOuterTop}>
          <Box css={css.SideImageConts("Left")}>
            <Image
              css={css.SoloSideImage}
              src="https://assets.asana.biz/transform/e9d20aa3-342c-4083-8933-c3e551ea2f2e/homepage-hero-goals-en-3x?io=transform:fill,width:1200&format=webp"
            />
            <Box css={css.DoubleSideImgBox}>
              <Image
                css={css.TopDoubleImgs}
                src="https://assets.asana.biz/transform/db3a7a2c-7bbf-4b63-bb0a-b80c129fe40f/homepage-hero-tasks-en-3x?io=transform:fill,width:760&format=webp"
              />
              <Image
                css={css.TopDoubleImgs}
                src="https://assets.asana.biz/transform/09d5854c-f381-4e44-8365-1ea2b6c56b47/homepage-hero-integration-en-3x?io=transform:fill,width:600&format=webp"
              />
            </Box>
          </Box>
          <Image src={TopMiddleImg} css={css.MiddleImageTop} />
          <Box css={css.SideImageConts("Right")}>
            <Box css={css.DoubleSideImgBox}>
              <Image
                css={css.TopDoubleImgs}
                src="https://assets.asana.biz/transform/3f01d755-8aa3-4cca-8ba2-9c912b38f3f6/homepage-hero-automation-en-3x?io=transform:fill,width:760&format=webp"
              />
              <Image
                css={css.TopDoubleImgs}
                src="https://assets.asana.biz/transform/0d635d0f-5c55-4edc-8421-8960e45ca80c/homepage-hero-piechart-en-3x?io=transform:fill,width:600&format=webp"
              />
            </Box>
            <Image
              css={css.SoloSideImage}
              src="https://assets.asana.biz/transform/002bcc20-5320-49fb-9998-d99c55f282cf/homepage-hero-approval-en-3x?io=transform:fill,width:600&format=webp"
            />
          </Box>
          <Box css={css.SmallScreenTopImgsCont}>
            <Image src="https://assets.asana.biz/transform/5e1c89aa-e1af-44f5-8902-f692c819c3b2/home-hero-1a?io=transform:fill,width:768&format=webp" />
            <Image src="https://assets.asana.biz/transform/efb32754-4aa7-4fd8-ba6f-2d019316dd4a/home-hero-1b?io=transform:fill,width:768&format=webp" />
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default LandingPage;
