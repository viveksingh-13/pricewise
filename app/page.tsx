"use client";

import Herocorusal from "@/components/Herocorusal";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="px-6 md:px-20 py-24 ">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image
                src="/assets/icons/arrow-right.svg"
                height={16}
                width={16}
                alt="logo"
              />
            </p>
            <h1 className="head-text">
              Unleash The Power of{" "}
              <span className="text-primary">PriceWise</span>
            </h1>
            <p className="mt-6">
              Powerfull,self-serve product and growth analytics to help you
              covert,engage and retain more.
            </p>
            <Searchbar />
          </div>
          <Herocorusal />
        </div>
      </section>
      <section className="trending-section">
        <h2>Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["apple", "samsing", "redmi"].map((product) => (
            <div key={product}>{product}</div>
          ))}
        </div>
      </section>
    </>
  );
}
