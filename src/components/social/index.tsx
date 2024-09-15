import { Github, Linkedin } from 'lucide-react';

export default function Social() {
  return (
    <div className="home__social">
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
  );
}
