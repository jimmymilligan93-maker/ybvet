import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export default function SiteBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm blog-meta-text">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 list-none p-0 m-0">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden className="opacity-50">/</span> : null}
            {item.href ? (
              <Link href={item.href} className="underline-offset-2 hover:underline" style={{ color: "var(--primary)" }}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium" style={{ color: "var(--text)" }}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
