import React, { useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeItem } from '@mui/lab';
import { Checkbox } from '@mui/material';

const departmentsData = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

interface Department {
  department: string;
  sub_departments: string[];
}

const DepartmentListWithJSON: React.FC = () => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleToggle = (department: string, subDepartments: string[]) => {
    if (selectedDepartments.includes(department)) {
      // If the department is already selected, remove it and its sub-departments
      setSelectedDepartments((prevState) =>
        prevState.filter((dept) => !subDepartments.includes(dept))
      );
    } else {
      // If the department is not selected, add it along with its sub-departments
      setSelectedDepartments((prevState) => [
        ...prevState,
        department,
        ...subDepartments,
      ]);
    }
  };

  const isDepartmentSelected = (department: string): boolean => {
    return (
      selectedDepartments.includes(department) &&
      departmentsData
        .find((dept) => dept.department === department)
        ?.sub_departments.every((subDept) =>
          selectedDepartments.includes(subDept)
        )
    );
  };

  const isSubDepartmentSelected = (subDepartment: string): boolean => {
    return selectedDepartments.includes(subDepartment);
  };

  const handleParentDepartmentUnselect = (department: string) => {
    const departmentData = departmentsData.find(
      (dept) => dept.department === department
    );
    if (
      departmentData &&
      departmentData.sub_departments.every((subDept) =>
        selectedDepartments.includes(subDept)
      )
    ) {
      setSelectedDepartments((prevState) =>
        prevState.filter((dept) => dept !== department)
      );
    }
  };

  const renderTree = (department: Department) => (
    <TreeItem
      key={department.department}
      nodeId={department.department}
      label={
        <span>
          <Checkbox
            checked={isDepartmentSelected(department.department)}
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
                checked={isSubDepartmentSelected(subDept)}
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
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      selected={selectedDepartments}
    >
      {departmentsData.map((dept) => renderTree(dept))}
    </TreeView>
  );
};

export default DepartmentListWithJSON;
