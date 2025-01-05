# Node.js Unhandled Exception in Event Loop

This repository demonstrates a common yet elusive bug in Node.js applications: an unhandled exception that occurs within the event loop.  This type of error can be extremely difficult to track down because it doesn't always manifest consistently.

The core issue lies in how asynchronous operations and error handling interact.  A subtle race condition or unexpected asynchronous error can sometimes slip through and cause the application to crash without clear indication in the console.

## Reproducing the Bug

1. Clone this repository.
2. Run `node bug.js`
3. Observe the inconsistent behavior; sometimes it works without issues, sometimes you may see an unhandled exception. The exact behavior depends on timing and system load. 

## Solution

The solution focuses on robust error handling.  By using try-catch blocks in all the asynchronous operations and adding additional logging for debugging,  you improve the chances of capturing the error and finding its root cause.

Check the `bugSolution.js` file for the resolved code.