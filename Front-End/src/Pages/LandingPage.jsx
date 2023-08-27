import * as css from "../Styles/LandingPageCss";
import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Link,
  Button,
  Image,
  Center,
  Tabs,
  TabList,
  TabPanels,
  TabIndicator,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { BsCheck2Circle as CheckIcon } from "react-icons/bs";

import Footer from "../Components/Footer";

import TopMiddleImg from "../Images/LandingPage/TopMiddleImg.png";
import MarketingImg from "../Images/LandingPage/Marketing.webp";
import ITimg from "../Images/LandingPage/IT.webp";
import OperationsImg from "../Images/LandingPage/Operations.webp";
import ProjectManageImg from "../Images/LandingPage/ProjectManager.webp";
import StrategicImg from "../Images/LandingPage/Strategic.webp";

const LandingPage = () => {
  const [activeWorkflow, setActiveWorkflow] = useState("marketing");

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
        <Box css={css.ImageParentOuterTop} id="features">
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

      {/* Workflow */}
      <Box id="workflow">
        <Box css={css.WorkflowOuter}>
          <Text color="blacktext" css={css.WorkflowHead}>
            See how teams use ProTask
          </Text>
          <Tabs variant="unstyled">
            <TabList css={css.TabsNameCont}>
              <Tab
                color={activeWorkflow == "marketing" ? "blacktext" : "greytext"}
                onClick={() => setActiveWorkflow("marketing")}
                _hover={{ color: "blacktext" }}
                css={css.TabsTextCss}
              >
                Marketing teams
              </Tab>
              <Tab
                color={activeWorkflow == "it" ? "blacktext" : "greytext"}
                onClick={() => setActiveWorkflow("it")}
                _hover={{ color: "blacktext" }}
                css={css.TabsTextCss}
              >
                IT teams
              </Tab>
              <Tab
                color={activeWorkflow == "operation" ? "blacktext" : "greytext"}
                onClick={() => setActiveWorkflow("operation")}
                _hover={{ color: "blacktext" }}
                css={css.TabsTextCss}
              >
                Operations teams
              </Tab>
              <Tab
                color={activeWorkflow == "project" ? "blacktext" : "greytext"}
                onClick={() => setActiveWorkflow("project")}
                _hover={{ color: "blacktext" }}
                display={["none", "inline"]}
                css={css.TabsTextCss}
              >
                Project management
              </Tab>
              <Tab
                color={activeWorkflow == "strategic" ? "blacktext" : "greytext"}
                onClick={() => setActiveWorkflow("strategic")}
                _hover={{ color: "blacktext" }}
                display={["none", "none", "inline"]}
                css={css.TabsTextCss}
              >
                Strategic planning
              </Tab>
            </TabList>
            <TabIndicator
              mt="-3.5px"
              height={["3px", "4px"]}
              bg="blacktext"
              borderRadius="50px"
            />
            <TabPanels>
              {WorkFlowData.map((item, ind) => (
                <WorkflowCard {...item} ind={ind} key={item.title + ind} />
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default LandingPage;

const WorkflowCard = ({ title, pointers, btnText, img, ind }) => {
  return (
    <TabPanel
      display={[
        ind >= 3 ? "none" : "inline",
        ind >= 4 ? "none" : "inline",
        "inline",
      ]}
    >
      <Box css={css.WorkflowCardOuter}>
        <Box bg="greybg" css={css.CardLeftBox}>
          <Text css={css.TitleWorkflow}>{title}</Text>
          <Box
            w={["250px", "180px", "250px", "190px", "250px"]}
            mt={["15px", "18px", "20px"]}
            mb={["18px", "22px", "25px"]}
            borderTop="1px solid #727272"
          ></Box>
          {pointers.map((item, ind) => (
            <Text css={css.PointersWorkflow} key={item}>
              <Image as={CheckIcon} /> {item}
            </Text>
          ))}
          <Button
            mb={["30px", "30px", "40px", "none"]}
            bg="blacktext"
            _hover={{ bg: "primary" }}
            css={css.TopGetStartedBtn}
          >
            {btnText}
          </Button>
        </Box>
        <Center css={css.CardRightBox}>
          <Image w="90%" src={img} />
        </Center>
      </Box>
    </TabPanel>
  );
};

const WorkFlowData = [
  {
    title: "Deliver impactful marketing strategies",
    pointers: [
      "Collaborate on cross-team work for campaigns",
      "Help teams quickly refocus around shifting business needs",
      "Automate processes for approvals",
    ],
    btnText: "Explore marketing",
    img: MarketingImg,
  },
  {
    title: "Automate and streamline IT requests",
    pointers: [
      "Reduce digital friction for better team velocity",
      "Get more control for critical security needs",
      "Streamline workflows accross teams",
    ],
    btnText: "Explore IT",
    img: ITimg,
  },
  {
    title: "Drive operational efficiency",
    pointers: [
      "Track work and see progress in real time",
      "Standardize and automate processes",
      "Unblock teams to hit revenue goals",
    ],
    btnText: "Explore operations",
    img: OperationsImg,
  },
  {
    title: "Manage projects more efficiently",
    pointers: [
      "Remove silos for better collaboration",
      "Spot project gaps to instantly pivot and stay on track",
      "Track resources, goals and progress in one place",
    ],
    btnText: "Explore project management",
    img: ProjectManageImg,
  },
  {
    title: "Align teams to execute winning strategies",
    pointers: [
      "Set anual plans to deliver results",
      "See real-time insights to stay on track and on budget",
    ],
    btnText: "Explore strategic planning",
    img: StrategicImg,
  },
];
