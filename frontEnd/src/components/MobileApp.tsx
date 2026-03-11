import { useState } from "react";
import { MobileAbout } from "./MobileAbout";
import { MobileEducation } from "./MobileEducation";
import { MobileExperience } from "./MobileExperience";
import { Footer } from "./Footer";
import { MobileHero } from "./MobileHero";
import { MobileNavbar } from "./MobileNavbar";
import { MobileSkills } from "./MobileSkills";
import { MobileProjects } from "./MobileProjects";
import { MobileContact } from "./MobileContact";
import { ResumeModal } from "./ResumeModal";

type MobileAppProps = {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
};

export function MobileApp({ isDarkMode, onToggleDarkMode }: MobileAppProps) {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <>
      <MobileNavbar isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <main className="mobile-main">
        <MobileHero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <MobileAbout />
        <MobileSkills />
        <MobileEducation />
        <MobileExperience />
        <MobileProjects />
        <MobileContact />
      </main>
      <Footer />
      {resumeModalOpen && <ResumeModal onClose={() => setResumeModalOpen(false)} />}
    </>
  );
}

