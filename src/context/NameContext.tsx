import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface NameContext {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

interface NameProviderProps {
  children: ReactNode;
}

const NameContext = createContext<NameContext | undefined>(undefined);

export function NameProvider({ children }: NameProviderProps) {
  const [name, setName] = useState("Felipe André");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
}

export default NameContext;
