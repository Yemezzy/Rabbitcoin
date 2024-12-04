import React from 'react'
import { FaBars, FaFacebook, FaHamburger, FaTelegram, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className='bg-[#F5F2FF]'>
      <div className='p-3 '>
        <nav className='flex justify-between rounded-full text-white p-5 md:px-10 items-center bg-[#2B183A]'>
          <img src="https://nftswapstack.netlify.app/static/media/logo.3a5ddf90d6e3930972be.jfif" alt="" className='md:w-14 w-10 h-10 md:h-14 rounded-full'/>

          <ul className='md:flex hidden gap-5  text-lg font-semibold'>
            <li>Home</li>
            <li>About</li>
            <li>Roadmap</li>
            <li>Tokenomic</li>
            <li>Whitepaper</li>
          </ul>

<button className='bg-[#D344B0] py-2 md:px-4 px-2 rounded-md'>
  <p className='md:block hidden'>Claim Airdrop</p>
  <FaBars className='md:hidden block'/>
</button>
        </nav>
      </div>


      <div className='md:mt-20 text-center mt-10 md:pt-20 md:h-[30rem] h-[20rem]'>
        <p className=' md:text-7xl text-4xl font-bold'>Welcome to <span className='text-[#d344b0]'>The Rabbits <br className='md:block hidden'/>  Coin</span> Ecosystem</p>
        <p className='md:mt-5 mt-3 text-sm md:text-lg lllk font-bold px-2'>Endavour to send all the old tokens you hold to the self_distruct addreess for the new <br className='md:block hidden'/> RABBIT COIN airdrop refund.</p>
        <div className='flex justify-center text-sm md:text-base items-center mt-10 gap-2 text-white'>
          <button className='bg-[#2B183A] py-2 px-4 rounded-md'>Private Pool</button>
          <button className='bg-[#2B183A] py-2 px-4 rounded-md'>Learn More</button>
          <button className='bg-[#2B183A] py-2 px-4 rounded-md'>Claim Airdrop</button>
        </div>
      </div>

      <div className='bg-[#2B183A] text-white  rounded-t-3xl pt-5'>
<p className='md:text-4xl text-2xl font-bold lllk mt-3 md:ml-5 px-5'>Road Map</p>
<div className='px-10 md:mt-20 mt-10 grid md:grid-cols-3 gap-5 md:gap-0'> 
  <section >
    <p className='text-xl font-semibold text-[#d344b0]'>Phase 1</p>
    <ul className='nn md:text-lg md:mt-3'>
      <li>Refund of the new token</li>
      <li>Website goes live</li>  
      <li>Staking options for NFTs</li>
      <li>Launch of the marketplace</li>
      <li>Achieve a market cap of $500k</li>
    </ul>
  </section>
  <section >
    <p className='text-xl font-semibold text-[#d344b0]'>Phase 2</p>
    <ul className='nn md:text-lg md:mt-3'>
      <li>Partnering with Twitter influencers</li>
      <li>Launch of DEX advertisements</li>
      <li>NFT collection with built-in utility</li>
      <li>Sponsored ads on Twitter</li>
      <li>Achieve a market cap of $1M</li>
    </ul>
  </section>
  <section >
    <p className='text-xl font-semibold text-[#d344b0]'>Phase 3</p>
    <ul className='nn md:text-lg md:mt-3'>
      <li>Listing on CoinGecko</li>
      <li>Listing on CoinMarketCap (CMC)</li>
      <li>First centralized exchange (CEX) listing</li>
      <li>Grow Twitter community to 5K followers</li>
      <li>Grow Telegram group to 5K members</li>
      <li>Engage YouTube influencers</li>
      <li>Achieve a market cap of $10M</li>
    </ul>
  </section>
  <section >
    <p className='text-xl font-semibold text-[#d344b0] md:mt-10'>Phase 4</p>
    <ul className='nn md:text-lg md:mt-3'>
      <li>Launch of the game</li>
      <li>1B market cap</li>

    </ul>
  </section>
</div>

<div className='md:mt-24 mt-10 bg-[#2B082F] rounded-t-3xl pt-10'>
  <p className='text-center text-2xl font-bold text-[#d344b0] lllk px-10'>Explore some of our upcoming NFT's</p>
  <p className='md:px-[20%] text-center text-sm mt-2 px-5'>Our NFTs are limited to 10,000 per year. Initially, only the team can create these NFTs. Afterward, investors can buy and sell them on the marketplace. Each NFT offers different reward rates, with rarer NFTs providing higher rewards.

Each NFT offers different reward rates, with rarer NFTs providing higher rewards.</p>
<div className='flex justify-center items-center mt-10 md:gap-5 gap-2'>
  <section className='md:w-[20%] w-[27%]'>
    <img src="https://nftswapstack.netlify.app/static/media/nft2.19811f1fece9c6da4945.jfif" alt="" className='w-full'/>
  </section>
  <section className='md:w-[25%] w-[35%]'>
    <img src="https://nftswapstack.netlify.app/static/media/nft1.cb65397b29937853c62c.jfif" alt="" className='w-full'/>
  </section>
  <section className='md:w-[20%] w-[27%]'>
    <img src="https://nftswapstack.netlify.app/static/media/nft3.381ab98d1a4cbe708fac.jfif" alt="" className='w-full'/>
  </section>

</div>


<div className=' bg-[#2B183A] p-5 md:p-10 mt-20 rounded-t-3xl'>
<p className='md:text-4xl text-2xl font-bold lllk md:ml-5'>Tokenomics</p>
<div className='md:mt-10 mt-5 md:text-xl '>
  <p className='mt-1 md:mt-3 font-bold  text-[#d344b0]'>NAME: <span className='font-medium text-white'>RABBIT COIN</span></p>
  <p className='mt-1 md:mt-3 font-bold  text-[#d344b0]'>TOTAL SUPPLY: <span className='font-medium text-white'>100 Billion</span></p>
  <p className='mt-1 md:mt-3 font-bold  text-[#d344b0]'>SYMBOL: <span className='font-medium text-white'>$RABBIT</span></p>
  <p className='mt-1 md:mt-3 font-bold  text-[#d344b0]'>BUY FEES:  <span className='font-medium text-white'>4% (3% rewards to holders, 1% marketing)</span></p>
  <p className='mt-1 md:mt-3 font-bold  text-[#d344b0]'>SELL FEES:  <span className='font-medium text-white'>5% (3% rewards to holders, 1% buyback, 1% marketing)</span></p>
</div>
<div className=' flex justify-center items-center mt-10'>
  <img src="https://nftswapstack.netlify.app/static/media/roadmap1.fa7691868a93352e2694.jfif" alt="" className='md:w-[25%] w-[80%]'/>
</div>
<p className='text-center md:mt-2 mt-10 lllk'>Rabbit Coin launch date TBA, All holders who have been refunded <br className='md:block hidden' /> will be added to the new group. <span className='text-[#d344b0]'>RABBIT COIN</span></p>
</div>


</div>
<div className='md:mt-24 mt-10 bg-[#2B082F] rounded-t-3xl p-10'>
  <p className='md:text-4xl text-2xl font-bold lllk text-center'>Partners</p>
  <div className='md:flex md:justify-between  items-center md:mt-20 mt-10'>
    <section className='md:w-[10%] w-[70%] '>
    <img src="./img/pt1.png" alt="" className='w-full'/>
    </section>
    <section className='md:w-[10%] w-[70%] md:mt-0 mt-5'>
    <img src="./img/pt2.png" alt="" className='w-full'/>
    </section>
    <section className='md:w-[10%] w-[70%] md:mt-0 mt-5'>
    <img src="./img/pt3.png" alt="" className='w-full'/>
    </section>
    <section className='md:w-[10%] w-[70%] md:mt-0 mt-5'>
    <img src="./img/pt4.png" alt="" className='w-full'/>
    </section>
    <section className='md:w-[10%] w-[70%] md:mt-0 mt-5'>
    <img src="./img/pt5.png" alt="" className='w-full'/>
    </section>
    <section className='md:w-[10%] w-[70%] md:mt-0 mt-5 bg-[#4a4f63] h-fit rounded-full'>
    <img src="./img/pt6.png" alt="" className='w-full'/>
    </section>
    <section className='md:w-[10%] w-[70%] md:mt-0 mt-5'>
    <img src="./img/pt7.png" alt="" className='w-full'/>
    </section>

  </div>

<div className='md:mt-20'>
  <p className='md:text-4xl font-bold lllk pt-20'>Contact Us</p>
  <div>
    <section className='md:mt-5 mt-2 flex items-center gap-10'>
    <FaTelegram className='md:text-3xl text-xl'/>
    <FaFacebook className='md:text-3xl text-xl'/>
    <FaTwitter className='md:text-3xl text-xl'/>
    </section>
  </div>
 <p className='text-center text-xs mt-10'>Copyrights © 2024 Reserved.</p>
</div>
</div>

      </div>
    </div>
  )
}

export default Home