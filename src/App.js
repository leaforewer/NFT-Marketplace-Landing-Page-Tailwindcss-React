import * as React from "react";
import { useState } from "react";

import "./App.css";
import logo from "./images/Sygnet.png";

import Frame1 from "./images/Frame.svg";
import Frame2 from "./images/Frame2.svg";

import Sponsor1 from "./images/Ritter-Sport.png";
import Sponsor2 from "./images/Nike.png";
import Sponsor3 from "./images/Adidas.png";
import Sponsor4 from "./images/New-Holland.png";

import Item1 from "./images/Item1.png";
import Item2 from "./images/Item2.png";
import Item3 from "./images/Item3.png";
import Item4 from "./images/Item4.png";
import Item5 from "./images/Item5.png";

import Avatar1 from "./images/01.png";
import Avatar2 from "./images/02.png";
import Avatar3 from "./images/03.png";
import Avatar4 from "./images/04.png";

import CardItem1 from "./images/CardItem-1.png";
import CardItem2 from "./images/CardItem-2.png";
import CardItem3 from "./images/CardItem-3.png";
import CardItem4 from "./images/CardItem-4.png";

import CatCardImage1 from "./images/CatCardImage-1.png";
import CatCardImage2 from "./images/CatCardImage-2.png";
import CatCardImage3 from "./images/CatCardImage-3.png";
import CatCardImage4 from "./images/CatCardImage-4.png";
import CatCardImage5 from "./images/CatCardImage-5.png";
import CatCardImage6 from "./images/CatCardImage-6.png";

import AvatarCard1 from "./images/CardInCardAvatar-1.png";
import AvatarCard2 from "./images/CardInCardAvatar-2.png";
import AvatarCard3 from "./images/CardInCardAvatar-3.png";
import AvatarCard4 from "./images/CardInCardAvatar-4.png";
import AvatarCard5 from "./images/CardInCardAvatar-5.png";

import NftItem1 from "./images/nft-item-1.png";
import NftItem2 from "./images/nft-item-2.png";
import NftItem3 from "./images/nft-item-3.png";
import NftItem4 from "./images/nft-item-4.png";
import NftItem5 from "./images/nft-item-5.png";
import NftItem6 from "./images/nft-item-6.png";
import NftItem7 from "./images/nft-item-7.png";
import NftItem8 from "./images/nft-item-8.png";
import NftItem9 from "./images/nft-item-9.png";
import NftItem10 from "./images/nft-item-10.png";
import NftItem11 from "./images/nft-item-11.png";
import NftItem12 from "./images/nft-item-12.png";
import NftItem13 from "./images/nft-item-13.png";
import NftItem14 from "./images/nft-item-14.png";
import NftItem15 from "./images/nft-item-15.png";
import NftItem16 from "./images/nft-item-16.png";
import NftItem17 from "./images/nft-item-17.png";
import NftItem18 from "./images/nft-item-18.png";

import RightColorPalette from "./images/Right-ColorPalette.png";
import LeftImage from "./images/Left-Image.png";

import SilverHand from "./images/Silver-Hand.png";

import Icon1 from "./images/Icon-1.png";
import Icon2 from "./images/Icon-2.png";

import UserIcon from "./images/User-Icon.png";
import ArtworkIcon from "./images/Artworks-Icon.png";
import ArtistIcon from "./images/Artists-Icon.png";
import WalletIcon from "./images/Wallet-Icon.png";

function App() {
  const scrl = React.useRef(null);
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
  };
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="App">
      <nav className="py-6 px-8 w-full absolute top-0 left-0 overflow-x-hidden">
        <div className="flex flex-row items-center justify-between lg:justify-center">
          <div id="logo" className="basis-3/12 flex justify-start items-center">
            <a href="#home">
              <img className="w-6 h-6" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="lg:hidden flex">
            {" "}
            <button onClick={handleToggle}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div
            id="nav-links"
            className="basis-6/12 mx-auto  transition-ease text-xs font-semibold font-Sora hidden lg:flex justify-center items-center gap-8"
          >
            <a href="#Autctions" className="text-slate-400 hover:text-white">
              Auctions
            </a>
            <a href="#Roadmap" className="text-slate-400 hover:text-white">
              Roadmap
            </a>
            <a href="#Discover" className="text-slate-400 hover:text-white">
              Discover
            </a>
            <a href="#Community" className="text-slate-400 hover:text-white">
              Community
            </a>
          </div>
          <div className="nav-contact basis-3/12 hidden lg:flex justify-end gap-3 items-center text-xs font-semibold font-Sora">
            <a
              className="text-slate-400 px-4 py-3 border rounded-lg border-slate-700 bg-transparent ease-in duration-100 hover:bg-gray-700 hover:text-white"
              href="#contact"
            >
              Contact
            </a>
            <a
              className="text-white px-4 py-3 rounded-lg bg-gradient-contact ease-in duration-200 hover:bg-gradient-to-r from-indigo-700 to-indigo-800"
              href="#myaccount"
            >
              My account
            </a>
          </div>
          <div role="dialog" aria-modal={isActive ? "false" : "true"}>
            <div
              focus="true"
              class="fixed inset-0 z-40 overflow-y-auto bg-midnight px-6 py-6 lg:hidden"
            >
              <div class="flex h-9 items-center justify-between">
                <div class="flex">
                  <a href="#home" class="-m-1.5 p-1.5">
                    <span class="sr-only">NFT Marketplace</span>
                    <img class="h-8" src={logo} alt="" />
                  </a>
                </div>
                <div class="flex">
                  <button onClick={handleToggle}
                    type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                  >
                    <span class="sr-only">Close menu</span>

                    <svg
                      class="h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-700">
                  <div class="space-y-2 py-6">
                    <a
                      href="#Auctions"
                      class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-400/10"
                    >
                      Auctions
                    </a>

                    <a
                      href="#Roadmap"
                      class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-400/10"
                    >
                      Roadmap
                    </a>

                    <a
                      href="#Discover"
                      class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-400/10"
                    >
                      Discover
                    </a>

                    <a
                      href="#Contact"
                      class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-400/10"
                    >
                      Contact
                    </a>
                  </div>
                  <div class="py-6">
                    <a
                      className="text-white px-4 py-3 rounded-lg bg-gradient-contact ease-in duration-200 hover:bg-gradient-to-r from-indigo-700 to-indigo-800"
                      href="#myaccount"
                    >
                      My account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="h-screen w-full flex justify-center">
        <div className="container pt-24 mt-20">
          <div className="hero-section-group text-white p-5">
            <div
              
              className="text-slate-400 text-xs font-thin text-center mb-5 font-Inter tracking-widest uppercase"
            >
              non fungible tokens
            </div>
            <h1 className="text-3xl sm:text-6xl lg:text-8xl grid justify-center font-bold leading-none tracking-wide">
              <span className="flex items-center">
                {" "}
                A new NFT
                <img
                  className="w-8 h-8 sm:w-10 sm:h-14 mt-3"
                  src={Frame1}
                  alt="frame1"
                />
              </span>

              <span className="ml-20 flex items-center">
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 mt-4 mr-2"
                  src={Frame2}
                  alt="frame2"
                />
                Experience
              </span>
            </h1>
            <div className="pt-8 text-md md:text-lg text-center text-slate-500">
              Discover, collect and sell
            </div>
            <div className="flex justify-center pt-10">
              <div
                id="search-wrapper"
                className="bg-white flex items-center py-4 px-4 rounded-lg"
              >
                <input
                  type="text"
                  placeholder="Items, collections and creators"
                  className="md:w-56 text-xs border border-transparent border-r-gray-300"
                />
                <select
                  defaultValue="Category"
                  className="text-black text-xs w-28 px-3 my-auto font-Sora"
                >
                  <option disabled value="Category">
                    Category
                  </option>
                  <option value="NFT">NFT</option>
                </select>
                <i className="bx bx-search bx-flip-horizontal text-indigo-800 font-bold text-2xl leading-4	md:ml-4 cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="sponsored-section flex justify-center items-center gap-8 sm:gap-20 mt-20">
            <div className="w-16">
              <img className="w-full" src={Sponsor1} alt="Ritter Sport" />
            </div>
            <div className="w-16">
              <img className="w-full" src={Sponsor2} alt="Ritter Sport" />
            </div>
            <div className="w-16">
              <img className="w-full" src={Sponsor3} alt="Ritter Sport" />
            </div>
            <div className="w-16">
              <img className="w-full" src={Sponsor4} alt="Ritter Sport" />
            </div>
          </div>
        </div>
      </main>
      <section id="card-carousel" className="relative">
        <h2 className="text-white text-center font-Sora text-3xl my-16">
          Latest live auctions
        </h2>
        <button
          id="button-carousel"
          onClick={() => slide(+500)}
          className="py-5 px-6 z-20 text-white rounded-full absolute backdrop-blur-sm right-12 md:right-40 top-1/2"
        >
          <i className="bx bx-chevron-right leading-2 text-4xl font-thin"></i>
        </button>
        <div
          style={{ width: "200%" }}
          ref={scrl}
          className="carousel-wrapper relative right-40 md:right-52 flex flex-row snap-x overflow-auto scroll-smooth gap-6"
        >
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item1} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              2:41 min left
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                35 people are bidding
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item2} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              2:41 min left
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                35 people are bidding
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item3} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              2:41 min left
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                35 people are bidding
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item4} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              2:41 min left
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                35 people are bidding
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item5} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              2:41 min left
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                35 people are bidding
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item1} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              2:41 min left
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                35 people are bidding
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item2} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              2:41 min left
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                35 people are bidding
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item3} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              2:41 min left
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                35 people are bidding
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item4} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              2:41 min left
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                35 people are bidding
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item1} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              2:41 min left
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                35 people are bidding
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item2} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              2:41 min left
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                35 people are bidding
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
          <div className="card-body border border-gray-800 rounded-xl snap-center p-3 w-60 min-w-62 md:min-w-72 flex flex-col justify-center">
            <img src={Item3} alt="Card Thumbnail" />
            <div className="flex flex-row justify-between mt-2">
              <p className="text-white text-sm font-Sora">
                Vulputate felis purus <br /> viverra morbi facilisi eget
              </p>
              <div
                className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black flex items-center h-5 px-2  py-2  text-xs"
                style={{ fontSize: "11px" }}
              >
                3.19 ETH
              </div>
            </div>
            <div className="text-white text-xs flex items-center mt-3 font-Sora">
              <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
              2:41 min left
            </div>
            <hr className="border-gray-800 my-4" />
            <div className="flex items-center">
              <div className="flex relative w-20">
                <img
                  className="w-8 h-8 rounded-full"
                  src={Avatar1}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-5 rounded-full"
                  src={Avatar2}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-10 rounded-full"
                  src={Avatar3}
                  alt="avatar profile"
                />
                <img
                  className="w-8 h-8 absolute left-14 rounded-full"
                  src={Avatar4}
                  alt="avatar profile"
                />
              </div>
              <div className="text-gray-600 text-xs ml-2 font-Inter">
                35 people are bidding
              </div>
              <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                120
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section2"
        className="flex justify-center border border-b-gray-800 border-transparent"
      >
        <div className="content-wrapper container my-28 2xl:px-20 ">
          <div className="flex flex-col lg:flex-row">
            <div className="basis-1/2 text-center lg:text-start text-white p-5 my-auto">
              <span className="text-slate-500 font-Inter tracking-widest text-sm uppercase font-semibold">
                Overline
              </span>
              <h2 className="font-Sora text-3xl lg:text-4xl  xl:text-6xl mt-3 mb-5">
                Sapien ipsum scelerisque <br className="lg:hidden block" />{" "}
                convallis fusce
              </h2>
              <p className="text-slate-500 font-Inter">
                Ut amet vulputate faucibus vitae semper eget auctor. Diam <br />
                tempor pulvinar ultricies dolor feugiat aliquam commodo.
              </p>
              <div className="flex justify-center lg:justify-start items-center gap-4 mt-8">
                <a
                  className="text-white px-4 py-3 rounded-lg font-Sora text-sm bg-gradient-contact ease-in duration-200 hover:bg-gradient-to-r from-indigo-700 to-indigo-800"
                  href="#getstarted"
                >
                  Get started
                </a>
                <a
                  className="text-slate-400 px-4 py-3 border font-Sora text-sm rounded-lg border-slate-700 bg-transparent ease-in duration-100 hover:bg-gray-700 hover:text-white"
                  href="#more"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="basis-1/2 flex justify-end">
              <div className="w-128">
                <img
                  className="w-full h-full object-cover"
                  src={RightColorPalette}
                  alt="Color Palettes"
                />
              </div>
            </div>
          </div>
          <div id="card-wrapper" className="mt-36 2xl:px-24 block">
            <div className="flex flex-col gap-16 px-3 lg:px-0 mx-auto justify-center w-full lg:flex-row lg:gap-4 lg:h-100 2xl:h-128">
              <div className="card-body border border-gray-900 overflow-hidden h-full relative rounded-xl snap-center p-6 basis-1/3  flex flex-col justify-center">
                <h4 className="text-2xl text-white mt-4 mb-6 font-Sora font-normal tracking-wider">
                  Check out the <br /> hottest Sale offers
                </h4>
                <button
                  id="button-carousel"
                  className="py-5 px-6 z-20 text-white rounded-full absolute backdrop-blur-sm right-8 top-72"
                >
                  <i className="bx bx-chevron-right leading-2 text-4xl font-thin"></i>
                </button>
                <div className="img-wrapper overflow-y-hidden relative w-full flex flex-row gap-5">
                  <div data-status="active" className="min-w-56 ">
                    <img
                      className="my-3 rounded-xl w-full h-80 object-cover"
                      src={Item4}
                      alt="Item Slider"
                    />{" "}
                    <p className="text-white text-sm font-Sora">
                      Fames habitasse risus
                      <br /> ultircies tortor sit
                    </p>
                    <div className="flex flex-row items-center justify-between mt-4">
                      <div className="text-white text-xs flex items-center  font-Sora">
                        <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                        22:59
                      </div>
                      <span
                        className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black text-center flex items-center h-5 py-3 px-3 text-xs"
                        style={{ fontSize: "11px" }}
                      >
                        2.55&#32;ETH
                      </span>
                    </div>
                    <hr className="border-gray-800 my-4" />
                    <div className="flex items-center justify-between">
                      <div className="text-gray-600 text-xs font-Inter">
                        101 people are bidding
                      </div>
                      <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                        <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                      </div>
                    </div>
                  </div>
                  <div data-status="inactive" className="min-w-56">
                    <img
                      className="my-3 rounded-xl w-full h-80 object-cover"
                      src={Item2}
                      alt="Item Slider"
                    />{" "}
                    <p className="text-white text-sm font-Sora">
                      Fames habitasse risus
                      <br /> ultircies tortor sit
                    </p>
                    <div className="flex flex-row items-center justify-between mt-4">
                      <div className="text-white text-xs flex items-center  font-Sora">
                        <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                        22:59
                      </div>
                      <span
                        className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black text-center flex items-center h-5 py-3 px-3 text-xs"
                        style={{ fontSize: "11px" }}
                      >
                        2.55&#32;ETH
                      </span>
                    </div>
                    <hr className="border-gray-800 my-4" />
                    <div className="flex items-center justify-between">
                      <div className="text-gray-600 text-xs font-Inter">
                        101 people are bidding
                      </div>
                      <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                        <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                      </div>
                    </div>
                  </div>
                  <div data-status="inactive" className="min-w-56">
                    <img
                      className="my-3 rounded-xl w-full h-80 object-cover"
                      src={Item5}
                      alt="Item Slider"
                    />{" "}
                    <p className="text-white text-sm font-Sora">
                      Fames habitasse risus
                      <br /> ultircies tortor sit
                    </p>
                    <div className="flex flex-row items-center justify-between mt-4">
                      <div className="text-white text-xs flex items-center  font-Sora">
                        <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                        22:59
                      </div>
                      <span
                        className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black text-center flex items-center h-5 py-3 px-3 text-xs"
                        style={{ fontSize: "11px" }}
                      >
                        2.55&#32;ETH
                      </span>
                    </div>
                    <hr className="border-gray-800 my-4" />
                    <div className="flex items-center justify-between">
                      <div className="text-gray-600 text-xs font-Inter">
                        101 people are bidding
                      </div>
                      <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                        <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-midnight relative z-20 text-slate-500 font-Sora text-sm mt-10 lg:mt-auto mb-5 py-3 rounded-xl font-bold cursor-pointer transition-all hover:scale-90 border-2 border-slate-700">
                  Show me more
                </button>
              </div>
              <div
                id="card-2"
                className="card-body relative rounded-xl border border-gray-900 bg-midnight snap-center p-3 basis-1/3 h-full min-h-full flex flex-col justify-center items-start gap-0"
              >
                <div className="relative sm:left-1/4 lg:left-2.5 -top-24 lg:-top-16 z-10 -mb-24">
                  <img
                    className="w-full h-full"
                    src={SilverHand}
                    alt="Silver Hand"
                  />
                </div>
                <div className="px-6 pt-4 w-full relative z-20 mt-auto">
                  <h4 className="text-xl md:text-2xl text-white font-Sora mb-3">
                    Get started creating
                    <br className="hidden lg:block" /> & selling your NFTs
                  </h4>
                  <p className="text-slate-500 text-sm font-Inter">
                    Nunc gravida faucibus netus feugiat
                    <br /> tellus, viverra massa feugiat. Mi est sit.
                  </p>
                  <button className="w-full text-white font-Sora text-sm  py-3.5 mt-8 mb-8 rounded-xl font-normal bg-gradient-contact hover:bg-gradient-to-r from-indigo-700 to-indigo-800 cursor-pointer transition-all hover:scale-90">
                    Get started
                  </button>
                </div>
              </div>
              <div className="card-body border border-gray-900 rounded-xl px-8 py-4 basis-1/3 h-full flex flex-col justify-center lg:justify-start">
                <h3 className="mt-6 text-white text-xl md:text-2xl font-Sora text-center lg:text-start">
                  Top NFT at a lower
                  <br className="hidden lg:block" /> price
                </h3>
                <div className="flex flex-row gap-4 mx-auto lg:mx-0 mt-7">
                  <img
                    className="aspect-square	rounded-2xl"
                    alt="Card item"
                    src={CardItem1}
                    width="110"
                    height="110"
                  />
                  <div className="flex justify-between flex-col">
                    <div className="text-wrapper-ellips">
                      <p className="text-white text-sm pb-1 w-full block basis-full">
                        Vulputate velit viverra volutpat volutpat tristique
                      </p>
                      <div className="flex flex-row justify-start lg:justify-between">
                        <div className="text-white text-xs hidden lg:flex items-center  font-Sora">
                          <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                          22:59
                        </div>
                        <span
                          className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-bold text-center flex items-center h-5 py-3 px-3 mb-2 whitespace-nowrap text-xs"
                          style={{ fontSize: "11px" }}
                        >
                          1.25&#32;ETH
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-between  pb-2">
                      <div className="text-gray-600 text-xs font-Inter">
                        101 people are bidding
                      </div>
                      <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                        <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mx-auto lg:mx-0 mt-4">
                  <img
                    className="aspect-square	rounded-2xl"
                    alt="Card item"
                    src={CardItem2}
                    width="110"
                    height="110"
                  />
                  <div className="flex justify-between flex-col">
                    <div className="text-wrapper-ellips">
                      <p className="text-white text-sm pb-1 w-full block basis-full">
                        Vulputate velit viverra volutpat volutpat tristique
                      </p>
                      <div className="flex flex-row justify-start lg:justify-between">
                        <div className="text-white text-xs hidden lg:flex items-center  font-Sora">
                          <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                          22:59
                        </div>
                        <span
                          className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-bold text-center flex items-center h-5 py-3 px-3 mb-2 whitespace-nowrap text-xs"
                          style={{ fontSize: "11px" }}
                        >
                          1.25&#32;ETH
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-between  pb-2">
                      <div className="text-gray-600 text-xs font-Inter">
                        101 people are bidding
                      </div>
                      <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                        <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mx-auto lg:mx-0 mt-4">
                  <img
                    className="aspect-square	rounded-2xl"
                    alt="Card item"
                    src={CardItem3}
                    width="110"
                    height="110"
                  />
                  <div className="flex justify-between flex-col">
                    <div className="text-wrapper-ellips">
                      <p className="text-white text-sm pb-1 w-full block basis-full">
                        Vulputate velit viverra volutpat volutpat tristique
                      </p>
                      <div className="flex flex-row justify-start lg:justify-between">
                        <div className="text-white text-xs hidden lg:flex items-center  font-Sora">
                          <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                          22:59
                        </div>
                        <span
                          className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-bold text-center flex items-center h-5 py-3 px-3 mb-2 whitespace-nowrap text-xs"
                          style={{ fontSize: "11px" }}
                        >
                          1.25&#32;ETH
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-between  pb-2">
                      <div className="text-gray-600 text-xs font-Inter">
                        101 people are bidding
                      </div>
                      <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                        <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mx-auto lg:mx-0 mt-4">
                  <img
                    className="aspect-square	rounded-2xl"
                    alt="Card item"
                    src={CardItem4}
                    width="110"
                    height="110"
                  />
                  <div className="flex justify-between flex-col">
                    <div className="text-wrapper-ellips">
                      <p className="text-white text-sm pb-1 w-full block basis-full">
                        Vulputate velit viverra volutpat volutpat tristique
                      </p>
                      <div className="flex flex-row justify-start lg:justify-between">
                        <div className="text-white text-xs hidden lg:flex items-center  font-Sora">
                          <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                          22:59
                        </div>
                        <span
                          className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-bold text-center flex items-center h-5 py-3 px-3 mb-2 whitespace-nowrap text-xs"
                          style={{ fontSize: "11px" }}
                        >
                          1.25&#32;ETH
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-between  pb-2">
                      <div className="text-gray-600 text-xs font-Inter">
                        101 people are bidding
                      </div>
                      <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                        <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full text-slate-500 font-Sora text-sm mt-10 lg:mt-auto mb-7 py-3 rounded-xl font-bold cursor-pointer transition-all hover:scale-90 border-2 border-slate-700">
                  Show me more
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-16 lg:flex-row mt-36">
            <div className="basis-1/2 flex justify-center">
              <div className="w-128">
                <img
                  className="w-full h-full object-cover"
                  src={LeftImage}
                  alt="Questions"
                />
              </div>
            </div>
            <div className="basis-1/2 text-center lg:text-start text-white p-5 my-auto">
              <span className="text-slate-500 font-Inter text-sm uppercase tracking-widest font-semibold">
                Overline
              </span>
              <h2 className="font-Sora text-2xl lg:text-4xl xl:text-6xl mt-3 mb-5">
                Habitant tristique aliquam in vel scelerisque
              </h2>
              <p className="text-slate-500 font-Inter text-sm">
                Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
                pulvinar
                <br /> ultricies dolor feugiat aliquam commodo.
              </p>
              <div className="flex gap-16 justify-center lg:justify-start mt-5">
                <div className="flex flex-col">
                  <img
                    className="w-6 h-6 m-4 lg:ml-0 mx-auto"
                    src={Icon1}
                    alt="Icon Brush"
                  />
                  <h5 className="text-white text-md font-Sora">
                    Sollicitudin sapien
                  </h5>
                  <p className="text-xs text-slate-500 font-Inter">
                    Cursus fermentum
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    className="w-6 h-6 m-4 lg:ml-0 mx-auto"
                    src={Icon2}
                    alt="Icon Blocks"
                  />
                  <h5 className="text-white text-md font-Sora">
                    Pulvinar metus
                  </h5>
                  <p className="text-xs text-slate-500 font-Inter">Nunc sed</p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start items-center gap-4 mt-12">
                <a
                  className="text-white px-5 py-3 rounded-lg font-Sora text-sm bg-gradient-contact ease-in duration-200 hover:bg-gradient-to-r from-indigo-700 to-indigo-800"
                  href="#getstarted"
                >
                  Get started
                </a>
                <a
                  className="text-slate-400 px-5 py-3 border font-Sora text-sm rounded-lg border-slate-700 bg-transparent ease-in duration-100 hover:bg-gray-700 hover:text-white"
                  href="#more"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section3" className="flex justify-center">
        <div className="content-wrapper container my-28 2xl:px-20">
          <div className="flex flex-col justify-center">
            <span className="text-slate-500 font-Inter tracking-widest text-xs text-center uppercase font-semibold">
              Overline
            </span>
            <h3 className="text-white text-3xl text-center font-Sora my-5">
              Most popular live auctions
            </h3>
            <div className="flex flex-wrap lg:flex-row justify-center items-center gap-3 my-3">
              <div className="border border-gray-800 rounded-lg font-bold px-2 py-1 text-sm cursor-pointer text-slate-500 transition-all ease-in-out hover:border-gray-600">
                Architecture
              </div>
              <div className="border border-gray-800 rounded-lg font-bold px-2 py-1 text-sm cursor-pointer text-slate-500 transition-all ease-in-out hover:border-gray-600">
                Photography
              </div>
              <div className="border border-gray-800 rounded-lg font-bold px-2 py-1 text-sm cursor-pointer text-slate-500 transition-all ease-in-out hover:border-gray-600">
                Games
              </div>
              <div className="border border-gray-800 rounded-lg font-bold px-2 py-1 text-sm cursor-pointer text-slate-500 transition-all ease-in-out hover:border-gray-600">
                Music
              </div>
            </div>
            <div className="flex flex-wrap lg:flex-row justify-center gap-4 mt-6 px-3 xl:px-0">
              <div className="max-w-56">
                <img
                  className="my-3 rounded-xl w-full h-80 object-cover"
                  src={CatCardImage1}
                  alt="Item Slider"
                />{" "}
                <p className="text-white text-sm font-Sora">
                  Fames habitasse risus
                  <br /> ultircies tortor sit
                </p>
                <div className="flex flex-row items-center justify-between mt-4">
                  <div className="text-white text-xs flex items-center  font-Sora">
                    <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                    22:59
                  </div>
                  <span
                    className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black text-center flex items-center h-5 py-3 px-3 text-xs"
                    style={{ fontSize: "11px" }}
                  >
                    2.55&#32;ETH
                  </span>
                </div>
                <hr className="border-gray-800 my-4" />
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-xs font-Inter">
                    101 people are bidding
                  </div>
                  <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                    <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                  </div>
                </div>
              </div>
              <div className="max-w-56">
                <img
                  className="my-3 rounded-xl w-full h-80 object-cover"
                  src={CatCardImage2}
                  alt="Item Slider"
                />{" "}
                <p className="text-white text-sm font-Sora">
                  Fames habitasse risus
                  <br /> ultircies tortor sit
                </p>
                <div className="flex flex-row items-center justify-between mt-4">
                  <div className="text-white text-xs flex items-center  font-Sora">
                    <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                    22:59
                  </div>
                  <span
                    className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black text-center flex items-center h-5 py-3 px-3 text-xs"
                    style={{ fontSize: "11px" }}
                  >
                    2.55&#32;ETH
                  </span>
                </div>
                <hr className="border-gray-800 my-4" />
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-xs font-Inter">
                    101 people are bidding
                  </div>
                  <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                    <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                  </div>
                </div>
              </div>{" "}
              <div className="max-w-56">
                <img
                  className="my-3 rounded-xl w-full h-80 object-cover"
                  src={CatCardImage3}
                  alt="Item Slider"
                />{" "}
                <p className="text-white text-sm font-Sora">
                  Fames habitasse risus
                  <br /> ultircies tortor sit
                </p>
                <div className="flex flex-row items-center justify-between mt-4">
                  <div className="text-white text-xs flex items-center  font-Sora">
                    <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                    22:59
                  </div>
                  <span
                    className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black text-center flex items-center h-5 py-3 px-3 text-xs"
                    style={{ fontSize: "11px" }}
                  >
                    2.55&#32;ETH
                  </span>
                </div>
                <hr className="border-gray-800 my-4" />
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-xs font-Inter">
                    101 people are bidding
                  </div>
                  <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                    <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                  </div>
                </div>
              </div>{" "}
              <div className="max-w-56">
                <img
                  className="my-3 rounded-xl w-full h-80 object-cover"
                  src={CatCardImage4}
                  alt="Item Slider"
                />{" "}
                <p className="text-white text-sm font-Sora">
                  Fames habitasse risus
                  <br /> ultircies tortor sit
                </p>
                <div className="flex flex-row items-center justify-between mt-4">
                  <div className="text-white text-xs flex items-center  font-Sora">
                    <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                    22:59
                  </div>
                  <span
                    className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black text-center flex items-center h-5 py-3 px-3 text-xs"
                    style={{ fontSize: "11px" }}
                  >
                    2.55&#32;ETH
                  </span>
                </div>
                <hr className="border-gray-800 my-4" />
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-xs font-Inter">
                    101 people are bidding
                  </div>
                  <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                    <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                  </div>
                </div>
              </div>{" "}
              <div className="max-w-56">
                <img
                  className="my-3 rounded-xl w-full h-80 object-cover"
                  src={CatCardImage5}
                  alt="Item Slider"
                />{" "}
                <p className="text-white text-sm font-Sora">
                  Fames habitasse risus
                  <br /> ultircies tortor sit
                </p>
                <div className="flex flex-row items-center justify-between mt-4">
                  <div className="text-white text-xs flex items-center  font-Sora">
                    <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                    22:59
                  </div>
                  <span
                    className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black text-center flex items-center h-5 py-3 px-3 text-xs"
                    style={{ fontSize: "11px" }}
                  >
                    2.55&#32;ETH
                  </span>
                </div>
                <hr className="border-gray-800 my-4" />
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-xs font-Inter">
                    101 people are bidding
                  </div>
                  <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                    <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                  </div>
                </div>
              </div>{" "}
              <div className="max-w-56">
                <img
                  className="my-3 rounded-xl w-full h-80 object-cover"
                  src={CatCardImage6}
                  alt="Item Slider"
                />{" "}
                <p className="text-white text-sm font-Sora">
                  Fames habitasse risus
                  <br /> ultircies tortor sit
                </p>
                <div className="flex flex-row items-center justify-between mt-4">
                  <div className="text-white text-xs flex items-center  font-Sora">
                    <i className="bx bx-time text-sm font-thin leading-4 pr-2"></i>
                    22:59
                  </div>
                  <span
                    className="bg-buttonBG text-buttonTxt rounded-sm font-Sora font-black text-center flex items-center h-5 py-3 px-3 text-xs"
                    style={{ fontSize: "11px" }}
                  >
                    2.55&#32;ETH
                  </span>
                </div>
                <hr className="border-gray-800 my-4" />
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-xs font-Inter">
                    101 people are bidding
                  </div>
                  <div className="text-gray-600 text-xs flex items-center font-Sora ml-auto">
                    <i className="bx bx-heart leading-4 text-xl font-thin mr-1"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-16">
              <button className="text-slate-500 font-Sora text-sm py-3 px-4 rounded-xl font-bold cursor-pointer transition-all hover:scale-90 border-2 border-slate-700">
                Show me more
              </button>
            </div>
          </div>
          <hr
            id="dividerContainer"
            className="border border-gray-800 my-28 mx-auto"
          />
          <div className="flex flex-wrap lg:flex-row justify-center items-center gap-20">
            <div className="flex flex-col justify-center items-center">
              <img className="w-8 h-8" src={UserIcon} alt="user icon" />
              <div className="text-white text-4xl md:text-5xl font-Sora text-center my-4">
                300k
              </div>
              <div className="text-slate-500 text-sm font-Inter text-center ">
                Users Active
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-8 h-8" src={ArtworkIcon} alt="user icon" />
              <div className="text-white text-4xl md:text-5xl font-Sora text-center my-4">
                52,5k
              </div>
              <div className="text-slate-500 text-sm font-Inter text-center ">
                Artworks
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-8 h-8" src={ArtistIcon} alt="user icon" />
              <div className="text-white text-4xl md:text-5xl font-Sora text-center my-4">
                17,5k
              </div>
              <div className="text-slate-500 text-sm font-Inter text-center ">
                Artists
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-8 h-8" src={WalletIcon} alt="user icon" />
              <div className="text-white text-4xl md:text-5xl font-Sora text-center my-4">
                35.58
              </div>
              <div className="text-slate-500 text-sm font-Inter text-center ">
                ETH Spent
              </div>
            </div>
          </div>
          <div
            id="card-2-2"
            className="card-body rounded-xl relative border mx-4 border-gray-900 bg-midnight mt-36 mb-16 flex justify-start"
          >
            <div
              id="p-card-wrapper"
              className="w-full h-full relative overflow-hidden p-6 lg:p-20"
            >
              <div className="relative z-10">
                <span className="text-slate-500 font-Inter text-sm uppercase tracking-widest font-semibold">
                  Overline
                </span>
                <h3 className="text-white font-Sora font-bold lg:leading-tight text-2xl  md:text-4xl lg:text-5xl mt-3 mb-5">
                  Cursus vitae <br /> sollicitudin donec <br /> nascetur. Join
                  now
                </h3>
                <p className="text-slate-500 font-Inter text-sm">
                  Donec volutpat bibendum justo, odio aenean congue est <br />{" "}
                  porttitor ut. Mauris vestibulum eros libero amet tincidunt.
                </p>
                <div className="flex justify-start items-center gap-4 mt-12">
                  <a
                    className="text-white px-5 py-3 rounded-lg font-Sora whitespace-nowrap text-sm bg-gradient-contact ease-in duration-200 hover:bg-gradient-to-r from-indigo-700 to-indigo-800"
                    href="#getstarted"
                  >
                    Get started
                  </a>
                  <a
                    className="text-slate-400 px-5 py-3 border font-Sora whitespace-nowrap text-sm rounded-lg border-slate-700 bg-transparent ease-in duration-100 hover:bg-gray-700 hover:text-white"
                    href="#more"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div>
                <div className="p-4 rounded-3xl absolute blur-sm opacity-25 xl:blur-none xl:opacity-100 top-20 right-64 border border-gray-800 bg-midnight flex justify-start items-start">
                  <img src={AvatarCard1} alt="Avatar Profile" />
                  <div className="flex flex-col justify-start pl-4 pr-2">
                    <div className="flex justify-between items-center gap-20">
                      <h5 className="text-white text-lg font-Sora">
                        @brook_sim
                      </h5>
                      <div className="bg-buttonBG text-buttonTxt rounded-md font-Sora text-xs font-black flex items-center h-5 px-3 py-3.5 ">
                        4.78 ETH
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-6 mt-2">
                      <div className="text-slate-500 text-sm flex items-center font-Inter">
                        <i className="bx bx-images text-xl leading-4 pr-1"></i>
                        Items 206
                      </div>
                      <div className="text-slate-500 text-sm flex items-center font-Inter">
                        <i className="bx bxs-widget text-xl leading-4 pr-1"></i>
                        Collection 12
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-3xl absolute blur-sm opacity-25 xl:blur-none xl:opacity-100 top-52 right-24 border border-gray-800 bg-midnight flex justify-start items-start">
                  <img src={AvatarCard2} alt="Avatar Profile" />
                  <div className="flex flex-col justify-start pl-4 pr-2">
                    <div className="flex justify-between items-center gap-20">
                      <h5 className="text-white text-lg font-Sora">
                        @marvinmckin
                      </h5>
                      <div className="bg-buttonBG text-buttonTxt rounded-md font-Sora text-xs font-black flex items-center h-5 px-3 py-3.5 ">
                        7.55 ETH
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-6 mt-2">
                      <div className="text-slate-500 text-sm flex items-center font-Inter">
                        <i className="bx bx-images text-xl leading-4 pr-1"></i>
                        Items 206
                      </div>
                      <div className="text-slate-500 text-sm flex items-center font-Inter">
                        <i className="bx bxs-widget text-xl leading-4 pr-1"></i>
                        Collection 24
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-3xl absolute blur-sm opacity-25 xl:blur-none xl:opacity-100 top-80 mt-4 right-80 border border-gray-800 bg-midnight flex justify-start items-start">
                  <img src={AvatarCard3} alt="Avatar Profile" />
                  <div className="flex flex-col justify-start pl-4 pr-2">
                    <div className="flex justify-between items-center gap-20">
                      <h5 className="text-white text-lg font-Sora">
                        @esther_howard
                      </h5>
                      <div className="bg-buttonBG text-buttonTxt rounded-md font-Sora text-xs font-black flex items-center h-5 px-3 py-3.5 ">
                        5.31 ETH
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-6 mt-2">
                      <div className="text-slate-500 text-sm flex items-center font-Inter">
                        <i className="bx bx-images text-xl leading-4 pr-1"></i>
                        Items 387
                      </div>
                      <div className="text-slate-500 text-sm flex items-center font-Inter">
                        <i className="bx bxs-widget text-xl leading-4 pr-1"></i>
                        Collection 10
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-3xl absolute blur-sm opacity-25 xl:blur-none xl:opacity-100 bottom-16 -right-32  border border-gray-800 bg-midnight flex justify-start items-start">
                  <img src={AvatarCard4} alt="Avatar Profile" />
                  <div className="flex flex-col justify-start pl-4 pr-2">
                    <div className="flex justify-between items-center gap-20">
                      <h5 className="text-white text-lg font-Sora">
                        @brook_sim
                      </h5>
                      <div className="bg-buttonBG text-buttonTxt rounded-md font-Sora text-xs font-black flex items-center h-5 px-3 py-3.5 ">
                        4.78 ETH
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-6 mt-2">
                      <div className="text-slate-500 text-sm flex items-center font-Inter">
                        <i className="bx bx-images text-xl leading-4 pr-1"></i>
                        Items 24
                      </div>
                      <div className="text-slate-500 text-sm flex items-center font-Inter">
                        <i className="bx bxs-widget text-xl leading-4 pr-1"></i>
                        Collection 20
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-3xl absolute blur-sm opacity-25 xl:blur-none xl:opacity-100 top-12 -right-48 border border-gray-800 bg-midnight flex justify-start items-start">
                  <img src={AvatarCard5} alt="Avatar Profile" />
                  <div className="flex flex-col justify-start pl-4 pr-2">
                    <div className="flex justify-between items-center gap-20">
                      <h5 className="text-white text-lg font-Sora">
                        @brook_sim
                      </h5>
                      <div className="bg-buttonBG text-buttonTxt rounded-md font-Sora text-xs font-black flex items-center h-5 px-3 py-3.5 ">
                        4.78 ETH
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-6 mt-2">
                      <div className="text-slate-500 text-sm flex items-center font-Inter">
                        <i className="bx bx-images text-xl leading-4 pr-1"></i>
                        Items 24
                      </div>
                      <div className="text-slate-500 text-sm flex items-center font-Inter">
                        <i className="bx bxs-widget text-xl leading-4 pr-1"></i>
                        Collection 20
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="nft-divider"
        className="xl:w-120 w-full mb-20 flex justify-evenly items-center overflow-x-scroll snap-x gap-5 relative xl:-left-8 2xl:-left-14"
      >
        <div className="nft-item flex-col justify-center items-start gap-2 hidden xl:flex">
          <img
            className="rounded-2xl object-cover"
            src={NftItem1}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            2.18 ETH
          </p>
        </div>
        <div className="nft-item flex-col justify-center items-start gap-2 hidden xl:flex">
          <img
            className="rounded-2xl object-cover"
            src={NftItem2}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            1.51 ETH
          </p>
        </div>
        <div className="nft-item flex-col justify-center items-start gap-2 hidden lg:flex">
          <img
            className="rounded-2xl object-cover"
            src={NftItem3}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            3.25 ETH
          </p>
        </div>
        <div className="nft-item flex-col justify-center items-start gap-2 hidden lg:flex">
          <img
            className="rounded-2xl object-cover"
            src={NftItem4}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            3.62 ETH
          </p>
        </div>
        <div className="nft-item flex-col justify-center items-start gap-2 hidden md:flex">
          <img
            className="rounded-2xl object-cover"
            src={NftItem5}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            3.82 ETH
          </p>
        </div>
        <div className="nft-item flex-col justify-center items-start gap-2 hidden md:flex">
          <img
            className="rounded-2xl object-cover"
            src={NftItem6}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            2.77 ETH
          </p>
        </div>
        <div className="nft-item flex-col justify-center items-start gap-2 hidden md:flex">
          <img
            className="rounded-2xl object-cover"
            src={NftItem7}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs ">
            1.61 ETH
          </p>
        </div>
        <div className="nft-item flex-col justify-center items-start gap-2 hidden md:flex">
          <img
            className="rounded-2xl object-cover"
            src={NftItem8}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            2.29 ETH
          </p>
        </div>
        <div className="nft-item flex flex-col justify-center items-start gap-2">
          <img
            className="rounded-2xl object-cover"
            src={NftItem9}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            2.03 ETH
          </p>
        </div>
        <div className="nft-item flex flex-col justify-center items-start gap-2">
          <img
            className="rounded-2xl object-cover"
            src={NftItem10}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            3.69 ETH
          </p>
        </div>
        <div className="nft-item flex flex-col justify-center items-start gap-2">
          <img
            className="rounded-2xl object-cover"
            src={NftItem11}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            1.49 ETH
          </p>
        </div>
        <div className="nft-item flex flex-col justify-center items-start gap-2">
          <img
            className="rounded-2xl object-cover"
            src={NftItem12}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            3.21 ETH
          </p>
        </div>
        <div className="nft-item flex-col justify-center items-start gap-2 hidden md:flex">
          <img
            className="rounded-2xl object-cover"
            src={NftItem13}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            2.22 ETH
          </p>
        </div>
        <div className="nft-item flex-col justify-center items-start gap-2 hidden md:flex">
          <img
            className="rounded-2xl object-cover"
            src={NftItem14}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            2.82 ETH
          </p>
        </div>
        <div className="nft-item flex-col justify-center items-start gap-2 hidden lg:flex">
          <img
            className="rounded-2xl object-cover"
            src={NftItem15}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            1.49 ETH
          </p>
        </div>
        <div className="nft-item flex-col justify-center items-start gap-2 hidden lg:flex">
          <img
            className="rounded-2xl object-cover"
            src={NftItem16}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            1.57 ETH
          </p>
        </div>
        <div className="nft-item flex-col justify-center items-start gap-2 hidden xl:flex">
          <img
            className="rounded-2xl object-cover"
            src={NftItem17}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            2.88 ETH
          </p>
        </div>
        <div className="nft-item flex-col justify-center items-start gap-2 hidden xl:flex">
          <img
            className="rounded-2xl object-cover"
            src={NftItem18}
            alt="nft item"
          />
          <p className="text-slate-500 mx-auto font-semibold font-Inter text-xs">
            3.51 ETH
          </p>
        </div>
      </div>
      <footer className="container mx-auto p-3 pb-12">
        <div
          id="footer-frame"
          className="rounded-2xl border border-gray-800 flex flex-col lg:flex-row"
        >
          <div className="basis-1/3 py-5 px-3 md:p-10 xl:pr-32 flex flex-col gap-12 lg:gap-52">
            <div className="flex flex-row gap-5">
              <img src={logo} alt="logo" />
              <h3 className="text-2xl text-white font-Sora font-semibold tracking-wide">
                NFT Market
              </h3>
            </div>
            <div className="flex flex-row justify-between items-center text-slate-500 transition-all ease-in-out delay-200 text-sm font-Inter ">
              <div className="hover:text-slate-300 cursor-pointer">Support</div>
              <div className="hover:text-slate-300 whitespace-nowrap cursor-pointer">
                Term of Services
              </div>
              <div className="hover:text-slate-300 cursor-pointer">License</div>
            </div>
          </div>
          <div className="basis-1/3 border p-10 xl:p-12 border-y-gray-800 border-x-transparent lg:border-x-gray-800 lg:border-y-transparent flex flex-col justify-start gap-6">
            <div className="flex flex-col justify-start gap-2 w-max text-white text-md font-Sora">
              <div className="hover:text-slate-400 cursor-pointer">
                Auctions
              </div>
              <div className="hover:text-slate-400 cursor-pointer">Roadmap</div>
              <div className="hover:text-slate-400 cursor-pointer">
                Discover
              </div>
              <div className="hover:text-slate-400 cursor-pointer">
                Community
              </div>
            </div>
            <a
              className="text-white font-semibold w-max px-6 hover:scale-90 py-3 rounded-lg bg-gradient-contact ease-in duration-200 hover:bg-gradient-to-r from-indigo-700 to-indigo-800"
              href="#myaccount"
            >
              My account
            </a>
            <div className="flex flex-row justify-start gap-4 mt-auto items-center text-slate-500 transition-all ease-in-out text-2xl">
              <i className="bx bxl-facebook-square cursor-pointer hover:text-slate-300"></i>
              <i className="bx bxl-linkedin-square cursor-pointer hover:text-slate-300"></i>
              <i className="bx bxl-github cursor-pointer hover:text-slate-300"></i>
              <i className="bx bxl-twitter cursor-pointer hover:text-slate-300"></i>
              <i className="bx bxl-instagram-alt cursor-pointer hover:text-slate-300"></i>
            </div>
          </div>
          <div className="basis-1/3 flex flex-col gap-10 lg:gap-0 py-5 px-3 md:p-10 xl:px-24 xl:py-12 justify-center ">
            <div className="text-slate-500 text-center lg:text-start text-sm font-Inter mb-auto">
              Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
              velit, sed egestas in. Id nam semper dolor tellus vulputate eget
              turpis.
            </div>
            <div className="rounded-xl bg-white py-3 px-4 flex justify-start items-center mt-auto">
              <input
                className="font-Inter text-sm text-gray-300"
                type="text"
                placeholder="Newsletter"
              />
              <div className="text-indigo-800 whitespace-nowrap text-sm font-bold font-Sora ml-auto">
                Sign in
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
