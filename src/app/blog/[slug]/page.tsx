"use client"
import { sanityClient } from '../../../../sanity';
import React, { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import Goback from "../../component/Goback"
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
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
  releaseDate : string;
  content : any;

  // Add other fields as needed
};
type FetchResult = BlogPost[];

function urlFor(source: any) {
  return builder.image(source);
}

const Page = ({ params }: any) => {
  const router = useRouter() as any;
  const [data, setData] = useState<FetchResult | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const decodedSlug = decodeURIComponent(params.slug);
        const result: FetchResult = await sanityClient.fetch(`*[_type == "blog" && slug.current ==   "${decodedSlug}"] `);
        setData(result);
        console.log(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params.slug]);
  return (
    <>
      {data && data.map((blogItem: BlogPost) => (
        <a key={blogItem._id} className="shadow">
          <div id="main" className="relative">
             <Goback/>
            <div className='bg-black'>
              <div className="container py-6 md:py-10">
                <div className="mx-auto max-w-4xl">
                  <div>

                    <h1
                      className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl mt-10"
                    >
                      {blogItem.name}
                    </h1>
                    <div className="flex items-center pt-5 md:pt-10">
                      <div>
                        <Image
                        width={200}
                        height={200}
                          src={urlFor(blogItem.image).url()}
                          alt={blogItem.name}
                          className="h-52 w-52 rounded-full border-2 border-white shadow"
                        
                        />

                      </div>
                      <div className="pl-5">
                        <span className="block font-body text-xl font-bold text-grey-10"
                        >By Riddhi Chavan </span>

                        <span className="block pt-1 font-body text-xl font-bold text-grey-30"
                        >{blogItem.releaseDate}</span>

                      </div>
                    </div>
                  </div>
                  <div className="prose max-w-none pt-8">
                    <div className="block pt-2 font-body text-white">
                      {blogItem.info ? (
                        Array.isArray(blogItem.info) ? (
                          <div>
                            {blogItem.info.map((paragraph: any, index: number) => (
                              <p key={index}>{paragraph.children.map((child: any) => child.text).join(' ')}</p>
                            ))}
                          </div>
                        ) : (
                          <p>{blogItem.info[0]?.children}</p>
                        )
                      ) : (
                        'No info available'
                      )}


                    </div>
                    <div className="flex pt-10">
                      <a
                        href="/"
                        className="rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20"
                      >  <FontAwesomeIcon icon={faThumbsUp} /></a>

                      <a
                        href="/"
                        className="ml-2 block rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20"
                      > <FontAwesomeIcon icon={faThumbsDown} className="flip-horizontal" /></a>

                    </div>
                    <div className="mt-10 flex justify-between border-t border-lila py-12 bg-primary">
                      
                    </div>
                    <div
                      className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20"
                    >
                      <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                        <Image
                        width={200}
                        height={200}
                          src="/myself.jpeg"
                          className="rounded-full shadow"
                          alt="author image"
                        />
                      </div>
                      <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left ">
                        <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0  " style={{color :"white"}}>
                        Thank You for Reading! 🚀
                        </h3>
                        <p
                          className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9 "style={{color :"white"}}
                        >
                          {blogItem.content ? (
                        Array.isArray(blogItem.content) ? (
                          <div>
                            {blogItem.content.map((paragraph: any, index: number) => (
                              <p key={index}>{paragraph.children.map((child: any) => child.text).join(' ')}</p>
                            ))}
                          </div>
                        ) : (
                          <p>{blogItem.content[0]?.children}</p>
                        )
                      ) : (
                        'No info available'
                      )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </div >
        </a>
      ))}
    </>
  )
}

export default Page
