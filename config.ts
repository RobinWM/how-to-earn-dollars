export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "How to earn dollars",
  domainName: "howtoearndollars.com",
  description:
    "How to earn dollars is a website that teaches you how to earn dollars. It is a collection of articles, tutorials, and resources that help you earn dollars.",
  mainNav: [
    {
      title: "",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/wangfengyuan/frontend-nav",
    docs: "",
  },
}

export const locales = ["zh", "en"]
export const defaultLocale = "zh"
