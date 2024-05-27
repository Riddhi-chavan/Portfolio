import Image from "next/image";
import React from "react";

const projects = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat  "
        style={{ backgroundImage: "url(img/bg-hero.jpg)" }}
      >
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat "></div>
        <div
          className="container py-16  text-white relative z-30 "
          id="projects"
        >
          <h2 className="text-center font-header text-black text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl">
            Check out my Projects
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium sm:text-2xl lg:text-3xl mb-10">
            Here is what I have done in the past
          </h3>
          <div className="text-white p-4 justify-between flex flex-col lg:flex-row">
            {/* Top: Details */}
            <div className="lg:order-1 ">
              <div className="text-3xl font-bold mb-2 text-grey-30">
                Stock Management
              </div>
              <div className="mb-4 max-w-md">
                Efficiently manage your inventory with my stock management
                website built using Next.js and MongoDB. This user-friendly
                platform allows you to seamlessly add, edit, and monitor
                products, quantities, and prices in real-time. The Add to
                Product component simplifies data entry, and the list view
                provides quick insights. Experience the power of streamlined
                inventory management with this Next.js and MongoDB integration.
              </div>
              <a
                href="https://stock-management-bay.vercel.app/"
                target="_blank"
              >
                <button className="text-white bg-black border-2 border-black w-40 h-14 rounded-full mt-3 hover:bg-primary hover:scale-95">
                  View Project
                </button>
              </a>
            </div>
            <div className="lg:order-2 mt-4 lg:mt-0 transition-transform transform hover:-translate-y-2">
              <img
                width={200}
                height={200}
                src="/stock.png"
                alt="Stock Image"
                className="object-cover w-full h-72 rounded-lg"
              />
            </div>
          </div>
          <div className="text-white p-4 justify-between flex flex-col lg:flex-row">
            {/* Top: Details */}
            <div className="lg:order-2  order-1 ">
              <div className="text-3xl font-bold mb-2 text-grey-30">
                Trello-App
              </div>
              <div className="mb-4 max-w-md">
                Trello-App is your ultimate task management solution, built with
                Next.js, TypeScript, and Appwrite. Seamlessly organize todos
                with drag-and-drop columns, utilize powerful search
                functionality, and leverage ChatGPT for user data summarization.
                This user-friendly app combines the efficiency of
                React-Beautiful-DND for smooth task transitions, Tailwind CSS
                for stunning UIs, and Zustand for lightweight state management.
                Elevate your productivity with Trello-App modern features,
                offering an intuitive interface and advanced functionalities for
                efficient task organization and completion.
              </div>
              <a href="https://trello-app-swart.vercel.app/" target="_blank">
                <button className="text-white bg-black border-2 border-black w-40 h-14 rounded-full mt-3 hover:bg-primary hover:scale-95">
                  View Project
                </button>
              </a>
            </div>
            <div className="lg:order-1 order-2 mt-6 lg:mt-0 transition-transform transform hover:-translate-y-2 ">
              <img
                width={200}
                height={200}
                src="/Trello.png"
                alt="Stock Image"
                className="object-cover w-full h-72 rounded-lg"
              />
            </div>
          </div>
          <div className="text-white p-4 justify-between flex flex-col lg:flex-row">
            {/* Top: Details */}
            <div className="lg:order-1 ">
              <div className="text-3xl font-bold mb-2 text-grey-30">
                The Live News
              </div>
              <div className="mb-4 max-w-md">
                A dynamic Live News app fueled by the robust Media Stack API.
                Crafted with Next.js, TypeScript, and featuring dynamic routing,
                this app offers a seamless news browsing experience. Users can
                effortlessly explore diverse categories, conduct searches, and
                switch to a sleek dark mode. The app also enhances readability
                with a Read More feature that unveils the full article.
                Engineered for responsiveness and aesthetics, it boasts a blend
                of technologies, including Tailwind CSS, React-Timago, and
                HeroIcons. Elevate your news consumption with this immersive and
                stylish application.
              </div>
              <a href="https://the-live-news.vercel.app/" target="_blank">
                <button className="text-white bg-black border-2 border-black w-40 h-14 rounded-full mt-3 hover:bg-primary hover:scale-95">
                  View Project
                </button>
              </a>
            </div>
            <div className="lg:order-2 mt-4 lg:mt-0 transition-transform transform hover:-translate-y-2">
              <img
                width={200}
                height={200}
                src="/TheLiveNews.png"
                alt="Stock Image"
                className="object-cover w-full h-72 rounded-lg"
              />
            </div>
          </div>
          <div className="text-white p-4 justify-between flex flex-col lg:flex-row">
            {/* Top: Details */}
            <div className="lg:order-2  order-1 ">
              <div className="text-3xl font-bold mb-2 text-grey-30">
                Digital-hippo-marketplace
              </div>
              <div className="mb-4 max-w-md">
                Hippo Marketplace is a sophisticated digital platform where
                users can purchase UI kits and icon files with real money. The
                site features a robust seller dashboard and admin panel powered
                by Payload CMS, alongside secure payment processing via Stripe.
                Built with Next.js, MongoDB, and Tailwind CSS, the marketplace
                is fully responsive and efficient. User verification is managed
                through Nodemailer, ensuring secure transactions. The platform
                also incorporates Swiper for interactive elements and Zustand
                for state management, allowing users to effortlessly add,
                remove, and buy digital assets from their cart. This
                well-structured site offers a seamless and intuitive experience
                for both buyers and sellers.
              </div>
              <a
                href="https://digital-hippo-production-526d.up.railway.app/"
                target="_blank"
              >
                <button className="text-white bg-black border-2 border-black w-40 h-14 rounded-full mt-3 hover:bg-primary hover:scale-95">
                  View Project
                </button>
              </a>
            </div>
            <div className="lg:order-1 order-2 mt-6 lg:mt-0 transition-transform transform hover:-translate-y-2 ">
              <img
                width={200}
                height={200}
                src="/digital-hippo-home.png"
                alt="Stock Image"
                className="object-cover w-full h-72 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
