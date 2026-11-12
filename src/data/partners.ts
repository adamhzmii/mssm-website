export type Partner = {
  name: string;
  logo: string;
  /** The headline discount for members. */
  offer: string;
  /** How to claim it and any limits. */
  terms: string;
  body: string[];
  links: { label: string; url: string }[];
};

export const partners: Partner[] = [
  {
    name: "Maki & Ramen",
    logo: "/media/logos/maki-and-ramen",
    offer: "20% off",
    terms: "At any Maki & Ramen location. Show your member e-voucher when paying.",
    body: [
      "Inspired by the hundred ramen-yas (ラーメン屋) of Japan, Maki & Ramen’s dedication to ramen is unmatched: every noodle is handcrafted with care, and the broth is simmered for eight hours in their Edinburgh factory for a deep, luxurious finish.",
      "From their signature Tonkotsu Ramen to a carefully made selection of sushi, the menu caters to every palate.",
    ],
    links: [
      { label: "Website", url: "https://www.makiramen.com/our-venues/manchester/" },
      { label: "Instagram", url: "https://www.instagram.com/makiramen" },
    ],
  },
  {
    name: "Hello Oriental",
    logo: "/media/logos/hello-oriental",
    offer: "20% off",
    terms: "When dining at Hello Oriental. Show your e-voucher when paying at the counter.",
    body: [
      "Located in the heart of Manchester’s Circle Square, Hello Oriental is a modern Asian food hall that brings together the best of East Asian flavours under one roof: Chinese dim sum and aromatic noodle dishes, freshly prepared sushi and comforting rice bowls.",
      "Whether you’re grabbing a quick lunch, dining with friends, or exploring the Asian supermarket downstairs, it is a vibrant and welcoming space to enjoy a true taste of Asia.",
    ],
    links: [
      { label: "Website", url: "https://hofoodhall.com" },
      { label: "Instagram", url: "https://www.instagram.com/hello_oriental_mcr/" },
    ],
  },
  {
    name: "Zaap Thai",
    logo: "/media/logos/zaap-thai",
    offer: "10% off",
    terms: "Off your total bill when dining in, Sunday to Thursday, for groups of up to six. Show proof of your MSSM membership when ordering.",
    body: [
      "Known for its buzzing atmosphere and vibrant street-market decor, Zaap Thai delivers an authentic taste of Bangkok right in the heart of Manchester. From the moment you step inside, you’re transported straight to Thailand’s lively food scene.",
    ],
    links: [
      { label: "Website", url: "https://zaapthai.co.uk/locations/manchester/" },
      { label: "Instagram", url: "https://www.instagram.com/zaap_thai_streetfood/" },
    ],
  },
];
