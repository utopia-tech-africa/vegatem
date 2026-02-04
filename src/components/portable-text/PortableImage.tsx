"use client";

import Image from "next/image";
import { useState } from "react";
import { LightboxImage } from "../lightbox-image/lightbox-image";
import { urlFor } from "../../sanity/lib/image";

type PortableImageProps = {
  value: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
};

export const PortableImage = ({ value }: PortableImageProps) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  if (!value?.asset) return null;

  const imageUrl = urlFor(value).url();

  return (
    <>
      {/* Inline image */}
      <Image
        src={imageUrl}
        alt={value?.alt || "Blog image"}
        width={1200}
        height={700}
        onClick={() => setLightboxImage(imageUrl)}
        className="cursor-zoom-in rounded-md border border-border my-6"
      />

      {/* Lightbox */}
      <LightboxImage
        imageUrl={lightboxImage}
        setLightboxImage={() => setLightboxImage(null)}
      />
    </>
  );
};
