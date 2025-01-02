import React, { useContext, useEffect, useState } from "react";
import { useSelectedStudent } from "../../../context/SelectedStudentContext";
import { StudentContext } from "../../../context/StudentContext";
import validatePhone from "../../../utils/validation";
import Button from "../../uiComponents/Button/Button";
import Card from "../../uiComponents/Card/Card";
import InputWithLabel from "../../uiComponents/InputWithLabel/InputWithLabel";
import "./AddStudent.css";

const AddStudent = () => {
  const { selectedStudent, setSelectedStudent } = useSelectedStudent();  
  const { addStudent, updateExistingStudent } = useContext(StudentContext);
  
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    studentClass: "",
    phoneNumber: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (selectedStudent) {
      setFormData({
        name: selectedStudent.name,
        age: selectedStudent.age,
        studentClass: selectedStudent.studentClass,
        phoneNumber: selectedStudent.phoneNumber,
      });
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedStudent) {
      updateExistingStudent(selectedStudent.id, formData); 
      setSelectedStudent(null);  
    } else {
      addStudent(formData);
    }
    setFormData({ name: "", age: "", studentClass: "", phoneNumber: "" });
  };

  const validateForm = () => {
    const { name, age, studentClass, phoneNumber } = formData;
    const isValid = name && age && studentClass && phoneNumber && !isNaN(age);
    setIsFormValid(isValid);
  };

  return (
    <Card heading={selectedStudent ? "Update Student" : "Add New Student"} description={selectedStudent ? "Update the student's information." : "Please fill out the form to add a new student"}>
      <form className="add-student-form">
        <InputWithLabel
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter student's name"
        />
        <InputWithLabel
          label="Age"
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter student's age"
        />
        <InputWithLabel
          label="Class"
          type="text"
          name="studentClass"
          value={formData.studentClass}
          onChange={handleChange}
          placeholder="Enter student's class"
        />
        <InputWithLabel
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter student's phone number"
          errorText = {formData.phoneNumber && !validatePhone(formData.phoneNumber) ? 'Phone number should be of 10 digit': ''}
        />
        <Button 
          text={selectedStudent ? "Update Student" : "Add Student"} 
          onClick={handleSubmit}
          disabled={!isFormValid}
        />
      </form>
    </Card>
  );
};

export default AddStudent;
