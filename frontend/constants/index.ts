// NAVIGATION
export interface NavLink {
  key: string;
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { key: "About", href: "/", label: "About" },
  { key: "Jobs", href: "/job", label: "Jobs" },
  { key: "Service", href: "/", label: "Service" } ,
  { key: "Contact Us", href: "/contact", label: "Contact Us" }, 
];

// CAMP SECTION
export const PEOPLE_URL = ["/p1.jpg", "/p2.jpg", "/p3.jpg"];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Evergrow Gadgets",
      "Press Releases",
      "Environment",
      "Privacy Policy",
      "Contact Us",
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "124-756-7823" },
    { label: "Email Officer", value: "doc@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.png",
    "/instagram.png",
    "/twitter.png",
    "/tiktok.png",
    "/linkedin.png",
  ],
};
