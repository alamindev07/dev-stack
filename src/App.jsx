import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoadingSpinner from "./components/LoadingSpinner";
import TechnologyGrid from "./components/TechnologyGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

const App = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load technologies from JSON
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technology data.");
        }

        const data = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load technologies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // Add technology to stack
  const handleAddToStack = (technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id,
    );

    // Duplicate check
    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemoveFromStack = (technologyId) => {
    const technologyToRemove = selectedTechnologies.find(
      (item) => item.id === technologyId,
    );

    setSelectedTechnologies((currentStack) =>
      currentStack.filter((item) => item.id !== technologyId),
    );

    if (technologyToRemove) {
      toast.info(`${technologyToRemove.name} removed from your stack.`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        <section
          id="technologies"
          className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            {/* Section Heading */}
            <div className="mb-10">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-pink-500">
                Technology Stack
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Explore{" "}
                <span
                  style={{
                    backgroundImage: "var(--brand-gradient)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Technologies
                </span>
              </h2>

              <p className="mt-3 max-w-2xl text-slate-500">
                Pick technologies to build your ideal development stack.
              </p>
            </div>

            {/* Loading */}
            {loading && <LoadingSpinner />}

            {/* Error */}
            {!loading && error && (
              <div className="rounded-xl border border-red-100 bg-red-50 p-6 text-center">
                <p className="font-medium text-red-600">
                  {error}
                </p>
              </div>
            )}

            {/* Technology Content */}
            {!loading && !error && (
              <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                <TechnologyGrid
                  technologies={technologies}
                  selectedTechnologies={selectedTechnologies}
                  onAdd={handleAddToStack}
                />

                <YourStack
                  selectedTechnologies={selectedTechnologies}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            )}
          </div>
        </section>
      </main>


      {/* Footer section  start */}
            <Footer />


      {/* Toast Notification */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
};

export default App;