"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { sanityClient } from '../../../sanity';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
const builder = imageUrlBuilder(sanityClient);

function urlFor(source: any) {
  return builder.image(source);
}

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

const Blog = () => {
  const [data, setData] = useState<FetchResult | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Sanity.io for the "blog" content type
        const result: FetchResult = await sanityClient.fetch('*[_type == "blog"][0...3]');
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const router = useRouter() as any ;
  const handleReadMoreClick = (blogItem: BlogPost) => {
    const trimmedSlug = blogItem.slug.current.trim();
    router.push(`/blog/${trimmedSlug}`);
  };

  const showblogs = () => {
    router.push('/blog')
  }
  
  
  

 
  return (
    <div>
      <div className="bg-black" id="blog">
        <div className="container py-16 md:py-20">
          <h2
            className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
          >
            I also like to write
          </h2>
          <h4
            className="pt-6 text-center font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl"
          >
            Check out my latest posts!
          </h4>
          <div
            className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"
          >
            {data && data.map((blogItem: BlogPost) => (
              <a key={blogItem._id} className="shadow">
                <div className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                  <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-100 transition-opacity group-hover:opacity-80">
                    {blogItem.image && (
                   <Image
                   width={400}
                   height={400}
                   src={urlFor(blogItem.image).url()}
                   alt={blogItem.name}
                   style={{
                     maxWidth: '100%',
                     height: '100%',
                     objectFit: 'cover',
                     width: "100%",
                   }}
                 />
                 
                   
                    )}
                  </span>
                </div>
                <div className="bg-white py-6 px-5 xl:py-8">
                  <span className="block font-body text-lg font-semibold text-black">{blogItem.name}</span>
                   <button className='text-white bg-black  border-2 border-black w-40 h-14 rounded-full ml-48 mt-3 hover:bg-primary hover:scale-95'
                    onClick={() => handleReadMoreClick(blogItem)}
                   >
                    Read more
                   </button>
                  <div className="block pt-2 font-body text-grey-20">
                    
                  </div>
                  
                </div>
              </a>
            ))}
          </div>
          <button type="button" className="text-white bg-primary hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-10 w-72  h-16 " style={{marginLeft : "30rem"}} onClick={showblogs}>Check out my all blogs</button>
        </div>
      </div>
    </div>
  )
}

export default Blog
