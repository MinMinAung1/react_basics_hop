import React from "react";
import ShopList from "../components/shop/ShopList";
import classes from "./Home.module.css";

const DYMMY_DATA = [
  {
    id: "1",
    image:
      "https://himmoto.com/wp-content/uploads/2024/04/efweqt.jpg",
    name: "Code log",
    price: 3,
    text: "Personalization: Easily make your notebooks, laptops, and water bottles unique and fun.Decoration: Add a touch of charm and color to your surroundings, whether it’s your office desk or home space.Gifts: Ideal for giving a personal and heartwarming touch to gifts for cat lovers.Organization: Use them to label and organize your belongings in a playful way.Eco-Friendly: Most cat stickers are made with environmentally friendly materials.",
  },
  {
    id: "2",
    image:
      "https://render.fineartamerica.com/images/rendered/default/surface/sticker/images/artworkimages/medium/3/programmer-code-works-why-maximus-designs.jpg?&targetx=83&targety=0&imagewidth=833&imageheight=1000&modelwidth=1000&modelheight=1000&backgroundcolor=000000&stickerbackgroundcolor=transparent&orientation=0&producttype=sticker-3-3&v=8",
    name: "Programming Tree",
    price: 2,
    text: "Inspiration: Show off your love for coding and motivate yourself with tech-themed designs. Community: Represent your favorite programming languages, tools, or memes and connect with fellow coders.Personalization: Customize your laptop, notebook, or any tech gear to reflect your coding journey.Identification: Easily identify your gear at meetups, conferences, or in shared workspaces.",
  },
  {
    id: "3",
    image:
      "https://www.stickitup.xyz/cdn/shop/products/mechanical-brain-1.jpg?v=1684985586",
    name: "Tch Brain",
    price: 5,
    text: "Inspiration: Show off your love for coding and motivate yourself with tech-themed designs. Community: Represent your favorite programming languages, tools, or memes and connect with fellow coders.Personalization: Customize your laptop, notebook, or any tech gear to reflect your coding journey.Identification: Easily identify your gear at meetups, conferences, or in shared workspaces.",
  },
  {
    id: "4",
    image:
      "https://static.wixstatic.com/media/87f50e_62e10e132de14564b043598fceedbd6d~mv2.jpg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/87f50e_62e10e132de14564b043598fceedbd6d~mv2.jpg",
    name: "Teach Stickers",
    price: 2,
    text: "Inspiration: Show off your love for coding and motivate yourself with tech-themed designs. Community: Represent your favorite programming languages, tools, or memes and connect with fellow coders.Personalization: Customize your laptop, notebook, or any tech gear to reflect your coding journey.Identification: Easily identify your gear at meetups, conferences, or in shared workspaces.",
  },
  {
    id: "5",
    image:
      "https://i.pinimg.com/236x/10/99/2b/10992bc5ebe71b9e10867b239b1d02f1.jpg",
    name: "Girl Code",
    price: 1,
    text: "Inspiration: Show off your love for coding and motivate yourself with tech-themed designs. Community: Represent your favorite programming languages, tools, or memes and connect with fellow coders.Personalization: Customize your laptop, notebook, or any tech gear to reflect your coding journey.Identification: Easily identify your gear at meetups, conferences, or in shared workspaces.",
  },
  {
    id: "6",
    image:
      "https://i.pinimg.com/564x/09/cd/39/09cd39da0b48d1db2ff9afd11361e916.jpg",
    name: "Sticker",
    price: 10,
    text: "Inspiration: Show off your love for coding and motivate yourself with tech-themed designs. Community: Represent your favorite programming languages, tools, or memes and connect with fellow coders.Personalization: Customize your laptop, notebook, or any tech gear to reflect your coding journey.Identification: Easily identify your gear at meetups, conferences, or in shared workspaces.",
  },
  {
    id: "7",
    image:
      "https://i.pinimg.com/564x/b1/e3/97/b1e39737454a05c0056d8794fbff6038.jpg",
    name: "Coding id Bored",
    price: 1,
    text: "Inspiration: Show off your love for coding and motivate yourself with tech-themed designs. Community: Represent your favorite programming languages, tools, or memes and connect with fellow coders.Personalization: Customize your laptop, notebook, or any tech gear to reflect your coding journey.Identification: Easily identify your gear at meetups, conferences, or in shared workspaces.",
  },
  {
    id: "8",
    image:
      "https://www.bottleyourbrand.com/media/wysiwyg/dog_wearing_sunglasses_sticker.jpg",
    name: "Dog color",
    price: 2,
    text: "Inspiration: Show off your love for coding and motivate yourself with tech-themed designs. Community: Represent your favorite programming languages, tools, or memes and connect with fellow coders.Personalization: Customize your laptop, notebook, or any tech gear to reflect your coding journey.Identification: Easily identify your gear at meetups, conferences, or in shared workspaces.",
  },
  {
    id: "9",
    image:
      "https://ih1.redbubble.net/image.3664607878.0971/st,small,507x507-pad,600x600,f8f8f8.jpg",
    name: "Cute Frog",
    price: 2,
    text: "Inspiration: Show off your love for coding and motivate yourself with tech-themed designs. Community: Represent your favorite programming languages, tools, or memes and connect with fellow coders.Personalization: Customize your laptop, notebook, or any tech gear to reflect your coding journey.Identification: Easily identify your gear at meetups, conferences, or in shared workspaces.",
  },
];

const Home = () => {
  return (
    <>
      <div className={classes.main}>
        <ShopList stickers={DYMMY_DATA} />
      </div>
    </>
  );
};

export default Home;
