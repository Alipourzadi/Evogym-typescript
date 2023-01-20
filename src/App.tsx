import { useEffect, useState } from "react";
import Navbar from "@/scenes/Navbar";
import Home from "@/scenes/Home";
import Benefits from "@/scenes/Benefits";
import OurClasses from "@/scenes/OurClasses";
import ContactUs from "@/scenes/ContactUs";
import Footer from "@/scenes/Footer";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.HOME
  );
  const [isScroll, setIsScroll] = useState<boolean>(
    window.scrollY == 0 ? false : true
  );

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY == 0) {
        setIsScroll(false);
        setSelectedPage(SelectedPage.HOME);
      }
      if (window.scrollY != 0) setIsScroll(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [window.scrollY]);

  return (
    <>
      <header className="app bg-gray-50">
        <Navbar
          isScroll={isScroll}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </header>
      <main>
        <Home setSelectedPage={setSelectedPage} />
      </main>
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </>
  );
}

export default App;
