# Watcher Project TODO

Below is a comprehensive checklist based on the step-by-step prompt plan. Each section corresponds to a major milestone in the development process. You can check items off as you complete them.

---

## Prompt 1: Project Setup and Basic Structure

**Overview**  
- [x] Initialize a new repository for "Watcher".
- [x] Create a basic project structure with `/frontend` and `/backend`.
- [x] Set up version control and a README with a brief project description.

**Requirements**  
- [x] Use a modern frontend framework (e.g., React) with routing.
- [x] Use Node.js with Express for the backend.
- [x] Set up a testing framework (e.g., Jest) for unit tests.

**Tasks**  
- [x] **Git Init**: Create a new Git repository.  
- [x] **Directories**: Add `/frontend` and `/backend` folders.  
- [x] **Backend Setup**:  
  - [x] Initialize a Node.js project (`npm init` or `yarn init`).  
  - [x] Install Express.  
  - [x] Create a simple Express server that listens on a configurable port.  
  - [x] Add a "ping" route for testing.  
  - [ ] Write a unit test (Jest) to ensure the "ping" route responds.  
- [x] **Frontend Setup**:  
  - [x] Initialize a React project (e.g., `create-react-app`).  
  - [ ] Add basic routing for at least three pages (Login, Movie List, Movie Detail).  
  - [ ] Confirm "Hello, Watcher!" renders on the home page.  
- [x] **Documentation**:  
  - [x] Update README with installation instructions for both frontend and backend.

**Testing**  
- [ ] Verify the Express "ping" route test passes.  
- [ ] Ensure the React app renders and navigates between basic routes.

**End with**  
- [ ] A passing test suite and a simple project structure ready to expand.

---

## Prompt 2: Implement Google OAuth for Authentication

**Overview**  
- [ ] Integrate Google OAuth 2.0 in the backend.
- [ ] Configure the frontend to handle the OAuth flow.
- [ ] Store the user's basic profile after login.

**Tasks**  
- [ ] **Backend (Google OAuth)**:  
  - [ ] Add endpoints for handling Google OAuth login and callback.  
  - [ ] Use Passport.js (or similar) with the Google OAuth strategy.  
  - [ ] Store user sessions using a session middleware (Express-Session or similar).  
- [ ] **Frontend (Login Page)**:  
  - [ ] Create a `/login` page with a "Sign in with Google" button.  
  - [ ] Redirect to the backend's OAuth route.  
  - [ ] Handle redirect after successful authentication, navigating to the movie list.  
- [ ] **Testing**:  
  - [ ] Unit tests for OAuth endpoints.  
  - [ ] Integration test to verify user data flows correctly to the frontend after login.

**End with**  
- [ ] A fully working Google login flow, restricting access to protected routes if not authenticated.

---

## Prompt 3: Build Basic UI Structure and Navigation

**Overview**  
- [ ] Define three main pages/routes: Login, Movie List, Movie Detail.
- [ ] Implement a global dark mode.
- [ ] Ensure scroll restoration on Movie List → Movie Detail → back to Movie List.

**Tasks**  
- [ ] **Routing**:  
  - [ ] Set up React Router (or equivalent) with `/login`, `/movies`, and `/movies/:id`.  
- [ ] **Dark Mode**:  
  - [ ] Apply global dark mode styles (only one theme needed).  
- [ ] **Scroll Restoration**:  
  - [ ] Add logic so that if a user scrolls down, taps a movie, then goes back, they land on the same scroll position.  

**Testing**  
- [ ] Confirm correct routing between pages.  
- [ ] Verify dark mode is applied.  
- [ ] Test scroll restoration behavior.

**End with**  
- [ ] A navigable UI where users can move between pages seamlessly, in a dark-themed layout.

---

## Prompt 4: Integrate TMDb API for Movie/TV Show Search

**Overview**  
- [ ] Allow users to search for movies/TV shows from TMDb when adding a recommendation.
- [ ] Show titles, posters, and genres in search results.

**Tasks**  
- [ ] **Backend (Optional Proxy)**:  
  - [ ] Create a TMDb service module (store API key in env variables).  
  - [ ] If needed, expose a proxy endpoint (e.g., `/api/search`) to query TMDb.  
- [ ] **Frontend (Search Component)**:  
  - [ ] Build a search bar that calls the backend or direct TMDb endpoint.  
  - [ ] Display results with basic info (title, poster, genre).  
  - [ ] Live search as user types.  
- [ ] **Testing**:  
  - [ ] Unit tests for the TMDb service (mocking API responses).  
  - [ ] Tests confirming correct rendering of search results.

**End with**  
- [ ] Users can perform real-time searches against TMDb and see relevant info in the UI.

---

## Prompt 5: Implement Recommendation Feature (Add, Edit, Delete)

**Overview**  
- [ ] Users can add recommendations with a mandatory reason (≥100 chars).
- [ ] Duplicate prevention (append new recommender to existing recommendation).
- [ ] Users can edit/delete their own recommendations.

**Tasks**  
- [ ] **Database Models**:  
  - [ ] Create a `recommendations` collection/table with fields for movie/show info, an array of recommenders (user ID + reason), timestamps, etc.  
  - [ ] Store user info from OAuth in a `users` collection/table.  
- [ ] **Add Recommendation**:  
  - [ ] Form that includes the selected movie and the reason.  
  - [ ] Validate reason length (≥100 chars).  
  - [ ] Check for duplicates; if found, add user+reason to that record. Otherwise create a new record.  
- [ ] **Edit Recommendation**:  
  - [ ] Only the user who added it can edit their reason.  
- [ ] **Delete Recommendation**:  
  - [ ] Only the user who added it can delete.  
  - [ ] Confirmation dialog with the movie name.  
- [ ] **Testing**:  
  - [ ] Verify reason length validation.  
  - [ ] Check that duplicates don't create multiple entries.  
  - [ ] Ensure edit and delete work as expected.

**End with**  
- [ ] A stable recommendation system where each user can safely add/edit/delete their own entries.

---

## Prompt 6: Implement Real-Time Updates with WebSockets

**Overview**  
- [ ] Automatic updates when someone adds or removes a recommendation.
- [ ] Use Socket.io or a similar library.

**Tasks**  
- [ ] **WebSocket Server**:  
  - [ ] Set up Socket.io (or similar) in `/backend`.  
  - [ ] Emit events on add/delete of recommendations.  
- [ ] **WebSocket Client**:  
  - [ ] Listen for add/delete events.  
  - [ ] Update the frontend's recommendation list in real-time.  
- [ ] **Testing**:  
  - [ ] Simulate multiple clients to verify real-time broadcast works.  
  - [ ] Ensure the UI updates automatically on new recommendations or deletions.

**End with**  
- [ ] A real-time system ensuring all users see the latest recommendations without manual refresh.

---

## Prompt 7: Implement Private Bookmarking Functionality

**Overview**  
- [ ] Users can bookmark movies/shows for themselves.
- [ ] Bookmarks are private (no one else sees them).

**Tasks**  
- [ ] **Data Structures**:  
  - [ ] In the database, store user-specific bookmarks (e.g., in a `bookmarks` collection or in the user's doc).  
- [ ] **UI (Bookmarks Tab)**:  
  - [ ] A tab or section in the app for "My Bookmarks".  
  - [ ] Ability to add or remove bookmarks from the movie list.  
- [ ] **Immediate UI Update**:  
  - [ ] When a user bookmarks something, it should reflect in the UI instantly.  
- [ ] **Testing**:  
  - [ ] Confirm that only the user who bookmarked sees the item.  
  - [ ] Verify adding/removing bookmarks is smooth.

**End with**  
- [ ] A functioning bookmark feature that is private to each individual user.

---

## Prompt 8: Enhance UI with Skeleton Loaders, Toasts, and Infinite Scrolling

**Overview**  
- [ ] Improve user experience with skeleton loaders, toast messages, and infinite scrolling.

**Tasks**  
- [ ] **Skeleton Loaders**:  
  - [ ] Add placeholders on the movie list and search results while data is fetching.  
- [ ] **Toast Notifications**:  
  - [ ] Show simple bottom-positioned toasts for actions like add/delete.  
  - [ ] Toasts dismiss automatically after a few seconds.  
- [ ] **Infinite Scrolling**:  
  - [ ] Load 20 recommendations at a time.  
  - [ ] Fetch more as the user scrolls (lazy loading).  
- [ ] **Image Lazy Loading**:  
  - [ ] Only load posters when they come into the viewport.  
- [ ] **Testing**:  
  - [ ] Verify skeleton loaders appear during fetch.  
  - [ ] Check toasts display on successful actions.  
  - [ ] Confirm infinite scrolling loads additional recommendations.

**End with**  
- [ ] A smoother, more responsive UI that handles large lists gracefully.

---

## Prompt 9: Implement Search Functionality on the Movie List

**Overview**  
- [ ] Add a search icon that expands into a live title-based search.
- [ ] Bold matching text, and show an empty state if no matches.

**Tasks**  
- [ ] **Search Icon & Bar**:  
  - [ ] A magnifying glass icon expands to a search bar.  
  - [ ] Filter recommendations by title (ignore case, ignore accents).  
- [ ] **Live Updates**:  
  - [ ] Update results as the user types.  
  - [ ] Bold matching text.  
  - [ ] Show "No matches found..." if empty.  
- [ ] **Testing**:  
  - [ ] Confirm the search feature filters recommendations correctly.  
  - [ ] Ensure bold text for matched segments.  
  - [ ] Empty state message appears when nothing matches.

**End with**  
- [ ] A handy search that enhances usability for large recommendation lists.

---

## Prompt 10: Error Handling and Activity Log

**Overview**  
- [ ] Show a friendly error message + retry on failure.
- [ ] Create an admin-only activity log (accessible in Settings).

**Tasks**  
- [ ] **Error Handling**:  
  - [ ] Display "Something went wrong, please try again" for network/API failures.  
  - [ ] Provide a retry button that triggers a full reload.  
- [ ] **Activity Log** (for group owner):  
  - [ ] Log major events: new user joined, recommendation added/removed, user removed.  
  - [ ] Expose it on a Settings page in the frontend.  
- [ ] **Testing**:  
  - [ ] Confirm the error message is shown properly on failures.  
  - [ ] Verify the retry button reloads the app.  
  - [ ] Ensure activity log is only visible to the owner and logs relevant events.

**End with**  
- [ ] A robust error handling flow and a private log for the owner to track major actions.

---

## Prompt 11: Final Integration, E2E Testing, and Refactoring

# Prompt 11: Final Integration, E2E Testing, and Refactoring

**Overview**  
- [ ] Integrate all features into a final, cohesive product.
- [ ] Conduct thorough testing and refactor for best practices.

**Tasks**  
1. **Integration**:  
   - [ ] Connect authentication, recommendations, bookmarks, search, WebSocket updates, error handling, and activity log.  
   - [ ] Confirm all features work together seamlessly.  
2. **End-to-End Tests**:  
   - [ ] Simulate user journeys (e.g., sign up, add a recommendation, see real-time updates).  
   - [ ] Test multiple clients if possible.  
   - [ ] Verify final performance of infinite scrolling and lazy loading.  
3. **Refactor & Review**:  
   - [ ] Eliminate unused code.  
   - [ ] Ensure no orphaned modules or components.  
   - [ ] Follow best practices for security, readability, and maintainability.  
4. **Documentation**:  
   - [ ] Update README and docs with usage, testing, and deployment instructions.

**End with**  
- [ ] A fully integrated, test-driven project that follows best practices and is ready for deployment or further development.

---

**Congratulations!** By following this checklist, you'll implement all the core features of Watcher in small, well-tested increments. Good luck!

