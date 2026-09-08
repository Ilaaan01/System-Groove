import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { buildBreadcrumbSchema, type BreadcrumbItem } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(items)} />
      <nav className="breadcrumbs shell" aria-label="Breadcrumb">
        <ol>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path}>
                {isLast ? <span aria-current="page">{item.name}</span> : <Link href={item.path}>{item.name}</Link>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
