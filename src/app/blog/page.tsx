"use client"
import { sanityClient } from '../../../sanity';
import React, { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import Navbar from "../component/Navbar"
import { useRouter } from 'next/navigation';
import Goback from "../component/Goback"
import Image from 'next/image';



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

function urlFor(source: any) {
  return builder.image(source);
}

const Page = () => {
  const [data, setData] = useState<FetchResult | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Sanity.io for the "blog" content type
        const result: FetchResult = await sanityClient.fetch('*[_type == "blog"]');
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const router = useRouter();
  const handleReadMoreClick = async (blogItem: BlogPost) => {
    try {
      const slug = blogItem.slug.current.trim().replace(/\s+/g, '');
      const result: FetchResult = await sanityClient.fetch(
        `*[_type == "blog" && slug.current == $slug]`,
        { slug }
      );
      console.log(result);
  
      // Ensure that the result is not empty before navigating
      if (result && result.length > 0) {
        router.push(`/blog/${slug}`);
      } else {
        console.error('No matching blog found for slug:', slug);
        // Handle the case where no matching blog is found
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error as needed
    }
  };
  


  return (
    <>
       <Goback/>
      <div className='p-10  bg-black  pb-52'>

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

                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer"
                  onClick={() => handleReadMoreClick(blogItem)}
                >
                  Read More
                </span>
              </div>
              <div className="bg-[#4C3799] py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-white">{blogItem.name}</span>
                {/* Handle the rich text field appropriately */}
                <div className="block pt-2 font-body text-black">
                  
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}


export default Page
