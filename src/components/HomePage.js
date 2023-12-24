import React from "react";

export default function HomePage() {
  return (
    <section
      className="bg-gray-900 dark:bg-gray-900"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background:
            "url(https://miro.medium.com/v2/resize:fit:3840/1*4meylE7NnCdfK9XlOQAGrA.jpeg) no-repeat",
          width: "98vw",
          height: "90vh",
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "center",
         
        }}
      ></div>
      <div
        style={{
          width: "100vw",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0 ,.7)",
          zIndex: "1",
        }}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 relative">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
            Welcome to <span style={{ color: "red" }}> Cinemaa.</span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Best website for movie in cambodia We have alot of movie <br></br>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
      </div>
    </section>
  );
}
