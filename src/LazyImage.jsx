import { useEffect, useRef, useState } from "react";

let defaultLogo =
  "https://images.unsplash.com/photo-1506184515391-333e5afa6927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60";

let rootImageIntersectionObserver = null;

export const init = () => {
  if (rootImageIntersectionObserver) return rootImageIntersectionObserver;
  rootImageIntersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        const $img = item.target;
        $img.src = $img.dataset.src ?? defaultLogo;
        rootImageIntersectionObserver.unobserve($img);
      }
    });
  });

  return rootImageIntersectionObserver;
};

export const destroy = () => {
  rootImageIntersectionObserver.disconnect();
  rootImageIntersectionObserver = null;
};

const LazyImage = ({ src, defaultSrc, lazy = true, ...props }) => {
  const realDefaultSrc = defaultSrc ?? defaultLogo;
  const realSrc = src || realDefaultSrc;
  const $img = useRef(null);
  const [srcUrl, setSrcUrl] = useState(lazy ? realDefaultSrc : realSrc);
  const handleImageError = () => {
    setSrcUrl(realDefaultSrc);
  };

  useEffect(() => {
    if ($img.current && lazy) {
      rootImageIntersectionObserver.observe($img.current);
      return () => {
        rootImageIntersectionObserver.unobserve($img.current);
      };
    }
  }, [$img, lazy]);

  return (
    <img
      ref={$img}
      onError={handleImageError}
      data-src={lazy ? realSrc : null}
      src={srcUrl}
      {...props}
    />
  );
};

export default LazyImage;
