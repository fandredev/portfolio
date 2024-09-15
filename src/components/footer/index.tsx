import { Github, Linkedin } from 'lucide-react';
import './footer.css';

const date = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container ">
        <ul className="footer__list">
          <div className="footer__social">
            <a
              href="https://github.com/fandredev/"
              className="home__social-icon"
              target="_blank"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/devfandre/"
              className="home__social-icon"
              target="_blank"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
          </div>
        </ul>
        <span className="footer__copy">&copy; {date} - Felipe André</span>
      </div>
    </footer>
  );
}
