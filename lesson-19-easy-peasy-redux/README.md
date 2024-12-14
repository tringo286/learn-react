# Lesson 19: Easy Peasy + Redux

This lesson demonstrates using **Easy Peasy** for state management in React, providing a Redux-like solution with less boilerplate.

---

## Features

- **Easy Peasy Store** (`store.js`): Centralized store for managing global state (e.g., posts).
- **State Management**: Manage app-wide state such as posts.
- **Actions**: Define actions to modify or fetch state data.

### Relevant Components

- **Home** (`Home.js`): Displays and interacts with the global store (e.g., user info, posts).
- **Feed** (`Feed.js`): Displays posts from the store.
- **NewPost** (`NewPost.js`): Adds a new post to the global state.
- **PostPage** (`PostPage.js`): Shows, edits, and deletes posts using the global store.

---

## How to Use

1. **Set Up the Store**: Define state and actions in `store.js`.
2. **Wrap App with Store Provider**: Use `StoreProvider` in `main.jsx` to make the store available throughout the app.
3. **Access Store**: Use `useStoreState` and `useStoreActions` to access and modify state in components.
