import About from "components/about";
import Contact from "components/contact";
import Header from "components/header";
import Home from "components/home";
import Qualification from "components/qualification";
import ScrollUp from "components/scrollup";
import ListSkills from "components/skills";
import Work from "components/work";

export default function Portfolio() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
      <About />
      <ListSkills />
      <Work />
      <Qualification />
      <Contact />
      <ScrollUp />
    </>
  );
}
