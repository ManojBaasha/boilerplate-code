import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <p className="text-7xl font-bold mb-4">404</p>
      <h1 className="text-2xl font-semibold mb-6">Page Not Found</h1>
      <p className="text-[var(--muted)] mb-8">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-6 py-3 border border-[var(--border)] rounded-lg hover:bg-[var(--surface)] transition-colors"
      >
        Back to Home
      </Link>
    </section>
  );
}
