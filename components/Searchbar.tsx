import { scrapeAndStoreAndProduct } from "@/lib/actions";
import React, { FormEvent, useState } from "react";

const isValidAmazonLink = (url: string) => {
  try {
    const newUrl = new URL(url);
    const hostName = newUrl.hostname;
    console.log("hosstName", hostName.includes("amazon.in"));
    if (hostName.includes("amazon.in") || hostName.includes("amazon")) {
      return true;
    }
  } catch {
    return false;
  }
};

const Searchbar = () => {
  const [searchPrompt, setSearchPropmpt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonLink(searchPrompt);
    if (!isValidLink) return alert("invalid LOnk");

    try {
      setLoading(true);
      console.log(
        process.env.NEXT_PUBLIC_DATA_USERNAME,
        "prffffffocess.env.DATA_USERNAME"
      );

      const response = await scrapeAndStoreAndProduct(searchPrompt);
    } catch (error) {
      console.log("error");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mt-12">
      <input
        type="text"
        placeholder="Enter Product  link"
        className="searchbar-input"
        value={searchPrompt}
        onChange={(e: any) => setSearchPropmpt(e.target.value)}
      />
      <button
        disabled={searchPrompt === ""}
        type="submit"
        className="searchbar-btn"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
