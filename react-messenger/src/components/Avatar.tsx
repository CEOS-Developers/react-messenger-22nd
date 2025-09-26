export default function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-6 w-6 rounded-xl object-cover shadow-sm"
    />
  );
}
