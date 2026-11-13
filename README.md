# Employee Explorer

Employee Explorer is a Next.js application that displays an employee's profile and posts using the JSONPlaceholder API.

This project was developed for TechTalks Company Assignment 3 to demonstrate server-side and client-side data fetching, React Suspense, error handling, and loading states.

## Features

- **Employee Profile:** Displays employee information fetched on the server.
- **Recent Posts Preview:** Displays the first three posts using a Server Component and React Suspense.
- **Explore All Posts:** Loads all employee posts in the browser after clicking a button.
- **Loading States:** Uses Suspense for server loading and React state for client loading.
- **Error Handling:** Handles HTTP errors, network failures, and empty results.
- **Retry:** Allows users to retry a failed client-side request.
- **Responsive Design:** Supports desktop and mobile screen sizes.

## Technologies Used

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- JSONPlaceholder API

## Getting Started

1. Clone the repository.
2. Open the project folder.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.
5. Open http://localhost:3000 in your browser.

## How It Works

**Server-side requests:**

- Employee Profile: `https://jsonplaceholder.typicode.com/users/1`
- Recent Posts Preview: `https://jsonplaceholder.typicode.com/posts?userId=1`

**Client-side request:**

- Explore All Posts: `https://jsonplaceholder.typicode.com/posts?userId=1`

The server requests begin when the page is rendered. The client request starts only when the user clicks the Explore All Posts button.

## Error Handling

The application uses a custom `ApiError` class to store HTTP error messages and status codes.

Network failures are handled separately. Empty post results display a dedicated message instead of being treated as errors.

## Testing

The application was tested for server and client fetching, loading behavior, HTTP failures, network failures, empty results, recovery, mobile responsiveness, and keyboard navigation.

Verification commands:

- `npm run lint`
- `npm run build`

## Documentation

- [Interview Notes](docs/INTERVIEW.md)
- [Testing Results](docs/TESTING.md)
- [Testing Screenshots](docs/evidence/)

## Limitations

- The application displays only employee ID 1.
- It uses the public JSONPlaceholder mock API.
- An internet connection is required to retrieve employee data.
- It does not include authentication or a database.
