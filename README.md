# Music App

This application allows you to search for artists and their albums, review albums and tracks, and create a list of your favorite artists.

## Setup Instructions
1. **Configure Environment Variables**:
    - Copy the `.env.example` file and rename it to `.env.local`:
      ```bash
      cp .env.example .env.local
      ```
    - Update the `.env` file with your configuration settings.
2. **Run the project**:
   ```bash
      npm install
      npm run dev
    ```

## Development Tools
This project utilizes the following tools for development:
- **Typescript**: for type checking
- **ESLint**:  For enforcing code style rules.
- **Prettier**: For consistent code formatting.

Additionally, a pre-commit hook is set up to validate changes using these tools. If no errors are detected, the changes will be committed. 

## Considerations
- The application is designed to be responsive.
- There are five unit tests covering the main functionalities.
   You can run them by:
   ```bash
    npm t
    ```

## Future Improvements
Potential future enhancements include:
- Adding end-to-end test cases using Cypress or Playwright.
- Implementing Server-Side Rendering (SSR) for SEO-friendly artist and album pages.
- Managing pagination on API endpoints for better performance and user experience.