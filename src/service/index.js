import React, { useState, createContext } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <ProjectContext.Provider value={{ value1: [isModal, setIsModal] }}>
      {children}
    </ProjectContext.Provider>
  );
};
