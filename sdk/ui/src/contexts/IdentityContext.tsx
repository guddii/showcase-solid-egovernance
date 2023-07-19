"use client";
import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSession } from "@inrupt/solid-ui-react";
import { WebId } from "solid";

interface IIdentityContext {
  webId: WebId;
  setWebId: Dispatch<React.SetStateAction<WebId>>;
  drawerIdentityOpen: boolean;
  setDrawerIdentityOpen: Dispatch<React.SetStateAction<boolean>>;
}

const IdentityContext = createContext<IIdentityContext | undefined>(undefined);

export function IdentityProvider({ children }: { children: React.ReactNode }) {
  const { session } = useSession();
  const [webId, setWebId] = useState("");
  const [drawerIdentityOpen, setDrawerIdentityOpen] = useState(false);

  useEffect(() => {
    if (session.info.webId) {
      setWebId(session.info.webId);
    }
  }, [session.info.webId]);

  const value: IIdentityContext = {
    webId,
    setWebId,
    drawerIdentityOpen,
    setDrawerIdentityOpen,
  };

  return (
    <IdentityContext.Provider value={value}>
      {children}
    </IdentityContext.Provider>
  );
}

export function useIdentity() {
  const context = useContext(IdentityContext);
  if (context === undefined) {
    throw new Error("useIdentity must be used within a IdentityProvider");
  }
  return context;
}
