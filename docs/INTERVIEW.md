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

## What I Learned After Testing

### 1. Server and Client Requests

The Employee Profile and Recent Posts Preview requests run on the Next.js server.

The Explore All Posts request runs in the browser after clicking the button.

I verified the client request using Chrome DevTools Network.

### 2. Suspense Loading Behavior

During the deliberate 3-second delay, the Recent Posts loading fallback appeared.

The Employee Profile, Explore All Posts button, and page header remained visible.

### 3. Suspense and Click-Handler Fetch

Suspense displays its fallback when a component suspends during rendering.

A fetch started inside an onClick handler does not automatically trigger the Suspense fallback.

I used React state to manage the client's loading status.

### 4. HTTP 503 and Fetch

Fetch does not automatically throw when the server returns HTTP 503.

The response.ok property becomes false, so I must check it and throw an error manually.

I verified this by simulating an HTTP 503 response.

## Interview Questions

### 1. Where does each request execute, and what evidence helped you verify that?

- **Employee Profile:** The request runs on the Next.js server inside an async Server Component.
- **Recent Posts Preview:** The request also runs on the server inside an async Server Component wrapped in Suspense.
- **Explore All Posts:** The request runs in the browser after the user clicks the button.

**Evidence:** I checked the component code and used Chrome DevTools Network. Before clicking the button, no direct browser request to the posts API appeared. After clicking, the request appeared with HTTP status 200, initiated by `AllPost.tsx`. The server components fetch their data on the Next.js server.

### 2. Why did you choose server fetching for the profile and client fetching for the button?

I chose server fetching for the Employee Profile because its data should load automatically when the user opens the page, without requiring any interaction.

I chose client fetching for Explore All Posts because the user should decide when to load the posts by clicking the button.

Using React state also allows me to manage loading, success, empty, and error states.

### 3. What activates the preview’s Suspense fallback? Why doesn’t the click-handler request activate it automatically?

The Suspense fallback appears when the Recent Posts Server Component suspends while waiting for its data.

A fetch started inside an onClick handler does not automatically activate Suspense because it runs outside the rendering process.

For Explore All Posts, I use React state to manage and display the loading status.

### 4. What would change if you moved the preview’s boundary around the whole dashboard?

If I moved the Suspense boundary around the entire dashboard instead of keeping it around Recent Posts, the loading fallback could replace the whole dashboard while the preview is loading.

This would temporarily hide the Employee Profile and Explore All Posts button.

I prefer a separate Suspense boundary for the preview so the other sections can remain visible and usable.

### 5. How does your custom error class help, and what does `super(message)` do?

My custom ApiError class helps me handle HTTP errors by storing both an error message and an HTTP status code.

I use `instanceof ApiError` to distinguish HTTP errors from other failures, such as network errors, and display appropriate messages.

The `super(message)` method calls the parent Error class constructor and initializes the error message.

### 6. What is the difference between an HTTP failure, a network failure, and an empty result?

An HTTP failure happens when the server responds with an unsuccessful status code, such as 404 or 503. Fetch does not throw automatically, so I check `response.ok` and throw an `ApiError`.

A network failure happens when the request fails without receiving an HTTP response, such as when the internet connection is unavailable.

An empty result happens when the request succeeds but returns an empty array `[]`. In this case, I display "No posts found" instead of an error message.

### 7. What happens if employee ID 1 is changed to 2 in all three sections?

If I change employee ID 1 to 2 in all three API requests, the dashboard will display the second employee's information and posts.

The Employee Profile will show employee 2's details, Recent Posts Preview will display the first three posts belonging to employee 2, and Explore All Posts will load all posts belonging to employee 2 after clicking the button.

The server and client fetching behavior will remain the same.

### 8. Which decision did you personally verify rather than accepting without checking?

I personally verified that Suspense does not automatically handle loading for a fetch request started inside a click handler.

I tested the Explore All Posts button using Chrome DevTools Network and Slow 3G throttling.

I confirmed that React state correctly displayed the loading status and disabled the button while the request was pending.

This helped me understand why using `useState` was necessary for managing the client-side loading state.

## AI Usage and Verification

### AI Suggestion

AI suggested using React state to manage the loading, success, empty, and error states for the Explore All Posts button. It also suggested disabling the button while the request is loading.

### How I Verified It

I tested the button using Chrome DevTools with Slow 3G throttling.

I confirmed that the loading message appeared, the button became disabled, and repeated clicks did not create additional API requests.

### My Decision

I accepted the suggestion because the tests confirmed that it worked correctly and prevented duplicate requests while loading.
