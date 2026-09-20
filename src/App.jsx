import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <section
          id="home"
          className="flex min-h-[700px] items-center justify-center px-5"
        >
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-500">
              Dev Stack
            </p>

            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Build Your Ideal{" "}
              <span
                style={{
                  backgroundImage: "var(--brand-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Development Stack
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-slate-500">
              Explore frontend, backend, database, and tooling options.
            </p>
          </div>
        </section>

        <section
          id="technologies"
          className="flex min-h-[500px] items-center justify-center bg-slate-50"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Technologies
          </h2>
        </section>

        <section
          id="projects"
          className="flex min-h-[500px] items-center justify-center"
        >
          <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
        </section>

        <section
          id="about"
          className="flex min-h-[500px] items-center justify-center bg-slate-50"
        >
          <h2 className="text-3xl font-bold text-slate-900">About</h2>
        </section>

        <section
          id="contact"
          className="flex min-h-[500px] items-center justify-center"
        >
          <h2 className="text-3xl font-bold text-slate-900">Contact</h2>
        </section>
      </main>
    </div>
  );
};

export default App;