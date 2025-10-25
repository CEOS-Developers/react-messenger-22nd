// src/components/Icon.tsx

// 상대 글롭: "../icons/**/*.svg"
const files = import.meta.glob<{ default: string }>('../icons/**/*.svg', { eager: true, import: 'default' });

// 요청/파일명을 안전 키로 변환
const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9.\-]/g, '')
    .replace(/-+/g, '-');

// 파일명(.svg 제거) → URL
const registry: Record<string, string> = {};
for (const fullPath in files) {
  const url = files[fullPath] as unknown as string;
  const file = fullPath.split('/').pop()!; // e.g. "add-user.svg"
  const key = slug(file.replace(/\.svg$/i, '')); // e.g. "add-user"
  registry[key] = url;
}

export function Icon({ name, className, alt }: { name: string; className?: string; alt?: string }) {
  const src = registry[slug(name)];
  if (!src)
    return (
      <span className={className} aria-hidden>
        □
      </span>
    );
  return <img src={src} alt={alt ?? name} className={className} />;
}
