import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-h-[620px] items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          {/* ==========================================
              HERO CONTENT
          ========================================== */}
          <div className="max-w-2xl">
            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[52px] xl:text-[56px]">
              Build Your Ideal
              <br />

              <span
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent"
              >
                Development Stack
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Primary Button */}
              <a
                href="#technologies"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                Explore Technologies
              </a>

              {/* Secondary Button */}
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* ==========================================
              HERO IMAGE
          ========================================== */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src={bannerStack}
              alt="Development technology stack"
              className="w-[260px] object-contain drop-shadow-xl sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[440px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;