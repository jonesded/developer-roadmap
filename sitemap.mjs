import path from 'node:path';
import fs from 'node:fs/promises';

async function getRoadmapIds() {
  return fs.readdir(path.join(process.cwd(), 'src/data/roadmaps'));
}

async function getBestPracticesIds() {
  return fs.readdir(path.join(process.cwd(), 'src/data/best-practices'));
}

export function shouldIndexPage(pageUrl) {
  return ![
    'https://hnmdevs.com/404',
    'https://hnmdevs.com/terms',
    'https://hnmdevs.com/privacy',
    'https://hnmdevs.com/pdfs',
    'https://hnmdevs.com/g',
  ].includes(pageUrl);
}

export async function serializeSitemap(item) {
  const highPriorityPages = [
    'https://hnmdevs.com',
    'https://hnmdevs.com/about',
    'https://hnmdevs.com/roadmaps',
    'https://hnmdevs.com/best-practices',
    'https://hnmdevs.com/guides',
    'https://hnmdevs.com/videos',
    ...(await getRoadmapIds()).flatMap((id) => [
      `https://hnmdevs.com/${id}`,
      `https://hnmdevs.com/${id}/topics`,
    ]),
    ...(await getBestPracticesIds()).map(
      (id) => `https://hnmdevs.com/best-practices/${id}`
    ),
  ];

  // Roadmaps and other high priority pages
  for (let pageUrl of highPriorityPages) {
    if (item.url === pageUrl) {
      return {
        ...item,
        // @ts-ignore
        changefreq: 'monthly',
        priority: 1,
      };
    }
  }

  // Guide and video pages
  if (
    item.url.startsWith('https://hnmdevs.com/guides') ||
    item.url.startsWith('https://hnmdevs.com/videos')
  ) {
    return {
      ...item,
      // @ts-ignore
      changefreq: 'monthly',
      priority: 0.9,
    };
  }

  return undefined;
}
