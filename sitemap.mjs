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
    'https://doc.imoogleai.xyz/404',
    'https://doc.imoogleai.xyz/terms',
    'https://doc.imoogleai.xyz/privacy',
    'https://doc.imoogleai.xyz/pdfs',
    'https://doc.imoogleai.xyz/g',
  ].includes(pageUrl);
}

export async function serializeSitemap(item) {
  const highPriorityPages = [
    'https://doc.imoogleai.xyz',
    'https://doc.imoogleai.xyz/about',
    'https://doc.imoogleai.xyz/roadmaps',
    'https://doc.imoogleai.xyz/best-practices',
    'https://doc.imoogleai.xyz/guides',
    'https://doc.imoogleai.xyz/videos',
    ...(await getRoadmapIds()).flatMap((id) => [
      `https://doc.imoogleai.xyz/${id}`,
      `https://doc.imoogleai.xyz/${id}/topics`,
    ]),
    ...(await getBestPracticesIds()).map(
      (id) => `https://doc.imoogleai.xyz/best-practices/${id}`
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
    item.url.startsWith('https://doc.imoogleai.xyz/guides') ||
    item.url.startsWith('https://doc.imoogleai.xyz/videos')
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
