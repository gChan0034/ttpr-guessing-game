# 🎯 Number Guessing Game Assignment

## ✅ Requirements

1. Complete all empty functions/methods
2. Use proper array methods and DOM manipulation
3. Handle edge cases (invalid input, duplicates)
4. Display game state visually
5. Add event listeners for user interaction

## 🛠 Implementation Steps

### 1. Core Logic

- Implement `generateWinningNumber`
- Complete `shuffle` using the **Fisher-Yates** algorithm
- Fill in all methods in the `Game` class

### 2. DOM Interaction

- Set up event listeners for user actions
- Update the display for user guesses
- Show real-time feedback messages
- Implement game reset functionality

### 3. Validation

- Prevent non-numeric input
- Handle numbers out of range (1–100)
- Track and block duplicate guesses

## 💡 Hints

- Use `Math.random()` for generating random numbers
- Arrays are **0-indexed**
- Use `element.classList` to add/remove CSS classes
- Test edge cases like:
  - Number `1` and `100`
  - Submitting a 5th guess

## 🧪 Testing

- To test your implementation against the specs, run:
  ```bash
  npm install
  npm run test
  ```
  - This will install the needed packages and run Jasmine.
- Make sure all tests pass before submitting your assignment.

## 🚀 Hosting with Vercel

Deploy your game live for free in 2 minutes:

1. **Push to GitHub**  
   Make sure your code is committed and pushed to a GitHub repository.

2. **Deploy via Vercel**:  
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository" and connect your GitHub account
   - Select your game repository
   - Click "Deploy" (no configuration needed!)

3. **Access Live Demo**:  
   Vercel will provide a URL like:  
   `https://your-project-name.vercel.app`