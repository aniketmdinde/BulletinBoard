# Bulletin Board

This project is a simple **Bulletin Board** application built using **React** and **Redux Toolkit (RTK)**. It allows users to create, manage posts and add reactions to posts. 

This project was built as part of an effort to better understand state management using **Redux Toolkit**, following Dave Gray's [React Redux Full Course for Beginners | Redux Toolkit Complete Tutorial](https://youtu.be/NqzdVN2tyvQ?si=opLaUAe9OvQYMMvw) on YouTube.


### Demo
<video controls src="BulletinBoardApp.mp4" title="Title"></video>

## Features

### Core Functionalities:
- **Add a Post:** Allows users to create new posts by providing a title and content.
- **Add Reactions to Post:** Users can react to posts by adding reactions (Like, heart, rocket).
  
### Extended Functionalities (Done by me):
- **Add Local Storage Support:** The application preserves its state even after a refresh by storing data in the browser's local storage.
- **Set Posts to Local Storage:** Automatically saves posts and reactions to local storage for persistence across sessions.
- **Delete a Post:** Users can delete posts from the bulletin board.

## Libraries Used

- **React-Redux**: For integrating Redux with React.
- **Redux Toolkit (@reduxjs/toolkit)**: Simplifies Redux state management.
- **Date-fns**: For working with dates and times.
- **Tailwind CSS**: For styling the app.
- **Vite**: A fast build tool for a modern development experience.

## Installation

To install and run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aniketmdinde/BulletinBoard.git .

2. **Install packages:**

   ```bash
   npm install

3. **Run the project:**

   ```bash
   npm run dev