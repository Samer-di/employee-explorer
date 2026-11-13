# Assignment 3 — Testing Evidence

## 1. Test Results

| Check                | Expected Result                                                                            | Actual Result                                                                                                                                                                         | Status |
| -------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Server Profile       | Display employee 1's name, email, and company.                                             | Verified that the displayed name, email, and company match the data returned by GET /users/1. The request runs in an async Server Component.                                          | PASS   |
| Server Preview       | Show the Suspense fallback during a deliberate delay while the page shell remains visible. | Added a 3-second delay. The loading fallback appeared while the page header, Employee Profile, and Explore All Posts remained visible.                                                | PASS   |
| Client Idle          | No browser posts fetch before clicking the button.                                         | No posts request appeared in Network before clicking.                                                                                                                                 | PASS   |
| Client Slow          | Show loading feedback and prevent duplicate requests.                                      | Used Slow 3G throttling. Loading feedback appeared, the button was disabled, and only one request was recorded despite repeated click attempts.                                       | PASS   |
| Client Success       | Display returned post titles and bodies.                                                   | The browser request returned HTTP 200 and posts were displayed.                                                                                                                       | PASS   |
| HTTP Failure         | Throw and handle ApiError for an unsuccessful HTTP response.                               | Simulated HTTP 503; the custom error message appeared.                                                                                                                                | PASS   |
| Empty Response       | Display "No posts found" without an error.                                                 | Simulated an empty array; the empty-state message appeared.                                                                                                                           | PASS   |
| Recovery             | Retry successfully and clear the error message.                                            | Retried after restoring the connection; posts appeared.                                                                                                                               | PASS   |
| Section Independence | Client failure must not hide the server profile or preview.                                | Simulated a client network failure using Offline mode. The client error message appeared while Employee Profile and Recent Posts Preview remained visible.                            | PASS   |
| Usability            | Visible labels, keyboard focus, and readable layout at 360px.                              | Tested the layout at 360px using iPhone 12 mini emulation. The cards and controls remained readable. Keyboard focus was visible, and the Explore All Posts button worked using Enter. | PASS   |

## 2. Screenshots

- Normal state: [View Screenshot](evidence/normal-state.png)
- Server-preview loading: [View Screenshot](evidence/server-preview-loading.png)
- Client error: [View Screenshot](evidence/client-error.png)
- Empty state: [View Screenshot](evidence/empty-state.png)

### Mobile Responsive — 360px

- Employee Profile: [View Screenshot](evidence/mobile-profile.png)
- Recent Posts Preview: [View Screenshot](evidence/mobile-recent-posts.png)
- Explore All Posts: [View Screenshot](evidence/mobile-explore-posts.png)

### Server Preview Loading Test

1. Added a temporary 3-second delay before the server fetch.
2. Refreshed the page.
3. Observed the Suspense loading fallback.
4. Verified that independent sections remained visible.
5. Captured a screenshot during loading.
6. Removed the temporary delay after testing.

Result: PASS

### Client Slow Test

1. Opened Chrome DevTools and selected Network.
2. Enabled Slow 3G throttling.
3. Cleared previous network requests.
4. Clicked Explore All Posts.
5. Observed the loading message and disabled button.
6. Attempted repeated clicks during loading.
7. Verified that only one posts request was sent.
8. Restored No throttling.

Result: PASS

### Client Error Test

1. Opened Chrome DevTools and selected Network.
2. Switched from No throttling to Offline.
3. Clicked Explore All Posts without refreshing the page.
4. Observed the network error message.
5. Verified that the server profile and preview remained visible.
6. Captured a screenshot of the error state.
7. Restored No throttling.

Result: PASS

### Empty State Test

1. Temporarily replaced the fetched posts data with an empty array [].
2. Clicked Explore All Posts.
3. Observed the "No posts found" message.
4. Verified that Total Posts displayed 0.
5. Captured a screenshot of the empty state.
6. Restored the original API response handling.

Result: PASS

### Usability Test

1. Opened Chrome DevTools.
2. Selected iPhone 12 mini (360px width).
3. Checked the responsive layout and text readability.
4. Verified that the three dashboard sections were displayed correctly.
5. Tested keyboard navigation using Tab.
6. Verified visible keyboard focus on the Explore All Posts button.
7. Pressed Enter to activate the button.

Result: PASS

## 3. Build and Lint

### Production Build

Command: npm run build

Result: PASS

- Next.js Version: 16.4.6
- Compilation: Successful
- TypeScript Check: Passed
- Static Page Generation: Successful (3/3)
- Final Page Optimization: Successful
- Root Route (/): Partial Prerendering

The production build completed successfully without errors.

### ESLint

Command: npm run lint

Result: PASS

ESLint completed successfully with 0 errors and 0 warnings.

An unused variable warning was detected during the first run, corrected, and verified by running ESLint again.

## 4. Testing Notes

- Client posts are requested only after clicking the button.
- HTTP errors and network failures are handled separately.
- Empty responses are not treated as HTTP errors.
- Temporary test modifications were removed after testing.
- Server components use independent Suspense boundaries.
- Client loading and error states are managed using React state.
- The dashboard was tested at a mobile viewport width of 360px.
- Keyboard navigation and visible focus were tested successfully.
