import React from "react";
import { Box, Text, Image, Center } from "@chakra-ui/react";

import {
  BsTwitter as TwitterLogo,
  BsInstagram as InstaLogo,
  BsYoutube as YouTubeLogo,
  BsGlobe as GlobeLogo,
} from "react-icons/bs";
import {
  FaLinkedinIn as LinkedInLogo,
  FaFacebookF as FacebookLogo,
} from "react-icons/fa";

import LogoImg from "../Images/Logo.png";

const Footer = () => {
  return (
    <Box
      fontFamily="primaryf"
      bg="greybg2"
      id="about"
      pb={["25px", "30px"]}
      pt={["30px", "40px", "50px"]}
    >
      <Box
        m="auto"
        w="85%"
        display={["grid", "grid", "grid", "flex"]}
        gap={["20px", "auto", "auto", "70px"]}
        gridTemplateColumns={[
          "repeat(2, 1fr)",
          "30px 1fr 1fr",
          "50px 1fr 1fr 1fr",
        ]}
      >
        <Image
          src={LogoImg}
          display={["none", "inline-block"]}
          w={["25px", "25px", "30px"]}
          h={["25px", "25px", "30px"]}
        />
        {UpperFooterTexts.map((item, ind) => (
          <Box
            gridColumn={[
              "auto",
              ind >= 2 && ind != 4 ? ind - 0 : ind == 4 ? ind - 2 : "auto",
              ind >= 3 ? ind - 1 : "auto",
              "auto",
            ]}
            key={item.title + ind}
          >
            <Text
              color="whitishgrey"
              fontWeight={500}
              fontSize={["15px", "17px", "18px"]}
              mb={["13px", "18px", "24px", "32px"]}
            >
              {item.title}
            </Text>
            {item.textArr.map((item, ind) => (
              <Text
                color="greybg"
                _hover={{ color: "whitishgrey" }}
                fontSize={["13.5px", "15px", "17px"]}
                mb={["5px", "8px", "12px", "17px"]}
                cursor="pointer"
                key={item}
              >
                {item}
              </Text>
            ))}
          </Box>
        ))}
      </Box>

      <Box
        m="auto"
        mt={["20px", "20px", "25px"]}
        mb={["25px", "20px", "35px"]}
        w={["85%"]}
        border="1px solid #727272"
      ></Box>

      <Box
        color="greybg"
        m="auto"
        w="85%"
        textAlign="center"
        pb={["20px", "20px", "35px"]}
        display={["grid", "grid", "grid", "flex"]}
        alignItems="center"
        justifyContent="space-between"
        gap={["20px", "25px", "30px", "auto"]}
        placeItems="center"
        gridTemplateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
      >
        <Text
          display={["none", "inline-block"]}
          gridColumn={["auto", "auto", "auto", "none"]}
          gridRow={[3, 2, "auto", "none"]}
          fontSize={["14px", "14.5px", "16px"]}
        >
          © 2023 ProTask, Inc
        </Text>
        <Text
          display={["none", "none", "flex"]}
          gridColumn={["auto", "auto", "auto"]}
          fontSize={["14px", "14.5px", "16px"]}
          gap={["5px"]}
          alignItems="center"
        >
          <Image fontSize={["20px", "18px", "20px"]} as={GlobeLogo} /> English
        </Text>
        <Text
          display={["none", "block"]}
          gridColumn={["auto", "auto", "auto", "auto"]}
          gridRow={[3, 2, "auto"]}
          fontSize={["14px", "14.5px", "16px"]}
        >
          Terms & Privacy
        </Text>
        <Box
          gridColumn={["auto", "auto", "auto", "auto"]}
          gridRow={[1, 1, "auto"]}
          gap={["8px"]}
          display="flex"
          alignItems="center"
        >
          {SocialIconsArr.map((item, ind) => (
            <Center
              padding={["8px", "8px", "10px"]}
              fontSize={["15px", "15px", "16px"]}
              borderRadius="50px"
              bg="blacktext"
              _hover={{
                bg: "whitishgrey",
                color: "blacktext",
              }}
              transition="background 0.2s ease, color 0.2s ease"
              cursor="pointer"
              key={item.name + ind}
            >
              <Image as={item.logo} />
            </Center>
          ))}
        </Box>
        <Box
          w={["100%", "auto"]}
          gridColumn={["auto", 0, 3, "auto"]}
          gridRow={[2, 1, "auto"]}
          h={["32px", "27px", "35px"]}
          display="flex"
          gap={["auto", "15px"]}
          justifyContent={["space-around", "normal"]}
          alignItems="center"
        >
          <Image
            h="100%"
            src="https://luna1.co/Download_App_Store_Badge_US.svg"
          />
          <Image h="100%" src="https://luna1.co/Google_Play_EN.svg" />
        </Box>
      </Box>

      <Box
        m="auto"
        w="85%"
        mb="15px"
        display={["flex", "none"]}
        alignItems="center"
        justifyContent="space-between"
        color="greybg"
      >
        <Text
          display={["block", "none"]}
          gridColumn={["auto", "auto", "auto"]}
          gridRow={[3, 2, "auto"]}
          fontSize={["14px", "14.5px", "16px"]}
        >
          © 2023 ProTask, Inc
        </Text>
        <Text
          display={["block", "none"]}
          gridColumn={["auto", "auto", "auto", "auto"]}
          gridRow={[3, 2, "auto"]}
          fontSize={["14px", "14.5px", "16px"]}
        >
          Terms & Privacy
        </Text>
      </Box>

      <Box
        textAlign="center"
        justifyContent="center"
        display={["flex", "flex", "none"]}
        gridColumn={["auto", "auto", "auto"]}
        fontSize={["14px", "14px", "16px"]}
        gap={["7px"]}
        alignItems="center"
        color="greybg"
      >
        <Image fontSize={["15.5px", "16px", "20px"]} as={GlobeLogo} /> English
      </Box>
    </Box>
  );
};

export default Footer;

const SocialIconsArr = [
  {
    name: "Twitter",
    logo: TwitterLogo,
  },
  {
    name: "LinkedIn",
    logo: LinkedInLogo,
  },
  {
    name: "Facebook",
    logo: FacebookLogo,
  },
  {
    name: "Instagram",
    logo: InstaLogo,
  },
  {
    name: "Youtube",
    logo: YouTubeLogo,
  },
];

const UpperFooterTexts = [
  {
    title: "ProTask",
    textArr: [
      "Home",
      "Product",
      "What's New",
      "Pricing",
      "Premium",
      "Business",
      "Enterprise",
      "Customer Success",
      "ProTask Templates",
      "Trust & Security",
      "Status",
    ],
  },
  {
    title: "About Us",
    textArr: [
      "Company",
      "Leadership",
      "Customers",
      "Diversity",
      "Careers",
      "Press",
      "Wavelength",
      "Blog",
      "Investor Relations",
      "Sitemap",
      "Transparency Statement",
    ],
  },
  {
    title: "Workflow Solutions",
    textArr: [
      "Project Management",
      "Goal Management",
      "Agile Management",
      "Task Management",
      "Increase Productivity",
      "Work Management",
      "Project Planning",
      "To Do Lists",
      "See All Uses",
      "See All Teams",
    ],
  },
  {
    title: "Resources",
    textArr: [
      "ProTask Guide",
      "Forum",
      "Support",
      "App Directory",
      "Developers & API",
      "Partners",
      "ProTask Community",
      "Events",
      "ProTask for Nonprofits",
      "Accessibility",
    ],
  },
  {
    title: "Learn",
    textArr: [
      "11 Leadership Styles",
      "110 Icebreaker Questions",
      "Executive Summary Tips",
      "Impostor Syndrome Tips",
      "Prevent Team Burnout",
      "SWOT Analysis Tips",
      "What are OKRs?",
      "What are SMART Goals?",
      "What is Scope Creep?",
      "See All Guides",
    ],
  },
];
