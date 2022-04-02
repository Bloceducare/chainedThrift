import { absoluteRoutes } from "../utils";

export const landingNav = [
  {
    value: "About",
    link: "!#",
  },
  {
    value: "Help",
    link: "!#",
  },
  {
    value: "Community",
    link: "!#",
  },
];
export const appNav = [
  {
    value: "Home",
    link: absoluteRoutes.landing
  },
  {
    value: "Swap",
    link: absoluteRoutes.swap,
  },
  {
    value: "Purses",
    link: absoluteRoutes.purses
  },
  {
    value: "new purse",
    link: absoluteRoutes.new_purse
  },
];
export const purseSideBar = [
  {
    name: "Overview",
    link: "/app/purse/1234",
    icon: "/assets/overView.svg"
  },
  {
    name: "Actions",
    link: "/app/purse/1234/actions",
    icon: "/assets/hash.svg"
  },
  {
    name: "Chat Room",
    link: "/app/purse/1234/chat",
    icon: "/assets/chatroom.svg"
  },
  {
    name: "Settings",
    link: "/app/purse/1234/settings",
    icon: "/assets/settings.svg"
  },
];

export const footerLinks = [
  {
    text: "About Chained Thrift",
    link: "!#",
  },

  {
    text: " We are hiring!",
    link: "!#",
  },

  {
    text: "Get in Touch",
    link: "!#",
  },
  {
    text: "Privacy Policy",
    link: "!#",
  },
  {
    text: " Resources",
    link: "!#",
  },
  {
    text: "Terms of Service",
    link: "!#",
  },
];


export const tokenData = [
  {
    icon: "/assets/image.svg",
    abv: "ETH"

  },
  {
    icon: "/assets/image.svg",
    abv: "ETH"

  },
  {
    icon: "/assets/image.svg",
    abv: "ETH"

  },
  {
    icon: "/assets/image.svg",
    abv: "ETH"

  },
  {
    icon: "/assets/image.svg",
    abv: "ETH"

  }
]
export const purseData = {
  noPurse: true,
  myPurses: [
    { created: "03 Feb. 2021", member: "11", tvl: "4000 USDC" },
    { created: "25 Aug. 2021", member: "8", tvl: "5 ETH" },
    { created: "14 Apr. 2021", member: "6", tvl: "3600 USDC" },
    { created: "02 Dec. 2021", member: "8", tvl: "8000 USDC" },
  ],
  explorePurses: [
    { created: "23 Sep. 2021", member: "2", tvl: "1000 USDC" },
    { created: "13 Oct. 2021", member: "4", tvl: "1400 USDC" },
    { created: "04 Dec. 2021", member: "6", tvl: "1600 USDC" },
    { created: "22 Dec. 2021", member: "8", tvl: "4000 USDC" },
    { created: "23 Sep. 2021", member: "2", tvl: "1000 USDC" },
    { created: "13 Oct. 2021", member: "4", tvl: "1400 USDC" },
    { created: "04 Dec. 2021", member: "6", tvl: "1600 USDC" },
    { created: "22 Dec. 2021", member: "8", tvl: "4000 USDC" },
  ],
};
