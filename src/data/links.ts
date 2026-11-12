/**
 * The Links page: what the society is pointing people to right now.
 * Sign-up forms come and go with each event, so this is the file to edit most often.
 */
export type LinkItem = {
  title: string;
  note?: string;
  url: string;
  /** Poster artwork, where the society has made one. */
  poster?: string;
};

export const signUps: LinkItem[] = [
  {
    title: "MSSM membership",
    note: "£12. Member prices at events and partner discounts around the city.",
    url: "https://docs.google.com/forms/d/1z6XfXQwGSo0WwpndwVeeAC52REf_tfo2eVWWlfFUh9M/viewform",
    poster: "/media/links/membership",
  },
  {
    title: "Ohana Berbonding 2026/27: sign up as a child",
    note: "Join an Ohana family as a fresher.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeZQUBDtgtB2OSvJ1cbSTmM6ToufSNeAVUPBhIgCt0QUJ3JMg/viewform",
    poster: "/media/links/ohana-children",
  },
  {
    title: "Ohana Berbonding 2026/27: sign up as a parent",
    note: "Look after an Ohana family as a senior.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdB3FhQ1m0olGwge5PS4XZTghcDLcDLZAagyzfzGtNSRVOAow/viewform",
    poster: "/media/links/ohana-parents",
  },
  {
    title: "Deepavali Dinner",
    note: "£10 for members, £12 for non-members.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdVZkBaqdv9yGb9-3Pn8XTdRdR3H0RvsAKJBlGOyp2SICbBRw/viewform",
    poster: "/media/links/deepavali-dinner",
  },
  {
    title: "Manchester MGames jersey",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf8iu5rU0WXu3PD7cJ5NSyalf-OsoRt5BdsPDuveoMGcyG3CQ/viewform",
    poster: "/media/links/mgames-jersey",
  },
  {
    title: "MCR Freshers 26/27 group chat",
    note: "For incoming freshers.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdZifmUldhaV3a3jNvtCOb9VuMXXKy1HMy6ghlPx2h56QqFpw/viewform",
    poster: "/media/links/freshers-group-chat",
  },
  {
    title: "MSSM Financial Assistance Scheme",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSclVc8ZEUFGpGAY24oaLbyBOavPaeCXNLH3bqzQER6M9kCQDw/viewform",
    poster: "/media/links/financial-assistance",
  },
];

export const documents: LinkItem[] = [
  {
    title: "Freshers’ Booklet 2026",
    note: "What to pack, the essentials, and food.",
    url: "https://www.canva.com/design/DAHQHbYFB44/aMM13FXTtCfYqCtmuY2PDw/edit",
    poster: "/media/links/freshers-booklet",
  },
  {
    title: "MSSM Sports Policy 2025/26",
    note: "Publicly available to all members.",
    url: "https://drive.google.com/file/d/1OO17NYPlfOFWqdVslEwzOuQDgIY7rEie/view",
    poster: "/media/links/sports-policy",
  },
  {
    title: "Committee Spending Framework",
    url: "https://drive.google.com/file/d/1U-95VtHTbXVmTIulkF9626_lt13Dk9zy/view",
    poster: "/media/links/spending-framework",
  },
  {
    title: "MSSM Constitution",
    url: "https://docs.google.com/document/d/1pEP7zOtZrDW22x0BepghTIrUD9ft5ynJeUA38eSvXCg/edit?tab=t.0",
  },
];

export const galleries: LinkItem[] = [
  { title: "Event photos 2026/27", url: "https://drive.google.com/drive/u/2/folders/14XgdUA7hjQS6KfmTiI6YKJJVZxIPVl5t" },
  { title: "Event photos 2025/26", url: "https://drive.google.com/drive/folders/1SPE0Hv9Vq-bP81_pt_WVKJfWqaTQQG0-" },
  { title: "MGames 2025", url: "https://drive.google.com/drive/folders/1fepFXSgaTjCc5VEdR1XaXso9LAzPl5i5" },
  { title: "Event photos 2024/25", url: "https://drive.google.com/drive/folders/1W-06Ln5RuIQG9j3MYGz9cb-9wzS9xJmM" },
  { title: "MGames 2024", url: "https://drive.google.com/drive/u/5/folders/1ezJYLxTN6I46IbMp9oMH_UJzgJnegN7j" },
  { title: "Event photos 2023/24", url: "https://drive.google.com/drive/folders/1-OsUT3N3npKlbwTUBy9ZhBq7hQakCZW3" },
  { title: "MGames 2023", url: "https://drive.google.com/drive/u/5/folders/1-2E2OF0g2D4gf_oBNR7pSHUcq3YQCYSX" },
  { title: "Event photos 2022/23", url: "https://drive.google.com/drive/folders/13hxtw9IkA0EOK1OlZFXWTIsxTbzyCgiP" },
  { title: "MGames 2022", url: "https://drive.google.com/drive/folders/1-OYdbbZZ-w4B7y7ctnxLowXAuowwyEPT" },
];

export const elsewhere: LinkItem[] = [
  {
    title: "Archiving Excellence graduation photography",
    note: "A special offer for MSSM members.",
    url: "http://www.archivingexcellence.com/contact",
    poster: "/media/links/archiving-excellence",
  },
  { title: "MSSM on Facebook", url: "https://www.facebook.com/mssmmanchester.co.uk" },
];
