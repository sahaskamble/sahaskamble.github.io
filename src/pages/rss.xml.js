import rss from '@astrojs/rss';

export function GET(context) {
  return rss({
    title: 'My Story',
    description: 'So info about me and CV for recruters',
    site: context.site,
    items: [],
    customData: `<language>en-us</language>`,
  });
}
