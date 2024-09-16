import About from './components/about';
import Contact from './components/contact/contact';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Qualification from './components/qualification';
import ScrollUp from './components/scroll-up';
import Skills from './components/skills';

export default function Portfolio() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
