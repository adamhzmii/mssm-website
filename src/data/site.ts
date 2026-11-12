/** Site-wide facts. Edit here when links, socials or the membership form change. */
export const site = {
  name: "Malaysian Students’ Society of Manchester",
  shortName: "MSSM",
  tagline: "Your home away from home.",
  url: "https://mssmanchester.co.uk",
  description:
    "MSSM is the largest Malaysian student body in Manchester: a home away from home for Malaysian students at the University of Manchester, Manchester Metropolitan University and the University of Salford.",
  email: "mssm.secretary@gmail.com",
  membership: {
    price: "£12",
    url: "https://docs.google.com/forms/d/1z6XfXQwGSo0WwpndwVeeAC52REf_tfo2eVWWlfFUh9M/viewform",
  },
  freshersBooklet: {
    label: "Freshers’ Booklet 2026",
    url: "https://www.canva.com/design/DAGwTYlNyqM/0g9WRK_WG43X2JmbzMra7Q/edit",
  },
  universities: [
    "The University of Manchester",
    "Manchester Metropolitan University",
    "University of Salford",
  ],
  socials: [
    { id: "instagram", label: "Instagram", handle: "@instamssm", url: "https://www.instagram.com/instamssm/" },
    { id: "linkedin", label: "LinkedIn", handle: "Malaysian Students’ Society of Manchester", url: "https://www.linkedin.com/company/malaysian-students-society-manchester" },
    { id: "facebook", label: "Facebook", handle: "MSSM", url: "https://www.facebook.com/mssmmanchester.co.uk/" },
    { id: "youtube", label: "YouTube", handle: "MSSMweb", url: "https://www.youtube.com/user/MSSMweb" },
  ],
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/committee", label: "Committee" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/partners", label: "Partners" },
  { href: "/affiliates", label: "Affiliates" },
  { href: "/faqs", label: "FAQs" },
  { href: "/links", label: "Links" },
] as const;

export const currentCommitteeYear = "2025/26";
