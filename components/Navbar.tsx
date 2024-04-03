/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

const Navbar = () => {
  const icons = [
    { src: "/assets/icons/search.svg", alt: "search" },
    { src: "/assets/icons/black-heart.svg", alt: "heart" },
    { src: "/assets/icons/user.svg", alt: "user" },
  ];
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />
          <p>
            Price<span className="text-primary">Wise</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {icons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              height={28}
              width={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
