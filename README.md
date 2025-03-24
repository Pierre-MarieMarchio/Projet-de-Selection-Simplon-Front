# Projet de Selection Simplon Front

## Project Overview

The application consists of a landing page that features a button. Each click on this button fetches and displays a random joke from an API. This functionality is designed to be easily integrated into future mobile applications.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: To add static typing to JavaScript for better code quality and maintainability.
- **Vite**: As the build tool for fast development and optimized production builds.
- **GitHub Pages**: For deploying the frontend application.
- **gh-pages**: To facilitate the deployment process to GitHub Pages.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node Package Manager should be installed along with Node.js.

### Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Pierre-MarieMarchio/Projet-de-Selection-Simplon-Front.git
   cd Projet-de-Selection-Simplon-Front
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Application Locally**:

   ```bash
   npm run dev
   ```

4. **Build for Production**:

   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages**:

   ```bash
   npm run deploy
   ```

## Project Structure

- `src/`: Contains the source code for the React application.
  - `main.tsx`: Entry point for the React application.
  - `app`: Contains the application-related code.
    - `components/`: Reusable UI components.
    - `hooks/`: Reusable custom hooks.
    - `interfaces/`: TypeScript interfaces for type safety.
    - `layout/`: Layout components.
    - `pages/`: Page components.
    - `App.tsx`: The main application component.
  - `assets/`: Application assets.
- `public/`: Static assets and the HTML template.
- `vite.config.ts`: Vite configuration file.

## Deploying with GitHub Pages

To deploy the application using GitHub Pages, you need to configure the `homepage` field in your `package.json` file. Set it to the URL of your GitHub Pages site, for example:

```json
"homepage": "https://pierre-mariemarchio.github.io/Projet-de-Selection-Simplon-Front/"
```

Additionally, ensure that the `gh-pages` package is installed and configured in your project. You can install it using:

```bash
npm install gh-pages --save-dev
```

Update the `scripts` section of your `package.json` to include the following:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

This setup will allow you to deploy your application to GitHub Pages by running `npm run deploy`.
