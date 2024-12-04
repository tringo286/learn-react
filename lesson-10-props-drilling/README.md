# Lesson 10: Props Drilling 

This lesson explains **props drilling**, where props are passed down through multiple component layers even if intermediate components don't directly use them

## Features

- **Props**: Share data and methods (`items`, `handleCheck`, `handleDelete`) across components.
- **Props Drilling**: Pass props from `App` → `Content` → `ItemList` → `LineItem` to ensure components stay connected.

---

## Component Hierarchy

1. **`App`**: Holds the state (`items`) and functions (`handleCheck`, `handleDelete`).
2. **`Content`**: Receives props from `App` and passes them to `ItemList`.
3. **`ItemList`**: Maps through `items` and passes props to `LineItem`.
4. **`LineItem`**: Uses props to render individual list items and handle actions.