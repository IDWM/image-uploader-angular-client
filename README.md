# Image Uploader Angular Client Setup Guide

This guide will help you set up the Image Uploader Angular client project using Node.js and NPM. Follow the steps below to get started:

### 1. Clone the Project

```bash
git clone <project-repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd <project-folder>
```

### 3. Install Angular

Make sure you have Node.js installed. If not, download and install it from [Node.js Official Website](https://nodejs.org/).

Install Angular globally using NPM:

```bash
npm install -g @angular/cli
```

### 4. Create "environments" Folder and Development Environment File

Create a folder named "environments" inside the "src" folder of the project. Inside the "environments" folder, create a file named "environment.development.ts" with the following content:

```typescript
// environment.development.ts
export const environment = {
  production: false,
  apiUrl: "URL_API",
};
```

Replace 'URL_API' with the actual URL of your API.

### 5. Install Project Dependencies

Run the following command to install project dependencies:

```bash
npm install
```

### 6. Serve the Application

After installing dependencies, run the following command to serve the application:

```bash
ng serve -o
```

The `-o` flag opens the application in your default web browser automatically.

### Additional Notes

- Replace 'URL_API' in the environment file with your actual API URL.
- If you're using different environments (e.g., production), create corresponding environment files (e.g., environment.production.ts) and adjust the configuration accordingly.

For more information on Angular CLI and project setup, refer to the [Angular CLI Documentation](https://angular.io/cli).
