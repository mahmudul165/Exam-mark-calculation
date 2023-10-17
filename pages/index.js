import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ExamForm() {
  

  const [teacherName, setTeacherName] = useState(); // Add teacherName state
  const [numStudents, setNumStudents] = useState(1);
  const [examName, setExamName] = useState("CT");
  const [classValue, setClassValue] = useState("");
  const [section, setSection] = useState("");
  const [numTests, setNumTests] = useState(1);

  // const [schoolName, setSchoolName] = useState('');
  const [studentData, setStudentData] = useState([]);
  const [averageMarks, setAverageMarks] = useState([]);

  // validation
  // const [teacherNameValid, setTeacherNameValid] = useState(true);
  const [numStudentsValid, setNumStudentsValid] = useState(false);
  const [classValueValid, setClassValueValid] =useState(false);
  const [sectionValid, setSectionValid] = useState(false);
  const [numTestsValid, setNumTestsValid] = useState(false);
  const [examNameValid, setExamNameValid] = useState(false);
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   if (name === "teacherName") setTeacherName(value);
  //   if (name === "numStudents") setNumStudents(value);
  //   if (name === "examName") setExamName(value);
  //   if (name === "numTests") setNumTests(value);
  //   if (name === "schoolName") setSchoolName(value);
  //   if (name === "classValue") setClassValue(value);
  //   if (name === "section") setSection(value);
  // };
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "teacherName") {
      setTeacherName(value);
      // setTeacherNameValid(value !== '');
    }
    if (name === "numStudents") {
      setNumStudents(value);
      setNumStudentsValid(value !== "" && !isNaN(value));
    }
    if (name === "classValue") {
      setClassValue(value);
      setClassValueValid(value !== "");
    }
    if (name === "section") {
      setSection(value);
      setSectionValid(value !== "");
    }
    if (name === "numTests") {
      setNumTests(value);
      setNumTestsValid(value !== "" && !isNaN(value));
    }
    if (name === "examName") {
      setExamName(value);
      setExamNameValid(value !== "");
    }
    // ... (similarly for other fields)
  };
  const showToastError = () => {
    const errorMessages = [];
  
    if (!numStudentsValid) {
      errorMessages.push('Number of Students is missing or invalid.');
    }
  
    if (!classValueValid) {
      errorMessages.push('Class is missing.');
    }
  
    if (!sectionValid) {
      errorMessages.push('Section is missing.');
    }
  
    if (!numTestsValid) {
      errorMessages.push('Number of Tests is missing or invalid.');
    }
  
    if (!examNameValid) {
      errorMessages.push('Exam Name is missing.');
    }
  
    if (errorMessages.length > 0) {
      toast.error('Validation failed. Please check the following fields:\n' + errorMessages.join('\n'));
    }
  };
  
  const validateFields = () => {
    if (numStudentsValid && classValueValid && sectionValid && numTestsValid && examNameValid) {
      
      return true;
       
    }
    showToastError();
    return false;
  };
  
  const generateFields = () => {
    if (validateFields()) {
      const newStudentData = [];

      for (let i = 1; i <= numStudents; i++) {
        const student = {
          Roll: i,
          examMarks: {},
        };

        for (let j = 1; j <= numTests; j++) {
          student.examMarks[`${examName}-${j}`] = "";
        }

        newStudentData.push(student);
      }

      setStudentData(newStudentData);
    }
  };

  const calculateAverage = () => {
    if (validateFields()) {
      const updatedStudentData = [...studentData];
      const updatedAverageMarks = [];

      updatedStudentData.forEach((student) => {
        const examMarkValues = Object.values(student.examMarks).map(Number);
        const totalMarks = examMarkValues.reduce((acc, mark) => acc + mark, 0);
        const averageMark = totalMarks / examMarkValues.length || 0;

        let finalMark;
        const decimalPart = averageMark - Math.floor(averageMark);
        if (decimalPart >= 0.5) {
          finalMark = Math.ceil(averageMark);
        } else if (decimalPart >= 0.1) {
          finalMark = Math.round(averageMark);
        } else {
          finalMark = Math.floor(averageMark);
        }

        student.averageMark = parseFloat(averageMark.toFixed(4));
        student.finalMark = finalMark;
        updatedAverageMarks.push(averageMark);
      });

      setStudentData(updatedStudentData);
      setAverageMarks(updatedAverageMarks);
    }
  };

  const exportToExcel = () => {
    if (validateFields()) {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([[]]);

    const boldFont18 = { font: { sz: 18, bold: true } };
    const lightBackground = { fill: { fgColor: { rgb: "FFFFCC" } } };

    const setSchoolInfo = (worksheet) => {
      // Define school info style
      const schoolInfoStyle = {
        font: { sz: 16 },
        alignment: { horizontal: "center", vertical: "center" },
      };

      // Replace these variables with the actual values
      const schoolName = "Ideal School and College";
      // const teacherName = "John Doe"; // Add your teacher's name here
      // const classValue = "Class 10"; // Add your class value here
      // const section = "A"; // Add your section here
      const examName = "Final Exam";

      XLSX.utils.sheet_add_json(worksheet, [{ "School Info": "" }], {
        header: ["School Info"],
        skipHeader: true,
        origin: "A1",
      });

      // Apply style to labels and values
      worksheet["A2"] = { t: "s", v: "School Name:", s: boldFont18 };
      worksheet["B2"] = {
        t: "s",
        v: schoolName,
        s: { ...schoolInfoStyle, ...lightBackground },
      };

      worksheet["A3"] = { t: "s", v: "Teacher Name:", s: boldFont18 };
      worksheet["B3"] = {
        t: "s",
        v: teacherName,
        s: { ...schoolInfoStyle, ...lightBackground },
      };

      worksheet["A4"] = { t: "s", v: "Class:", s: boldFont18 };
      worksheet["B4"] = {
        t: "s",
        v: classValue,
        s: { ...schoolInfoStyle, ...lightBackground },
      };

      worksheet["A5"] = { t: "s", v: "Section:", s: boldFont18 };
      worksheet["B5"] = {
        t: "s",
        v: section,
        s: { ...schoolInfoStyle, ...lightBackground },
      };

      worksheet["A6"] = { t: "s", v: "Exam Name:", s: boldFont18 };
      worksheet["B6"] = {
        t: "s",
        v: examName,
        s: { ...schoolInfoStyle, ...lightBackground },
      };

      return 7; // The next row after school information
    };

    const addStudentDataToWorksheet = (worksheet, startRow) => {
      const headerRow = [
        "Roll",
        ...Object.keys(studentData[0].examMarks),
        "Average",
        "Final Mark",
      ];

      const headerStyle = {
        font: { bold: true, sz: 18 },
        alignment: { horizontal: "center", vertical: "center" },
        fill: { fgColor: { rgb: "FFFFCC" } },
      };

      XLSX.utils.sheet_add_aoa(worksheet, [headerRow], {
        header: headerRow,
        skipHeader: true,
        origin: "A" + startRow,
        style: headerStyle,
      });

      const formattedStudentData = studentData.map((student) => [
        student.Roll,
        ...Object.values(student.examMarks),
        student.averageMark,
        student.finalMark,
      ]);

      const dataStyle = {
        alignment: { horizontal: "center", vertical: "center" },
        fill: { fgColor: { rgb: "FFFFCC" } },
      };

      XLSX.utils.sheet_add_aoa(worksheet, formattedStudentData, {
        skipHeader: true,
        origin: "A" + (startRow + 1),
        style: dataStyle,
      });
    };

    const schoolInfoStartRow = setSchoolInfo(worksheet);

    // Add 5 empty rows
    for (let i = 0; i < 5; i++) {
      XLSX.utils.sheet_add_json(worksheet, [{ "": "" }], {
        skipHeader: true,
        origin: "A" + (schoolInfoStartRow + i),
      });
    }

    addStudentDataToWorksheet(worksheet, schoolInfoStartRow + 5);

    // Generate the file name based on class, section, and exam name
    const fileName = `Class_${classValue}_Section_${section}_${examName}_Mark.xlsx`;

    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, fileName);
  };
}
  useEffect(() => {
    // Dynamically update column names when examName changes
    const updatedStudentData = [...studentData];
    updatedStudentData.forEach((student) => {
      student.examMarks = {};
      for (let j = 1; j <= numTests; j++) {
        student.examMarks[`${examName}-${j}`] = "";
      }
    });
    setStudentData(updatedStudentData);
  }, [numTests, examName]);

  return (
    <div className="container mt-5 mb-5">
       <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="text-center text-primary fs-3 fw-bolder">
        Exam Mark Calculator
      </h1>
      <form>
        {/* <div className="mb-2">
          <label htmlFor="teacherName" className="form-label">
            Teacher Name:
          </label>
          <input           
            type="text"
            name="teacherName"
            value={teacherName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="classValue" className="form-label">
            Class:
          </label>
          <input
          
            type="text"
            name="classValue"
            value={classValue}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="section" className="form-label">
            Section:
          </label>
          <input
           
            type="text"
            name="section"
            value={section}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="numStudents" className="form-label">
            Number of Students:
          </label>
          <input
           
            type="number"
            name="numStudents"
            value={numStudents}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="examName" className="form-label">
            Exam Name:
          </label>
          <select
         
            name="examName"
            value={examName}
            onChange={handleChange}
            className="form-select"
          >
            <option value="CT">CT</option>
            <option value="CW">CW</option>
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="numTests" className="form-label">
            Number of Tests:
          </label>
          <input
          
            type="number"
            name="numTests"
            value={numTests}
            onChange={handleChange}
            className="form-control"
          />
        </div> */}

        <div className="mb-3">
          <label htmlFor="teacherName" className="form-label">
            Teacher Name:
          </label>
          <input
            required
            type="text"
            name="teacherName"
            value={teacherName}
            onChange={handleChange}
            className="form-control"
          />
          {/* {!teacherNameValid && (
            <div className="invalid-feedback">Teacher Name is required.</div>
          )} */}
        </div>
        <div className="mb-3">
          <label htmlFor="classValue" className="form-label">
            Class:
          </label>
          <input
            required
            type="text"
            name="classValue"
            value={classValue}
            onChange={handleChange}
            className={`form-control ${classValueValid ? "" : "is-invalid"}`}
          />
          {!classValueValid && (
            <div className="invalid-feedback">Class is required.</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="section" className="form-label">
            Section:
          </label>
          <input
            required
            type="text"
            name="section"
            value={section}
            onChange={handleChange}
            className={`form-control ${sectionValid ? "" : "is-invalid"}`}
          />
          {!sectionValid && (
            <div className="invalid-feedback">Section is required.</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="numStudents" className="form-label">
            Number of Students:
          </label>
          <input
            required
            type="number"
            name="numStudents"
            value={numStudents}
            onChange={handleChange}
            className={`form-control ${numStudentsValid ? "" : "is-invalid"}`}
          />
          {!numStudentsValid && (
            <div className="invalid-feedback">Invalid number of students.</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="examName" className="form-label">
            Exam Name:
          </label>
          <select
            required
            name="examName"
            value={examName}
            onChange={handleChange}
            className={`form-select ${examNameValid ? "" : "is-invalid"}`}
          >
            <option value="">Select an option</option>
            <option value="CT">CT</option>
            <option value="CW">CW</option>
          </select>
          {!examNameValid && (
            <div className="invalid-feedback">Please select an Exam Name.</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="numTests" className="form-label">
            Number of Tests:
          </label>
          <input
            required
            type="number"
            name="numTests"
            value={numTests}
            onChange={handleChange}
            className={`form-control ${numTestsValid ? "" : "is-invalid"}`}
          />
          {!numTestsValid && (
            <div className="invalid-feedback">Invalid number of tests.</div>
          )}
        </div>
        <button
          type="button"
          onClick={generateFields}
          className="btn btn-primary"
        >
          Generate Fields
        </button>
        <button
          type="button"
          onClick={calculateAverage}
          className="mx-1 btn btn-success"
        >
          Average
        </button>
        <button
          type="button"
          onClick={exportToExcel}
          className="btn btn-success"
        >
          Download Excel
        </button>
        {numStudents && examName && classValue && section && numTests && (
  <table className="table table-responsive mt-4 table-striped mb-0">
    <thead>
      <tr>
        <th>Roll</th>
        <th>{examName}</th>
        {averageMarks.length > 0 && (
          <th className="text-center">Average Mark</th>
        )}
        {averageMarks.length > 0 && (
          <th className="text-center">Rounded Mark</th>
        )}
      </tr>
    </thead>
    <tbody>
      {studentData.map((student, index) => (
        <tr key={index}>
          <td>{student.Roll}</td>
          {Object.keys(student.examMarks).map((exam, i) => (
            <td key={i}>
              <input
                type="number"
                name={exam}
                placeholder={`${examName}-${i + 1}`}
                value={student.examMarks[exam]}
                onChange={(e) =>
                  handleExamMarkChange(index, exam, e.target.value)
                }
                className="form-control"
              />
            </td>
          ))}
          {averageMarks.length > 0 && (
            <td className="mt-2 fs-6 fw-bolder text-center bg-lite text-dark">
              {student.averageMark || ""}
            </td>
          )}
          {averageMarks.length > 0 && (
            <td className="mt-2 fs-6 fw-bolder text-center bg-warning text-white">
              {student.finalMark || ""}
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
)}

      </form>
    </div>
  );

  function handleExamMarkChange(studentIndex, exam, value) {
    const updatedStudentData = [...studentData];
    updatedStudentData[studentIndex].examMarks[exam] = value;
    setStudentData(updatedStudentData);
  }
}
