import Image from "next/image";
import { GalleryImage } from "@/lib/types";

type GalleryGridProps = {
  images: GalleryImage[];
};

const galleryTags = ["Musculacion", "Cardio", "Funcional", "Ambiente", "Comunidad"];

export function GalleryGrid({ images }: GalleryGridProps) {
  const selectedImages = images.slice(1, 6);

  return (
    <section id="galeria" className="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">Galeria</span>
          <h2 id="gallery-title">Espacio real, energia real</h2>
          <p>Un recorrido visual del ambiente, el equipamiento y el ritmo diario de entrenamiento.</p>
        </div>
        <div className="gallery-layout">
          {selectedImages.map((image, index) => (
            <figure key={image.id} className={`gallery-card gallery-card-${index + 1}`}>
              <Image
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                sizes="(max-width: 980px) 100vw, 25vw"
              />
              <figcaption>
                <span>{galleryTags[index] ?? "Entrenamiento"}</span>
                <strong>{image.alt}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

