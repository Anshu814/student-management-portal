import React, { createContext, useContext, useState } from "react";

export const SelectedStudentContext = createContext();

export const useSelectedStudent = () => {
  return useContext(SelectedStudentContext);
};

const SelectedStudentProvider = ({ children }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <SelectedStudentContext.Provider value={{ selectedStudent, setSelectedStudent }}>
      {children}
    </SelectedStudentContext.Provider>
  );
};

export default SelectedStudentProvider;
