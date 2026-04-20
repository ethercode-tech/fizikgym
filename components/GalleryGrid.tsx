import Image from "next/image";
import { GalleryImage } from "@/lib/types";

type GalleryGridProps = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <section id="galeria" className="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <h2 id="gallery-title">Galeria</h2>
        <div className="gallery-grid">
          {images.slice(1).map((image) => (
            <figure key={image.id} className="gallery-item">
              <Image
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
