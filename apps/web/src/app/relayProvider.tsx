"use client";

import { useMemo } from "react";
import { getEnvironment } from "../relay/environment";
import { ReactRelayContext } from "react-relay";

export default function RelayProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const environment = useMemo(() => getEnvironment(), []);

  return (
    <ReactRelayContext.Provider value={{ environment }}>
      {children}
    </ReactRelayContext.Provider>
  );
};

