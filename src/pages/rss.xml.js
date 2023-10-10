import rss from "@astrojs/rss"

export function GET(context) {
  return rss({
    title: "My Portfolio",
    description: "So info about me an my CV",
    site: context.site,
    items: [],
    customData: `<language>en-us</language>`,
  })
}
