import About from './components/about';
import Header from './components/header';
import Home from './components/home';
import Qualification from './components/qualification';
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
      </main>
    </>
  );
}
