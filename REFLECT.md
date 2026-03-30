# State

- `tasks` — an array of all the tasks created
- `formData` — tracks what the user is typing in the form
- `editingId` — tracks the form mode (editing or creating)

All three pieces of state live in `App.jsx` and are passed down to components as props.

# Strained or Unclear

- `handleSubmit` is dependent on `editingId` which made it tricky to handle two different behaviors in one function. I used the edit button color as a visual cue to signal which mode the form is in.
- `TaskForm` receives a lot of props which was hard to manage at times.

# Challenge Features

- **Form Mode Indicator** — the form visually changes to the color of the edit button along with the heading, making it clear the user is editing an existing task.
- **Simple Progress Display** — shows how many tasks are marked as done compared to the total number of tasks in state.

# What Became Harder Once the App Grew

- Keeping track of which props to pass to each component got repetitive and easy to mess up.
- Having the form handle both create and edit logic added complexity to both the state management and the styling.