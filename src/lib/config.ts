export const siteConfig = {
  title: 'HNM Devs - Roadmaps to becoming a modern developer',
  description:
    'Community driven roadmaps, articles and guides for developers to grow in their career.',
  url: {
    twitter: 'https://twitter.com/imoogleai',
    youtube: 'https://youtube.com/imoogleai?sub_confirmation=1',
    repo: 'https://github.com/jonesded/developer-roadmap',
    contribute:
      'https://github.com/jonesded/developer-roadmap/tree/master/contributing.md',
    issue: 'https://github.com/jonesded/developer-roadmap/issues/new',
  },
  keywords: [
    'roadmap',
    'hnm devs',
    'developer roadmaps',
    'developer roadmap',
    'how to become a developer',
    ...[
      'frontend developer',
      'backend developer',
      'full stack developer',
      'sre',
      'devops',
      'devops engineer',
      'android developer',
      'database administrator',
      'blockchain developer',
      'qa',
      'qa engineer',
      'software architect',
      'asp.net core developer',
      'react developer',
      'angular developer',
      'vue developer',
      'node.js developer',
      'javascript developer',
      'python developer',
      'go developer',
      'java developer',
      'design system',
      'software design',
      'graphql',
      'ux design',
      'terraform developer',
      'sql developer',
      'spring boot developer',
      'php developer',
      'ios developer',
      'game developer',
      'flutter developer',
      'data analyst',
      'aws developer',
      'cyber security specialist',
      'ai developer',
      'ai engineer',
      'ai data scientist'
    ].flatMap((roadmapKeyword) => [
      `${roadmapKeyword} roadmap`,
      `${roadmapKeyword} roadmap 2024`,
      `${roadmapKeyword} roadmap 2025`,
    ]),
  ],
};
