import { TokenAPISimple } from "../data/marketplace.pb";
import {} from "../utils/sol";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import useMarketplaceContract from "../hooks/useMarketplaceContract";
import { BigNumber, ethers } from "ethers";
import { useContract, useSigner } from "wagmi";

export type ItemShowField = "lastPrice" | "offerPrice";

export function Image(props: {
  src: string;
  alt?: string;
  resize: "contain" | "cover";
  rounded?: boolean;
}) {
  const rounded = props.rounded ? " rounded-2xl" : "";

  //https://assets.alpha.art/opt/c/d/cd5215107005896ce88e2b0cc3ce3b9b9340250b/original.png
  if (props.src.startsWith("ipfs://")) {
    const pp = props.src.split("/");
    const cid = pp.slice(0, pp.length)[2];
    const filename = pp.slice(0, pp.length)[3]
      ? "/" + pp.slice(0, pp.length)[3]
      : "";
    const hostname = "https://ipfs.io/ipfs/";
    const src = hostname + cid + filename;
    // console.log(src);
    const parts = pp.slice(0, pp.length - 1);
    return (
      <img
        loading="lazy"
        src={src}
        // src={[...parts, "340.png"].join("/")}
        // srcSet={[
        //   [...parts, "340.png"].join("/"),
        //   [...parts, "680.png 2x"].join("/"),
        // ].join(", ")}
        alt={props.alt}
        className={
          props.resize === "contain"
            ? `w-full h-full object-center object-contain group-hover:opacity-60${rounded}`
            : `w-full h-full object-center object-cover group-hover:opacity-60${rounded}`
        }
      />
    );
  }
  return (
    <img
      loading="lazy"
      src={props.src}
      alt={props.alt}
      className={
        props.resize === "contain"
          ? `w-full h-full object-center object-contain group-hover:opacity-60${rounded}`
          : `w-full h-full object-center object-cover group-hover:opacity-60${rounded}`
      }
    />
  );
}

export function LargeImage(props: { src: string; alt?: string }) {
  //https://assets.alpha.art/opt/c/d/cd5215107005896ce88e2b0cc3ce3b9b9340250b/original.png
  if (props.src.startsWith("https://assets.alpha.art/opt/")) {
    const pp = props.src.split("/");
    const parts = pp.slice(0, pp.length - 1);
    return (
      <picture>
        <source
          type="image/webp"
          srcSet={[
            [...parts, "680.webp"].join("/"),
            [...parts, "960.webp 2x"].join("/"),
          ].join(", ")}
        />
        <img
          loading="lazy"
          src={[...parts, "680.png"].join("/")}
          srcSet={[
            [...parts, "680.png"].join("/"),
            [...parts, "960.png 2x"].join("/"),
          ].join(", ")}
          alt={props.alt}
          className="w-full h-full object-center object-cover group-hover:opacity-60 "
        />
      </picture>
    );
  }
  return (
    <img
      loading="lazy"
      src={props.src}
      alt={props.alt}
      className="w-full h-full object-center object-cover group-hover:opacity-60 "
    />
  );
}

export default function SaleToken(
  props: TokenAPISimple & {
    showField?: ItemShowField;
    size?: "twitter" | "rect";
    resize?: "contain" | "cover";
    aProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  }
) {
  const { data: signer } = useSigner();

  const { buySale } = useMarketplaceContract();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleBuy = async (saleId: string, price: string) => {
    if (!signer) return;
    // console.log(">>>>.", ethers.utils.parseEther(price));
    setOpenModal(false);
    await buySale(saleId, price);
  };

  const { size = "rect", resize = "cover" } = props;
  let rightPricing = null;
  if (props.listedForSale) {
    const price = <h3 className="text-base"> {props.price} Matic</h3>;
    let second = null;
    if (props.showField === "offerPrice" && (props.offerPrice ?? -1) > 0) {
      second = (
        <div className="flex items-center">
          <p className="text-xs text-right font-light mr-1">Max Offer</p>
          <h3 className="text-sm">{props.offerPrice} Matic</h3>
        </div>
      );
    } else if (props.showField === "lastPrice" && (props.last ?? -1) > 0) {
      second = (
        <div className="flex items-center">
          <p className="text-xs text-right font-light  mr-1">Last</p>
          <h3 className="text-sm">{props.last} Matic</h3>
        </div>
      );
    }
    rightPricing = (
      <div className="flex flex-col items-end">{[price, second]}</div>
    );
  } else if (props.showField === "offerPrice" && (props.offerPrice ?? -1) > 0) {
    rightPricing = (
      <div className="flex flex-col items-end">
        <p className="text-xs text-right font-light">Max Offer</p>
        <h3 className="text-xs">{props.offerPrice} Matic</h3>
      </div>
    );
  } else if (props.last) {
    rightPricing = (
      <div className="flex flex-col items-end">
        <p className="text-xs text-right font-light">Last</p>
        <h3 className="text-sm">{props.last} Matic</h3>
      </div>
    );
  }
  const ap = props.aProps ?? {};
  return (
    <div className="group">
      {/* // <Link to={`/t/${props.mintId}`} className="group" {...ap}> */}
      <div
        className={
          size === "twitter"
            ? "w-full aspect-w-3 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-9 xl:aspect-h-3"
            : "w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-8 xl:aspect-h-8"
        }
      >
        {size === "rect" ? (
          <Image src={props.image!} alt={props.title} resize={resize} />
        ) : (
          <LargeImage src={props.image!} alt={props.title} />
        )}
      </div>
      <div className="flex justify-between pl-2 pr-2 mt-4">
        <h3 className="flex-1 mr-1 text-base">{props.title}</h3>
        {rightPricing}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Buy
        </button>
      </div>

      {openModal ? (
        <div className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster background: rgba(0,0,0,.7)">
          <div className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6 dark:bg-zinc-800  dark:purple-border-hover gray-border-hover">
              {/* <!--Title--> */}
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold ">Are you sure?</p>
                <div
                  className="modal-close cursor-pointer z-50"
                  onClick={() => setOpenModal(false)}
                >
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                  </svg>
                </div>
              </div>
              {/* <!--Footer--> */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={() =>
                    handleBuy(
                      props.saleId ?? "1",
                      props.price?.toString() ?? ""
                    )
                  }
                  className="focus:outline-none px-4 w-[80px] bg-teal-500 p-3 mr-3 rounded-lg text-white hover:bg-teal-400"
                >
                  Buy
                </button>

                <button
                  onClick={() => setOpenModal(false)}
                  className="focus:outline-none modal-close w-[80px] px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* </Link> */}
    </div>
  );
}
