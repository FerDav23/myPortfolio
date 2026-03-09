import { MobileAbout } from "./MobileAbout";
import { MobileEducation } from "./MobileEducation";
import { MobileExperience } from "./MobileExperience";
import { Footer } from "./Footer";
import { MobileHardware } from "./MobileHardware";
import { MobileHero } from "./MobileHero";
import { MobileNavbar } from "./MobileNavbar";
import { MobileSkills } from "./MobileSkills";
import { MobileProjects } from "./MobileProjects";
import { MobileContact } from "./MobileContact";

type MobileAppProps = {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
};

export function MobileApp({ isDarkMode, onToggleDarkMode }: MobileAppProps) {
  return (
    <>
      <MobileNavbar isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <main className="mobile-main">
        <MobileHero />
        <MobileAbout />
        <MobileSkills />
        <MobileEducation />
        <MobileExperience />
        <MobileProjects />
        <MobileHardware />
        <MobileContact />
      </main>
      <Footer />
    </>
  );
}

