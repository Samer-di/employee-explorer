# Assignment 3 — Interview Notes

## Mission 1: Initial Predictions

### 1. Where will each request run?

- Employee Profile: The request runs on the server inside a Server Component.
- Recent Posts Preview: The request runs on the server inside an Async Server Component wrapped in Suspense.
- Explore All Posts: The request runs in the browser inside a Client Component after the user clicks the button.

### 2. What should remain visible while the server posts preview loads?

My prediction: The Employee Profile and Explore All Posts button should remain visible, while the Recent Posts section displays a
loading fallback until its data is ready.

### 3. Will Suspense automatically show its fallback for a click-handler fetch?

My prediction: No, suspense show its fallback only when data take some time to load, but if data load directly, the fallback doesn't show and user see the data directly.

### 4. Will fetch automatically throw when the HTTP status is 503?

My prediction: No, if the status is 503, `fetch` does not throw.
