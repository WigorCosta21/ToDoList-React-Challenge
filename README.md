# Todo App (Frontend Mentor Challenge)

This is a simple Todo application built as a challenge from Frontend Mentor (https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Your challenge is to build out this todo app and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page

Bonus:

- Drag and drop to reorder items on the list
- Build this project as a full-stack application

## Features

- **Add Task**: Users can add new tasks by typing in the input field and pressing Enter or clicking the add button.
- **Remove Task**: Users can remove tasks by clicking on the delete icon next to each task.
- **Toggle Task Completion**: Users can mark tasks as completed or active by clicking on the checkbox next to each task.
- **Filter Tasks**: Users can filter tasks based on their completion status (All, Active, Completed) using the filter options provided.
- **Clear Completed Tasks**: Users can clear all completed tasks at once by clicking the "Clear Completed" button.
- **Theme Toggle**: Users can switch between light and dark themes by clicking on the theme toggle button in the header.

## Project Structure

The project is structured as follows:

- **Components**: Contains individual components used in the application (Header, Input, List, Checkbox, Footer).
- **Context**: Contains context providers for managing tasks, task filters, and themes.
- **Hooks**: Contains custom hooks used in the application.
- **Themes**: Contains theme definitions for light and dark modes.
- **Assets**: Contains images and other static assets used in the application.
- **Global Styles**: Contains global styles and theme providers for styled-components.

## Getting Started

To run the application locally:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Start the development server using `npm start` or `yarn start`.
5. Open your browser and visit `http://localhost:3000` to view the application.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- styled-components: A CSS-in-JS library for styling React components.
- TypeScript: A statically typed superset of JavaScript.
- Local Storage: For persisting task data locally in the browser.

## Author

This Todo App is developed by Wigor Ribeiro da Costa.

Feel free to reach out with any questions or feedback!

**Happy tasking!** 🚀
