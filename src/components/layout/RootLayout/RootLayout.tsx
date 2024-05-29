import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="h-full w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
