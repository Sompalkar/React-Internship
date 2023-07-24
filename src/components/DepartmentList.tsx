import React, { useState } from "react";
import TreeView from "@mui/lab/TreeView";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { TreeItem } from "@mui/lab";

import { Checkbox } from "@mui/material";
import "./DepartmentList.css";

// Sample department data in JSON format
const departmentsData = [
  {
    department: "Customer Service",
    sub_departments: ["Support", "Customer Success"],
  },
  {
    department: "Design",
    sub_departments: ["Graphic Design", "Product Design", "Web Design"],
  },
];

// Interface for the Department object
interface Department {
  department: string;
  sub_departments: string[];
}

const DepartmentListWithJSON: React.FC = () => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  // Function to handle toggling selection of departments and sub-departments

  const handleToggle = (department: string, subDepartments: string[]) => {
    if (selectedDepartments.includes(department)) {
      // If the department is already selected, remove it and its sub-departments

      setSelectedDepartments((prevState) =>
        prevState.filter(
          (dept) => !subDepartments.includes(dept) && dept !== department
        )
      );
    } else {

      // If the department is not selected then add it with its sub-departments

      setSelectedDepartments((prevState) => [
        ...prevState,
        department,
        ...subDepartments,
      ]);
    }
  };

  // Function to check if a department is  selected including all its sub-departments


  const isDepartmentSelected = (department: string): boolean => {
    return (
                         selectedDepartments.includes(department) && departmentsData
                  .find((dept) => dept.department === department)
                                                ?.sub_departments.every((subDept) =>
                  selectedDepartments.includes(subDept)
        )
    );
  };

       // Function to check if a sub-department is selected or not 


  const isSubDSelected = (subDepartment: string): boolean => {

           return selectedDepartments.includes(subDepartment);
  };


  // Function to render the tree view for departments and sub-departments

  const renderTree = (department: Department) => (
    <TreeItem
      key={department.department}
      nodeId={department.department}
      label={
        <span>
          <Checkbox
            checked={isDepartmentSelected(department.department)}
            indeterminate={
              !isDepartmentSelected(department.department) &&
              department.sub_departments.some((subDept) =>
                selectedDepartments.includes(subDept)
              )
            }
            onChange={() =>
              handleToggle(department.department, department.sub_departments)
            }
          />
          {department.department}
        </span>
      }
    >
      {department.sub_departments.map((subDept) => (
        <TreeItem
          key={subDept}
          nodeId={subDept}
          label={
            <span>
              <Checkbox
                checked={isSubDSelected(subDept)}
                onChange={() => handleToggle(subDept, [])}
              />
              {subDept}
            </span>
          }
        />
      ))}
    </TreeItem>
  );

  return (
    <div className="depList">
      <TreeView
        className="department-tree"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        selected={selectedDepartments}
      >
        {/* rendering  the department tree */}
        {departmentsData.map((dept) => renderTree(dept))}
      </TreeView>
    </div>
  );
};

export default DepartmentListWithJSON;
