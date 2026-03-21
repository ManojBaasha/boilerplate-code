import { social } from "@/resources";
import { iconLibrary } from "@/resources/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-6 py-8">
      <div className="max-w-[768px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-4">
        <p className="text-sm text-[var(--muted)] text-center md:text-left">
          <span>© {currentYear}</span>
          <span className="mx-1">/</span>
          <span className="text-[var(--foreground)]">MergeWorthy-AI</span>
          <span className="mx-1">/</span>
          <span>Built at Vercel x DeepMind Hackathon</span>
        </p>
        <div className="flex gap-4">
          {social.map((item) => {
            const Icon = iconLibrary[item.icon];
            if (!Icon || !item.link) return null;
            return (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-[var(--surface)] transition-colors text-[var(--muted)] hover:text-[var(--foreground)]"
                title={item.name}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
