import React, { useContext } from "react";
import { useSelectedStudent } from "../../../context/SelectedStudentContext";
import { StudentContext } from "../../../context/StudentContext";
import Table from "../../uiComponents/Table/Table";

const ViewStudentList = () => {
  const { students, deleteStudentFromList } = useContext(StudentContext);
  const { setSelectedStudent } = useSelectedStudent();

  const columns = [
    { header: "Name", key: "name" },
    { header: "Age", key: "age" },
    { header: "Class", key: "studentClass" },
    { header: "Phone Number", key: "phoneNumber" },
  ];

  const handleUpdate = (student) => {
    setSelectedStudent(student); 
  };

  const handleDelete = async(id) => {
    const deleteResponse = await deleteStudentFromList(id);
  };

  return (
    <div>
    <h2>Student List</h2>
      <Table
        columns={columns}
        data={students}
        updateData={handleUpdate}
        deleteData={handleDelete}
      />
    </div>
  );
};

export default ViewStudentList;
