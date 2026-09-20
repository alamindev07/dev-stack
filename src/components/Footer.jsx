import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/src/assets/logo-text.png"
                alt="Dev Stack"
                className="h-8 w-auto object-contain"
              />
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Explore modern technologies, discover powerful tools, and build
              your ideal development stack for your next project.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                <FiGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                <FiLinkedin />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                <FiTwitter />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#technologies"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#stack"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                >
                  Your Stack
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#contact"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                >
                  Community
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                >
                  Cookie Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm">
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-slate-700"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-slate-700"
            >
              Terms
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-500 transition-colors hover:text-slate-900"
            >
              Back to top
              <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;