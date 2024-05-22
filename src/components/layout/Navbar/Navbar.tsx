import { GoArrowUpRight } from "react-icons/go";

export const Navbar = () => {
  return (
    <header className="w-full md:w-10/12 m-auto rounded-md mt-2 p-4">
      <nav className="flex justify-between items-center">
        <div className="logo text-xl md:text-3xl">VaibhavWrites.</div>

        <div className="visit-my-portfolio">
          <a
            href="https://kumarvaibhav.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 items-center border border-gray-500 p-2 rounded-lg"
          >
            Portfolio <GoArrowUpRight className="" />
          </a>
        </div>
      </nav>
    </header>
  );
};
