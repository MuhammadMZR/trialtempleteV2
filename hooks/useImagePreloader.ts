import { useState, useEffect } from "react";

interface UseImagePreloaderProps {
  path: string;
  frameCount: number;
  extension?: string;
  prefix?: string;
}

export function useImagePreloader({
  path,
  frameCount,
  extension = "jpg",
  prefix = "",
}: UseImagePreloaderProps) {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isCancelled = false;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const loadImages = async () => {
      // Create an array of promises so they load in parallel instead of sequentially
      const promises = Array.from({ length: frameCount }).map((_, idx) => {
        const i = idx + 1;
        return new Promise<void>((resolve) => {
          const img = new Image();
          const padded4Index = i.toString().padStart(4, "0");

          img.onload = () => {
            loadedCount++;
            loadedImages[idx] = img; // maintain order
            if (!isCancelled) setProgress(Math.round((loadedCount / frameCount) * 100));
            resolve();
          };

          img.onerror = () => {
            const fallbackImg = new Image();
            fallbackImg.onload = () => {
              loadedCount++;
              loadedImages[idx] = fallbackImg;
              if (!isCancelled) setProgress(Math.round((loadedCount / frameCount) * 100));
              resolve();
            };
            fallbackImg.onerror = () => {
              resolve(); // skip if all fail
            };
            fallbackImg.src = `${path}/${i}.${extension}`;
          };
          img.src = `${path}/${prefix}${padded4Index}.${extension}`;
        });
      });

      await Promise.all(promises);

      if (!isCancelled) {
        // filter out undefined in case of failures
        setImages(loadedImages.filter(Boolean));
        setLoaded(true);
      }
    };

    loadImages();

    return () => {
      isCancelled = true;
    };
  }, [path, frameCount, extension, prefix]);

  return { images, loaded, progress };
}
