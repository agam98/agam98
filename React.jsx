import React from 'react';
import './App.css'; // Assuming you have a CSS file for styles

const App = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#111318]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em]">Bookshelf</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              {['Home', 'Collection', 'Borrowing', 'My Profile', 'Help'].map((item) => (
                <a key={item} className="text-[#111318] text-sm font-medium leading-normal" href="#">{item}</a>
              ))}
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111318] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Search</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/9047eaab-60b5-4f94-bf68-6bcb2520590a.png")' }}></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/650913dc-d62e-43c1-beea-0b13459271ba.png")' }}>
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center">
                    Discover Your Favorite Books at the Online Library
                  </h1>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#3b72e8] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Start Exploring Collection</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {[
                  { title: 'The Silent Patient', author: 'Alex Michaelides', img: 'https://cdn.usegalileo.ai/stability/3e2a19b5-13fe-44f2-abdb-e178c554c275.png'
