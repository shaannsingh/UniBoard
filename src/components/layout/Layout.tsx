import Navbar from "./Navbar";
import Footer from "./Footer";
import { type PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <main className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
