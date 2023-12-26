// ./src/app/page.js
"use client"
import { sanityClient } from '../../sanity';
import imageUrlBuilder from '@sanity/image-url';
import React from 'react';
import Navbar from '../app/component/Navbar';
import About from "../app/component/About"
import Services from "../app/component/Services"
import Projects from "../app/component/Projects"
import Portofolio from "../app/component/Portofolio"
import Work from "../app/component/Work"
import Blog from "../app/component/Blog"
import Contact from "../app/component/Contact"
import Main from "../app/component/Main"





const builder = imageUrlBuilder(sanityClient);



type BlogPost = {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      _ref: string;
    };
  };
  info: any;

  // Add other fields as needed
};
type FetchResult = BlogPost[];

function Page() {
  return (
    <>
      <head>
        <title>Nextjs</title>
      </head>
      <body suppressHydrationWarning={true}   >
        <div id="main" className="relative" >
          <div >
            <Navbar transparentBackground={true} />
            <div>
             <Main/>
              <About />
              <Projects />
              <Services />
              <Portofolio />
              <Work />
              <Blog />
              <Contact/>
            </div>
          </div>
        </div>
        <div>
        </div>
      </body>
    </>
  );
}

export default Page;



