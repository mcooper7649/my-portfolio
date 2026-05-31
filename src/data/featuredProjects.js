// Curated, hand-maintained featured projects. These are real, current pieces
// of work. Links only ever point to things that actually resolve: a live URL,
// or the GitHub profile (https://github.com/mcooper7649). No fabricated repo
// links or dead live URLs.

const featuredProjects = [
  {
    id: 'homelab',
    emoji: '🏠',
    title: 'Self-Hosted Homelab',
    blurb:
      'A Docker-based homelab running a stack of containerized services behind a reverse proxy, with persistent PostgreSQL storage and automated backups. The control plane for everything else here.',
    tags: ['Docker', 'Linux', 'PostgreSQL', 'Reverse Proxy', 'Self-Hosting'],
    link: 'https://github.com/mcooper7649',
    linkLabel: 'GitHub',
  },
  {
    id: 'n8n-suite',
    emoji: '🔁',
    title: 'n8n Automation Suite',
    blurb:
      'Self-hosted n8n workflows that stitch my services together — syncing data between APIs, pushing notifications, and automating the repetitive glue work I used to do by hand.',
    tags: ['n8n', 'Automation', 'REST APIs', 'Webhooks', 'Node.js'],
    link: 'https://github.com/mcooper7649',
    linkLabel: 'GitHub',
  },
  {
    id: 'home-assistant',
    emoji: '💡',
    title: 'Home Assistant Smart Home',
    blurb:
      'A Home Assistant setup tying together smart-home devices with custom automations and dashboards, integrated with the rest of the homelab for local-first control.',
    tags: ['Home Assistant', 'YAML', 'Automation', 'MQTT', 'IoT'],
    link: 'https://github.com/mcooper7649',
    linkLabel: 'GitHub',
  },
  {
    id: 'code-dojo-blog',
    emoji: '✍️',
    title: 'Code Dojo Blog',
    blurb:
      'A Next.js markdown blog with gray-matter frontmatter, a generated sitemap, and per-post OpenGraph/Twitter SEO. Where I write up what actually works across the web stack and the homelab.',
    tags: ['Next.js', 'React', 'Markdown', 'SEO', 'Vercel'],
    link: 'https://blog.mycodedojo.com',
    linkLabel: 'Live Site',
  },
  {
    id: 'portfolio',
    emoji: '🥷',
    title: 'My Code Dojo Portfolio',
    blurb:
      'This site — a React single-page portfolio with a light/dark theme, a CMS-backed projects feed, and a contact form. Continuously refreshed as the work evolves.',
    tags: ['React', 'Tailwind', 'Sanity CMS', 'Vercel'],
    link: 'https://www.mycodedojo.com',
    linkLabel: 'Live Site',
  },
];

export default featuredProjects;
