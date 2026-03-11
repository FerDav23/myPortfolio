import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { ResumeModal } from "./components/ResumeModal";
import { Skills } from "./components/Skills";
import { MobileApp } from "./components/MobileApp";
import { useIsMobile } from "./useIsMobile";

const DARK_MODE_KEY = "portfolio-theme";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem(DARK_MODE_KEY);
    return savedTheme ? savedTheme === "dark" : true;
  });

  const isMobile = useIsMobile(768);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      window.localStorage.setItem(DARK_MODE_KEY, "dark");
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem(DARK_MODE_KEY, "light");
    }
  }, [isDarkMode]);

  if (isMobile) {
    return (
      <MobileApp
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
      />
    );
  }

  return (
    <>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode((prev) => !prev)} />
      <main>
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      {resumeModalOpen && <ResumeModal onClose={() => setResumeModalOpen(false)} />}
    </>
  );
}
