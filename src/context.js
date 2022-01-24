import React, { useState } from "react";

const TestContext = React.createContext({});
export const TestContextProvider = ({ children }) => {
  const state = useState("");

  return <TestContext.Provider value={state}>{children}</TestContext.Provider>;
};

export const useTestContext = () => {
  const context = React.useContext(TestContext);
  if (context === undefined) {
    throw new Error("Cannot use outside of the provider");
  }
  return context;
};
