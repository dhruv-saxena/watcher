# Watcher App - Developer Prompts

This file contains a series of prompts that break down the project into small, iterative, test-driven steps. Each prompt is intended for a code-generation LLM to implement a piece of the project. Follow the prompts sequentially to build the complete app from start to finish.

---

## Prompt 1: Project Setup and Basic Structure

# Prompt 1: Project Setup and Basic Structure

**Overview:**
- Initialize a new repository for "Watcher".
- Create a basic project structure with two directories: `/frontend` (for the mobile-optimized web app) and `/backend` (for the API server and real-time WebSocket support).
- Set up version control and a README with a brief project description.

**Requirements:**
- Use a modern frontend framework (e.g., React) with routing.
- Use Node.js with Express for the backend.
- Set up a testing framework (e.g., Jest for unit tests).

**Tasks:**
1. Initialize a Git repository.
2. Create `/frontend` and `/backend` directories.
3. In `/backend`, set up a simple Express server that listens on a configurable port. Write a basic test to check that the server responds to a "ping" route.
4. In `/frontend`, set up a basic React app with routing configured (include pages for Login, Movie List, and Movie Detail). Verify that the app renders a simple "Hello, Watcher!" message on the home page.
5. Document instructions in the README for installing dependencies and running both the frontend and backend locally.

**Testing:**
- Write unit tests for the Express "ping" endpoint.
- Verify that the React app renders and navigates between basic routes.

**End with:**
- A fully wired-up basic project structure, with tests passing for the simple endpoints and the React app.

---

## Prompt 2: Implement Google OAuth for Authentication

# Prompt 2: Implement Google OAuth for Authentication

**Overview:**
- Integrate Google OAuth 2.0 in the backend to enable Google login.
- Configure the frontend to redirect users to the login page and handle the OAuth flow.
- Ensure that upon successful login, the user’s basic profile (name, email, avatar) is stored and a session is created.

**Tasks:**
1. In the `/backend`, add endpoints for handling Google OAuth login and callback.
2. Use a library like Passport.js (with the Google OAuth strategy) to manage authentication.
3. In `/frontend`, create a login page with a "Sign in with Google" button that redirects to the backend OAuth endpoint.
4. Ensure that after authentication, the user is redirected back to the movie list page.
5. Write tests to simulate the login flow (e.g., mock Google OAuth responses) and verify that the user session is established.

**Testing:**
- Unit tests for the OAuth endpoints.
- Integration tests to verify that after login, the user data is correctly passed to the frontend.

**End with:**
- A working Google login flow with a protected route that only authenticated users can access.

---

## Prompt 3: Build Basic UI Structure and Navigation

# Prompt 3: Build Basic UI Structure and Navigation

**Overview:**
- Create the main pages and routes for the app: Login, Movie List, and Movie Detail.
- Implement dark mode styling (only dark mode is needed).
- Implement scroll restoration on the Movie List page when navigating to and from the Movie Detail page.

**Tasks:**
1. In `/frontend`, set up React Router (or similar) with routes for:
   - `/login` for the login page.
   - `/movies` for the movie list.
   - `/movies/:id` for individual movie/show detail pages.
2. Implement a global dark mode theme using CSS or a CSS-in-JS solution.
3. Add logic for scroll restoration on the Movie List page (so when a user taps a movie and then goes back, they return to their previous scroll position).
4. Write tests to verify:
   - Correct routing between pages.
   - Dark mode styles are applied.
   - Scroll restoration works as expected.

**End with:**
- A basic navigable UI that is styled in dark mode, with working routing and scroll restoration.

---

## Prompt 4: Integrate TMDb API for Movie/TV Show Search

# Prompt 4: Integrate TMDb API for Movie/TV Show Search

**Overview:**
- Integrate the TMDb API to allow users to search for movies or TV shows when adding a recommendation.
- Implement a search component in the frontend that calls a backend proxy (if needed) to query TMDb.

**Tasks:**
1. Create a TMDb service module in `/backend` (or in `/frontend` if you prefer a direct client-side integration) to search for movies/TV shows using the TMDb API. Use environment variables to store the API key.
2. In `/frontend`, develop a search component with:
   - A search input field.
   - Live search functionality that triggers API calls as the user types.
   - A results list that shows matching movie titles, posters, and genres.
3. Validate that the search component returns data from TMDb.
4. Write unit tests for the search component and the TMDb service (mocking API responses).

**End with:**
- A working movie/TV show search that fetches data from TMDb and displays results in real-time.

---

## Prompt 5: Implement Recommendation Feature (Add, Edit, Delete)

# Prompt 5: Implement Recommendation Feature (Add, Edit, Delete)

**Overview:**
- Build the functionality for users to add movie/show recommendations.
- Ensure that each recommendation requires a "reason" (minimum 100 characters).
- Prevent duplicate recommendations by appending the new recommender to the existing recommendation’s list.
- Enable users to edit and delete their own recommendations (with a confirmation prompt on deletion).

**Tasks:**
1. In the `/backend`, design data models (e.g., using Firebase Firestore or another NoSQL solution) for:
   - Recommendations (including movie details, recommenders array with their reasons, timestamps, etc.)
   - Users (storing basic info from Google OAuth).
2. In `/frontend`, create:
   - A form for adding a recommendation. The form should include movie selection (via the TMDb search component) and a text area for the recommendation reason (validate for a minimum of 100 characters).
   - Edit and delete options on recommendations (only for the recommendation’s owner).
   - A confirmation dialog for deletions that includes the movie name.
3. Handle duplicate recommendations:
   - On submission, check if the movie is already recommended. If yes, append the current user and their reason to the existing entry.
4. Write tests to ensure:
   - Adding a recommendation works.
   - Validation (reason length, duplicate handling) is enforced.
   - Editing and deletion work as expected, including confirmation dialogs.

**End with:**
- A fully functional recommendation system with add, edit, and delete features and proper duplicate handling.

---

## Prompt 6: Implement Real-Time Updates with WebSockets

# Prompt 6: Implement Real-Time Updates with WebSockets

**Overview:**
- Integrate WebSockets (using a library like Socket.io) to provide real-time updates for new recommendations and deletions.
- Ensure that when a recommendation is added or removed, all connected clients update automatically.

**Tasks:**
1. In `/backend`, set up a WebSocket server that:
   - Emits events when a recommendation is added or deleted.
   - Listens for events if needed for further actions.
2. In `/frontend`, integrate a WebSocket client that:
   - Listens for the add and delete events.
   - Updates the movie list UI in real time when events are received.
3. Write tests (or simulate multiple clients) to verify that:
   - New recommendations and deletions are broadcast correctly.
   - The UI updates in real time across multiple instances.

**End with:**
- A working real-time update system via WebSockets that integrates with the recommendation add/delete flows.

---

## Prompt 7: Implement Private Bookmarking Functionality

# Prompt 7: Implement Private Bookmarking Functionality

**Overview:**
- Allow users to bookmark movies/shows for personal use.
- Bookmarks should be stored privately per user (not visible to others).
- Enable users to remove bookmarks.

**Tasks:**
1. In the `/backend`, add data structures (or fields) for storing user bookmarks.
2. In `/frontend`, implement a bookmarks tab:
   - Display bookmarked movies/shows.
   - Allow users to bookmark an item from the movie list and remove it as needed.
3. Update the UI immediately on bookmark/unbookmark actions (handled locally).
4. Write tests to ensure:
   - Bookmarking and unbookmarking work correctly.
   - Bookmarks are saved per user and fetched correctly upon login.

**End with:**
- A fully functional bookmarks feature that is private to each user.

---

## Prompt 8: Enhance UI with Skeleton Loaders, Toasts, and Infinite Scrolling

# Prompt 8: Enhance UI with Skeleton Loaders, Toasts, and Infinite Scrolling

**Overview:**
- Improve user experience with skeleton loaders for data fetching.
- Use toast notifications for confirming add/delete actions.
- Implement infinite scrolling to load 20 recommendations at a time with lazy loading of images.

**Tasks:**
1. In `/frontend`, add:
   - Skeleton loader components for both the movie list and search results.
   - Toast notification component that appears at the bottom and automatically dismisses after a few seconds.
   - Infinite scrolling logic that fetches the next 20 recommendations as the user scrolls down.
   - Lazy-load images (movie posters) as they come into the viewport.
2. Write tests to ensure:
   - Skeleton loaders display during data fetch.
   - Toast notifications show and disappear as expected.
   - Infinite scrolling triggers data fetch at the right time and images are lazy-loaded.

**End with:**
- A polished UI that provides immediate feedback and handles large datasets smoothly.

---

## Prompt 9: Implement Search Functionality on the Movie List

# Prompt 9: Implement Search Functionality on the Movie List

**Overview:**
- Integrate a search icon that expands into a search bar on the movie list page.
- Enable live search (as the user types) that matches only the movie titles.
- Bold matching text in the displayed results.
- Show an appropriate empty state message if no results are found.

**Tasks:**
1. In `/frontend`, modify the movie list page to include:
   - A search icon that, when clicked, expands into a search input.
   - Live filtering of the recommendations by title (case-insensitive, ignoring accents).
   - Rendering the search results with matching text bolded.
   - An empty state message (e.g., "No matches found. Try another title.") when there are no results.
2. Write tests to ensure:
   - The search functionality correctly filters recommendations.
   - Matching text is bolded.
   - The empty state message displays when appropriate.

**End with:**
- A fully integrated, live search component on the movie list that enhances the user experience.

---

## Prompt 10: Error Handling and Activity Log

# Prompt 10: Error Handling and Activity Log

**Overview:**
- Implement generic error handling with a friendly error message and a retry button.
- Create a settings section with a private activity log for the group owner. Log major events: user joins, recommendations added/removed, and user removals.

**Tasks:**
1. In `/frontend` and `/backend`, add error handling:
   - Show a generic error message ("Something went wrong, please try again") when a network/API error occurs.
   - Include a retry button that triggers a full reload of the app.
2. In `/frontend`, add a settings page with an activity log component.
3. In `/backend`, ensure that major events (new user joined, recommendation added/removed, user removal) are logged persistently.
4. Write tests to verify:
   - Error messages display correctly and the retry button triggers a full reload.
   - The activity log records and displays events as expected.

**End with:**
- Robust error handling and an integrated activity log that is accessible to the group owner.

---

## Prompt 11: Final Integration, E2E Testing, and Refactoring

# Prompt 11: Final Integration, E2E Testing, and Refactoring

**Overview:**
- Wire all components together into a cohesive, production-ready version.
- Conduct integration and end-to-end tests to simulate user journeys.
- Refactor any code as necessary to maintain best practices and clean architecture.

**Tasks:**
1. Integrate all features:
   - Ensure authentication, recommendation handling, bookmarks, search, WebSocket updates, error handling, and the activity log work together seamlessly.
2. Write end-to-end tests simulating:
   - User sign-up/login.
   - Searching for and adding a recommendation.
   - Editing and deleting recommendations.
   - Real-time updates (simulate multiple clients if possible).
3. Review the code to ensure no orphaned modules exist and all components are wired together.
4. Prepare documentation for running the project and tests.

**End with:**
- A fully integrated, test-driven project where every feature is interconnected.
- A clean, maintainable codebase that follows best practices and is ready for further development.

---

