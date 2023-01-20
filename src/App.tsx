import Navbar from "@/scenes/Navbar";
import Home from "@/scenes/Home";
import Benefits from "@/scenes/Benefits";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.HOME
  );
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.screenY == 0) {
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
    </>
  );
}

export default App;
