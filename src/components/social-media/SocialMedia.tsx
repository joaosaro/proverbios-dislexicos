import React, { HTMLAttributes, ImgHTMLAttributes } from "react";
import "./social-media.scss";

export interface Props extends HTMLAttributes<HTMLElement> {
  href: string;
  src: ImgHTMLAttributes<HTMLImageElement>["src"];
  alt: ImgHTMLAttributes<HTMLImageElement>["alt"];
}

const SocialMedia: React.FC<Props> = ({
  children,
  href,
  src,
  alt,
  ...props
}) => {
  return (
    <a
      className="social-media"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      {...props}
    >
      <img src={src} alt={alt} height={32} width={32} />
    </a>
  );
};

export default SocialMedia;
