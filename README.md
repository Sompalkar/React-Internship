# React Internship Assignment

**Created by Somnath Palkar**
Email: palkarsom1@gmail.com

A live demo of this project can be accessed [React Internship Assignment-DEMOLIVE](https://growme-org-react-assgnmt.netlify.app/).

## Project Overview

This project is a React application developed as part of an internship assignment. The objective of the assignment was to build a functional React application with various features and functionalities.

### Task 1: Application Configuration

- The project was bootstrapped with [Vite](https://vitejs.dev/guide/), a build tool that provides fast and efficient development experience for React applications.
- [Material-UI (MUI)](https://mui.com/material-ui/getting-started/overview/) was used to configure the application, ensuring the usage of MUI components for buttons, text fields, dialogs, and more.

### Task 2: First Page of the Application

- A form was created on the first page to collect user information, including:
  - Name
  - Phone number
  - Email
- Upon form submission, the user details are saved in localStorage, and the user is redirected to the second page.
- If the user attempts to access the second page without providing the necessary information, they are redirected back to the first page with a message indicating that they must enter their details before accessing the page.

### Task 3: Second Page of the Application [Component 1]

- The second page fetches a list of JSON data from an API (in this case, [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)).
- The retrieved JSON data is converted into TypeScript models/interfaces.
- The data is displayed in a table using the [MUI Data Grid](https://mui.com/x/react-data-grid/).

### Task 4: Second Page of the Application [Component 2]

- Another component was added below the table to display a list of departments and their sub-departments.
- The user can expand and collapse sub-departments.
- Users can select individual departments or sub-departments.
- If the user selects a department, all of its sub-departments are automatically selected in the UI.
- If the user selects all sub-departments of a department, the parent department is automatically selected as well.
- If the user unselects a parent department, all its sub-departments get unselected as well.

### Deployment

- The completed application was deployed to a hosting provider, making it accessible online.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository from [GitHub Repo URL].
2. Navigate to the project directory in your terminal.
3. Install dependencies using `npm install`.
4. Run the development server using `npm run dev`.

## Technologies Used

- React
- TypeScript
- Vite
- Material-UI (MUI)

## Contact Information

For any inquiries or questions regarding this project, please feel free to contact:

**Somnath Palkar**  
Email: palkarsom1@gmail.com

**Project Name:** React Internship Assignment

## License

This project is licensed under the [MIT License](LICENSE).
