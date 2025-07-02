import React from 'react'
import { FaBars, FaFacebook, FaTelegram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router'

const Privatepool = () => {
  return (
    <div className="bg-[#1D0729] text-white">
      <div className="p-3 ">
        <nav className="flex justify-between rounded-full text-white p-3 px-5 mdpx-0 md:px-10 items-center bg-[#2A0C3B]">
          <img
            src="https://nftswapstack.netlify.app/static/media/logo.3a5ddf90d6e3930972be.jfif"
            alt=""
            className="md:w-14 w-10 h-10 md:h-14 rounded-full"
          />

          <Link to="/">
            <ul className="md:flex hidden gap-5  text-lg font-semibold">
              <li>Home</li>
              <li>About</li>
              <li>Roadmap</li>
              <li>Tokenomic</li>
              <li>Whitepaper</li>
            </ul>
          </Link>
          <button className="bg-[#D344B0] py-2 md:px-4 px-2 rounded-md">
            <p className="md:block hidden">Claim Airdrop</p>
            <FaBars className="md:hidden block" />
          </button>
        </nav>
      </div>
      <div className="md:mt-16 mt-5 md:px-5 px-2">
        <p className="md:text-4xl text-2xl font-bold lllk text-center">
          Private Pool Contribution
        </p>
        <p className="mt-2 md:text-base text-sm">
          All holders of our previous tokens are expected to participate in the
          private pool for our new token launch.
          <br className="md:block hidden" /> Your contributions will help boost
          liquidity (LP) for the new tokens, ensuring a strong start for the
          project and profit to all investors.
        </p>

        <div className="bg-[#320E39] mt-5 md:p-5 p-2 rounded-2xl">
          <p className="md:text-lg font-semibold">Rabbit Coin Private Pool</p>
          <div>
            <div className="mt-5 text-xs md:text-base">
              <p className="mt-1 font-bold  text-[#d344b0] mt-2">
                Status: <span className="font-medium text-white">Live</span>
              </p>
              <p className="mt-1 font-bold  text-[#d344b0]">
                Target: <span className="font-medium text-white">$155,000</span>
              </p>
              <p className="mt-1 font-bold  text-[#d344b0]">
                Current raised:{" "}
                <span className="font-medium text-white">$87,272</span>
              </p>
              <p className="mt-1 font-bold  text-[#d344b0]">
                Total contributors:{" "}
                <span className="font-medium text-white">32</span>
              </p>
              <section className="md:w-[50%] h-[1rem] bg-[#A1DFB6] md:mt-5 mt-3 rounded-full">
                <section className="w-[61%] h-full bg-[#48C774] rounded-full"></section>
                <div className="w-full text-xs mt-1 flex justify-between items-center">
                  <p>$87,272</p>
                  <p>$155,000</p>
                </div>
              </section>

              <div className="md:mt-5 mt-10 text-sm md:text-base">
                <p className="pt-5 md:text-lg text-base font-semibold">
                  Contribution Address:
                </p>
                <p className="mt-1 font-bold  text-[#d344b0]">
                  ETH:{" "}
                  <span className="md:font-medium text-white">
                    0xB49a9fC23998146AF4AdeA8A956e37bD06f5f030
                  </span>
                </p>
                <p className="mt-1 font-bold  text-[#d344b0]">
                  SOLANA:{" "}
                  <span className="md:font-medium text-white">
                    C3Pt3W955oooh1sZGS9UeqZRTroSWRjUzs4EmaWGibkA
                  </span>
                </p>
                <p className="mt-1 font-bold  text-[#d344b0]">
                  BNB:{" "}
                  <span className="md:font-medium text-white">
                    0xB49a9fC23998146AF4AdeA8A956e37bD06f5f030
                  </span>
                </p>
                <p className="mt-1 font-bold  text-[#d344b0]">
                  USDT (trc20):{" "}
                  <span className="md:font-medium text-white">
                    TM3ccBTAb9pbQ3JbmfREfHMkqXoDgVjMDj
                  </span>
                </p>
                <p className="mt-1 font-bold  text-[#d344b0]">
                  USDT (bep20):{" "}
                  <span className="md:font-medium text-white">
                    0xB49a9fC23998146AF4AdeA8A956e37bD06f5f030
                  </span>
                </p>
                <p className="mt-5 text-sm">
                  Envavour to copy the right address to prevent loss of funds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-24 mt-10 bg-[#2B082F] rounded-t-3xl p-10">
        <p className="md:text-4xl text-2xl font-bold lllk text-center">
          Partners
        </p>
        <div className="md:flex md:justify-between  items-center md:mt-20 mt-10">
          <section className="md:w-[10%] w-[70%] ">
            <img src="./img/pt1.png" alt="" className="w-full" />
          </section>
          <section className="md:w-[10%] w-[70%] md:mt-0 mt-5">
            <img src="./img/pt2.png" alt="" className="w-full" />
          </section>
          <section className="md:w-[10%] w-[70%] md:mt-0 mt-5">
            <img src="./img/pt3.png" alt="" className="w-full" />
          </section>
          <section className="md:w-[10%] w-[70%] md:mt-0 mt-5">
            <img src="./img/pt4.png" alt="" className="w-full" />
          </section>
          <section className="md:w-[10%] w-[70%] md:mt-0 mt-5">
            <img src="./img/pt5.png" alt="" className="w-full" />
          </section>
          <section className="md:w-[10%] w-[70%] md:mt-0 mt-5 bg-[#4a4f63] h-fit rounded-full">
            <img src="./img/pt6.png" alt="" className="w-full" />
          </section>
          <section className="md:w-[10%] w-[70%] md:mt-0 mt-5">
            <img src="./img/pt7.png" alt="" className="w-full" />
          </section>
        </div>

        <div className="md:mt-20">
          <p className="md:text-4xl font-bold lllk pt-20">Contact Us</p>
          <div>
            <section className="md:mt-5 mt-2 flex items-center gap-10">
              <a href="https://t.me/rrabbit_coin">
                {" "}
                <FaTelegram className="md:text-3xl text-xl" />
              </a>
              <FaFacebook className="md:text-3xl text-xl" />
              <FaTwitter className="md:text-3xl text-xl" />
            </section>
          </div>
          <p className="text-center text-xs mt-10">
            Copyrights © 2024 Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privatepool