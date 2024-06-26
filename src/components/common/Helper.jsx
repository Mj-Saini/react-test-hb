import featuredLogo1 from "../../assets/image/svg/logo1.svg";
import featuredLogo2 from "../../assets/image/svg/logo2.svg";
import featuredLogo3 from "../../assets/image/svg/logo3.svg";
import featuredLogo4 from "../../assets/image/svg/logo4.svg";
import featuredLogo5 from "../../assets/image/svg/Logo 5.svg";

// AUTHORS
import floyd from "../../assets/image/png/floyd-img.png";
import dianne from "../../assets/image/png/dianna.png";
import jenny from "../../assets/image/png/jenny.png";
import leslie from "../../assets/image/png/leslie.png";
import { BusinessIcon, EconamyIcon, StartupIcon, TechnalogyIcon } from "./Icon";

// BLOG
import blogPost1 from "../../assets/image/png/blog-startup.png";
import blogPost2 from "../../assets/image/png/blog-business-img.png";
import blogPost3 from "../../assets/image/png/blog-startup-img.png";
import blogPost4 from "../../assets/image/png/blog-tech-img.png";
import blogPost5 from "../../assets/image/png/blog-startup.png";

export const headerTabs = [
  {
    tabs: "Home",
    path: "/",
  },
  {
    tabs: "blog",
    path: "/blog",
  },
  {
    tabs: "About Us",
    path: "/about-us",
  },
  {
    tabs: "Contact us",
    path: "/contact-us",
  },
];
export const FooterLinks = [
  {
    tabs: "Home",
    path: "/",
  },
  {
    tabs: "blog",
    path: "/blog",
  },
  {
    tabs: "About Us",
    path: "/about-us",
  },
  {
    tabs: "Contact us",
    path: "/contact-us",
  },
  {
    tabs: "Privacy Policy",
    path: "/privacy-policy",
  },
];
export const contactUsData = [
  {
    inputName: "first name",
    inputType: "text",
  },
  {
    inputName: "Your Email",
    inputType: "email",
  },
  {
    inputName: "Query Related",
    inputType: "dropdown",
    dropdownOptions: ["General Inquiry", "Technical Support", "Billing"],
  },
];
export const weAreFeatured = [
  {
    img: featuredLogo1,
  },
  {
    img: featuredLogo2,
  },
  {
    img: featuredLogo3,
  },
  {
    img: featuredLogo4,
  },
  {
    img: featuredLogo5,
  },
];
export const authorData = [
  {
    img: floyd,
    name: "Floyd Miles",
    roll: "Content Writer @Company",
  },
  {
    img: dianne,
    name: "Dianne Russell",
    roll: "Content Writer @Company",
  },
  {
    img: jenny,
    name: "Jenny Wilson",
    roll: "Content Writer @Company",
  },
  {
    img: leslie,
    name: "Leslie Alexander",
    roll: "Content Writer @Company",
  },
];
export const categoryData = [
  {
    img: <BusinessIcon />,
    name: "Business",
    roll: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    img: <StartupIcon />,
    name: "Startup",
    roll: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    img: <EconamyIcon />,
    name: "Economy",
    roll: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    img: <TechnalogyIcon />,
    name: "Technology",
    roll: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
];
export const allPostData = [
  {
    name: "John Deo ",
    title: "8 Figma design systems that you can download for free today.",
    date: "l   Aug 23, 2021 ",
  },
  {
    title: "8 Figma design systems that you can download for free today.",
    date: "l   Aug 23, 2021 ",
    name: "John Deo ",
  },
  {
    title: "8 Figma design systems that you can download for free today.",
    date: "l   Aug 23, 2021 ",
    name: "John Deo ",
  },
  {
    title: "8 Figma design systems that you can download for free today.",
    date: "l   Aug 23, 2021 ",
    name: "John Deo ",
  },
];
export const blogAllPostData = [
  {
    img: blogPost1,
    roll: "Startup ",
    title: "Design tips for designers that cover everything you need.",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    img: blogPost2,
    roll: "BUSINESS ",
    title: "How to build rapport with your web design clients",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    img: blogPost3,
    roll: "Startup ",
    title: "Logo design trends to avoid in 2022",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    img: blogPost4,
    roll: "TECHNOLOGY ",
    title: "8 Figma design systems you can download for free today",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    img: blogPost5,
    roll: "Econamy ",
    title: "Font sizes in UI design: The complete guide to follow",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
];
