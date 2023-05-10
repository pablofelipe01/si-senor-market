import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import Button from './Button';

const FooterLinks = ({ heading, items, extraClasses }) => (
  <div className={`flex-1 justify-start items-start ${extraClasses}`}>
    <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">{heading}</h3>
    {items.map((item, index) => <p key={item + index} className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3">{item}</p>)}
  </div>
);

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" />
            <p className=" dark:text-white text-nft-dark font-semibold text-lg ml-1">Marketing NFTs</p>
          </div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6"></p>
          <div >
            {/* <input type="email" placeholder="I want Azul" className="h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md font-poppins dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none" /> */}
            <div className="flex-initial">
              <a href="https://onramp.pokoapp.xyz/?apiKey=734c4a23-e256-46c4-b917-974f759a6aee&userId=poko_prod&cryptoList=MATIC-polygon" target="_blank" rel="noreferrer">
              <Button
                btnName="Buy Matic"
                btnType="primary"
                classStyles="rounded-md"
              />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks heading="Marketing NFTs" items={['Explore', 'How it Works', 'Contact Us']} />
          <FooterLinks heading="Support" items={['Help Center', 'Terms of service', 'Legal', 'Privacy policy']} extraClasses="ml-4" />
        </div> */}
      </div>
        <a href="https://sisenoragencia.com/" target="_blank" rel="noreferrer">
      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="flex flex-row sm:mt-4 font-poppins dark:text-white text-nft-black-1 font-semibold text-base">Si Senor, All Rights Reserved ®</p>
          {/* <div className="flex flex-row sm:mt-4">
            {[images.instagram, images.twitter, images.telegram, images.discord].map((image, index) => (
              <div className="mx-2 cursor-pointer" key={`image ${index}`}>
                <Image src={image} key={index} objectFit="contain" width={24} height={24} alt="social" className={theme === 'light' ? 'filter invert' : undefined} />
              </div>
            ))}
          </div> */}
        </div>
      </div>
      </a>
    </footer>
  );
};

export default Footer;
