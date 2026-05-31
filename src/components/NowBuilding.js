import React from 'react';

// Replaces the old single hard-coded TikTok embed on the home page with a
// current, accurate snapshot of what I'm actively working on. Self-contained
// (no third-party embed script), so it's fast and never breaks on load.

const items = [
  {
    emoji: '🐳',
    title: 'Expanding the homelab',
    body: 'Adding services to the Docker stack, tightening up reverse-proxy routing, and keeping PostgreSQL backups boringly reliable.',
  },
  {
    emoji: '🔁',
    title: 'Automating with n8n',
    body: 'Building self-hosted n8n workflows that connect my APIs and home services so the repetitive glue work runs itself.',
  },
  {
    emoji: '🤖',
    title: 'Wiring in practical AI',
    body: 'Experimenting with AI tooling inside those automations — summaries, triage, and assistants for the things I actually use daily.',
  },
  {
    emoji: '📱',
    title: 'Shipping Android in Kotlin',
    body: 'Building native Android features in Kotlin and connecting them back to the same self-hosted REST APIs.',
  },
];

export default function NowBuilding() {
  return (
    <section className="">
      <hr className="divider line glow my-24" />
      <h2 className="section-title px-3 text-white lg:text-4xl uppercase">
        Currently Building
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 mt-8">
        {items.map((item) => (
          <article
            key={item.title}
            className="bg-black bg-opacity-50 rounded-lg shadow-xl p-6 text-left"
          >
            <div className="text-4xl mb-3">{item.emoji}</div>
            <h3 className="text-blue-200 text-lg font-bold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-100 text-sm leading-relaxed">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
