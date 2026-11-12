export type Sponsor = {
  name: string;
  tier: "Platinum" | "Gold" | "Silver" | "Bronze";
  logo: string;
  /** Paragraphs, kept as written by the society. */
  body: string[];
  links: { label: string; url: string }[];
};

export const sponsors: Sponsor[] = [
  {
    name: "CIMB",
    tier: "Platinum",
    logo: "/media/logos/cimb",
    body: [
      "CIMB is one of the largest ASEAN banks, and prides itself in empowering graduates and talents to chart their careers in the banking landscape.",
      "If you’d like to connect with Team CIMB, message them on Instagram at @forwardyourcareer.",
    ],
    links: [
      { label: "The Complete Banker", url: "http://tiny.cc/CIMBtcb" },
      { label: "The Complete Banker Digital", url: "http://tiny.cc/CIMBtcbd" },
      { label: "The Complete Banker Sustainability", url: "http://tiny.cc/CIMBtcbs" },
      { label: "CIMB Internship Programme", url: "http://tiny.cc/CIMBinternship" },
      { label: "@forwardyourcareer on Instagram", url: "https://www.instagram.com/forwardyourcareer" },
    ],
  },
  {
    name: "Sunway Group",
    tier: "Platinum",
    logo: "/media/logos/sunway",
    body: [
      "Sunway Group is one of Malaysia’s leading conglomerates, with diverse businesses spanning property development, construction, education, healthcare, hospitality, and retail. With a strong commitment to sustainability and innovation, Sunway plays a key role in shaping Malaysia’s future while creating meaningful impact across communities.",
      "For students, Sunway offers valuable opportunities to gain industry exposure through internships, graduate programmes, mentorship, and career pathways across its wide range of business divisions, empowering the next generation of leaders to grow and thrive.",
    ],
    links: [{ label: "Visit Sunway", url: "https://www.sunway.com.my/" }],
  },
  {
    name: "SD Guthrie",
    tier: "Gold",
    logo: "/media/logos/sd-guthrie",
    body: [
      "With a legacy spanning over 200 years, Sime Darby Guthrie stands as a distinguished multinational corporation, celebrated for its significant contributions to Malaysia’s economy. It ranks as one of the leading companies in the country spearheading innovative initiatives, solidifying its position as one of the foremost organisations dedicated to pushing boundaries and shaping the future of the oils and fats industry.",
      "MSSM members can access not only exclusive networking opportunities and industry insights, but also potential avenues for fulfilling careers, mentorship programmes, internship opportunities, and even scholarships.",
    ],
    links: [{ label: "Opportunities at SD Guthrie", url: "https://www.sdguthrie.com/our-people/#opportunities" }],
  },
  {
    name: "EY",
    tier: "Gold",
    logo: "/media/logos/ey",
    body: [
      "At EY, their purpose is to build a better working world. Through the insights and quality services they provide, EY helps build trust and confidence in capital markets and economies worldwide. The firm is dedicated to developing outstanding leaders who collaborate to fulfil their commitments to all stakeholders.",
      "As a proud gold sponsor of MSSM, EY opens doors for all members, providing opportunities to network, secure internships, and land sought-after job placements.",
    ],
    links: [{ label: "Careers at EY Malaysia", url: "https://www.ey.com/en_my/careers" }],
  },
  {
    name: "KWSP EPF",
    tier: "Silver",
    logo: "/media/logos/kwsp-epf",
    body: [
      "The Employees Provident Fund (KWSP EPF) is Malaysia’s national retirement savings fund, helping private and non-pensionable public sector workers save for retirement through mandatory contributions from both employees and employers. It also offers withdrawals for housing, education, and medical expenses.",
    ],
    links: [{ label: "Learn about KWSP EPF", url: "https://www.kwsp.gov.my/en/" }],
  },
  {
    name: "The Chilli Tales",
    tier: "Bronze",
    logo: "/media/logos/the-chilli-tales",
    body: [
      "Based in Manchester, The Chilli Tales serves authentic and halal Malaysian food. They deliver to Manchester, Liverpool and Cheshire, and take catering orders as well: food that instantly transports you back to Malaysia.",
    ],
    links: [{ label: "The Chilli Tales on Instagram", url: "https://www.instagram.com/thechillitales/" }],
  },
  {
    name: "UKEC International",
    tier: "Bronze",
    logo: "/media/logos/ukec-international",
    body: [
      "UKEC International is an education agency based in the UK, providing free support to students who are looking into higher education in the UK. They support nearly 300 Malaysian students each year to enrol at top universities and Bar schools in the UK.",
      "Their free services include access to workshops and events, university application counselling to 120+ partnered universities, personal statement writing guidance, UK student visa assistance, UK accommodation booking, a bursary of up to £180, and internship and job opportunities at UKEC UK.",
    ],
    links: [{ label: "Visit UKEC International", url: "https://www.uk-education-centre.com/" }],
  },
];

export const tiers = ["Platinum", "Gold", "Silver", "Bronze"] as const;
