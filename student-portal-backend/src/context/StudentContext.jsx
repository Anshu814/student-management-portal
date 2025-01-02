import { createContext, useEffect, useState } from "react";
import { createStudent, deleteStudent, getAllStudents, updateStudent } from "../services/api";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getAllStudents();
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const addStudent = async (newStudent) => {
    try {
      const response = await createStudent(newStudent);
      if (response.status === 201) {
        setStudents((prev) => [...prev, response.data]);
      }
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const updateExistingStudent = async (id, updatedStudent) => {
    try {
      const response = await updateStudent(id, updatedStudent);
      if (response.status === 200) {
        // Update the student in the state
        setStudents((prev) =>
          prev.map((student) =>
            student.id === id ? { ...student, ...updatedStudent } : student
          )
        );
      }
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const deleteStudentFromList = async (id) => {
    try {
      const response = await deleteStudent(id);
      console.log("delete", response)
      if (response.status === 204) {
        setStudents((prev) => prev.filter((student) => student.id !== id));
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        updateExistingStudent,
        deleteStudentFromList,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
