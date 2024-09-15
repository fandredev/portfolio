import { ArrowUp } from 'lucide-react';
import './scroll-up.css';
import { useScrollVisibility } from '../../hooks/use-scroll-visibility';

export default function ScrollUp() {
  useScrollVisibility();

  return (
    <a href="#" className="scrollup">
      <ArrowUp strokeWidth={1} className="scrollup__icon" />
    </a>
  );
}
