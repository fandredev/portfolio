import { ReactNode } from "react";
import "./loader.css";

interface LoaderProps {
  children: ReactNode;
}

export default function Loader({ children }: LoaderProps) {
  return (
    <div className="container-loader" role="alert">
      <span className="spinner"></span>
      {children}
    </div>
  );
}
