import { useState, useEffect } from "react";
import styles from "../styles";
import LookupCard from "./LookupCard";
import domainResolverAbi from "../abi/krakenDomainResolver.json";
import { ethers } from "ethers";
import krakenDomainAbi from "../abi/krakenDomainABI.json";
import { useAccount } from "wagmi";
import { config } from "@/abi";
import SearchSkeleton from "./skeleton/SearchSkeleton";
import "react-loading-skeleton/dist/skeleton.css";

// const domain = "tiki";
// const tld = ".kraken";
// const factoryAddress = "  0x19123c5AA973a9F27c07655fcda9456A6b554CAc";

const Lookup = () => {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [tokenId, setTokenId] = useState("");

  //   const formattedName = userInput.replace(/\s+/g, "").toLowerCase().trim();
  //   console.log(formattedName);
  //   const splitName = formattedName.split(".");
  //   // setLoading(true);
  //   console.log(splitName);
  //   const domain = splitName[0];
  //   const tld = "." + splitName[1];

  const getData = async (e) => {
    e.preventDefault();

    const formattedName = userInput.replace(/\s+/g, "").toLowerCase().trim();
    const splitName = formattedName.split(".");
    // setLoading(true);
    console.log(splitName);
    const domain = splitName[0];
    const tld = "." + splitName[1];
    console.log(domain, tld);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const domainResolver = new ethers.Contract(
      config.domainResolverAddress,
      domainResolverAbi,
      signer
    );

    const domainHolder = await domainResolver.getDomainHolder(domain, tld);
    console.log("Domain Holder Address", domainHolder);

    const tldAddress = await domainResolver.getTldAddress(tld);
    console.log("Domain Tld Address:", tldAddress);

    const address = await getFactory(tldAddress, domain);
  };

  useEffect(() => {
    // getData();
    // getFactory();
  }, []);

  const getFactory = async (tld, domain) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const domainFactory = new ethers.Contract(tld, krakenDomainAbi, signer);

    const domainTokenId = await domainFactory.getDomainTokenId(domain);

    setTokenId(domainTokenId._hex);
  };

  //   console.log(userInput);

  return (
    <>
      <div className="ml-[300px] text-white  mt-10">
        <h1 className="text-3xl">Check Domain Details</h1>
        <p className="mt-3">
          You can lookup details of any domain created using out platform
        </p>
      </div>

      <div className="mt-6 ml-[300px]">
        <div
          className={`${styles.innerWidth} mx-auto flex justify-start items-center gap-3`}
        >
          <form className="w-1/2">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none shadow-2xl">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-800 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-gray-800 text-lg border border-gray-500 rounded-lg placeholder-gray-900 bg-secondary-white"
                placeholder="Search Domains..."
                required
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                onClick={getData}
              >
                Check
              </button>
            </div>
          </form>
        </div>

        <p className="text-xl text-white mt-6">Results:</p>
      </div>
      <div className="ml-[50px]">
        <div className="ml-[250px] mt-2">{loading && <SearchSkeleton />}</div>

        {!loading && <LookupCard />}
      </div>
    </>
  );
};

export default Lookup;
