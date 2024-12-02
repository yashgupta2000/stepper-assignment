# Stepper

This is a step-by-step form application with four parts where users can:
- Enter personal details.
- Choose a plan (monthly or yearly).
- Pick extra features (add-ons).
- Review everything before confirming.

The app makes sure:
- Users get alerts for missing or incorrect inputs.
- It’s easy to go back and make changes.

## Features

1. **Step-by-Step Form**:
   - **Personal Info**: Enter your details.
   - **Choose a Plan**: Pick a plan with radio buttons.
   - **Add Features**: Select add-ons with checkboxes.
   - **Summary**: See all choices before confirming.

2. **Input Validation**:
   - Alerts for missing fields or invalid email.
   - Prompts if you try to proceed without making a choice.

3. **Cost Updates**:
   - Yearly plans are `10 × monthly cost`.
   - Add-on prices update based on the chosen plan.

4. **Easy Navigation**:
   - Use **Next** and **Back** buttons to move between steps.
   - Click step numbers to go back and edit.
   - Move forward only with the **Next** button.

5. **Responsive Design**:
   - Works well on both mobile and desktop.

6. **Confirmation**:
   - Shows a final alert after submission.

## Prerequisites

Before you run the app, make sure you have the following installed:

- **Node.js** (Recommended: LTS version)  
- **npm** (Comes bundled with Node.js)

To check if Node.js and npm are installed, run these commands in your terminal:  

```
 node -v
```
```
 npm -v
```

If you don't have Node.js and npm installed, you can download and install them from here.

## Installation
To get started with this project, follow these steps:

1. Clone the repository (if you haven't already):
  
   ```
   git clone https://github.com/yashgupta2000/stepper-assignment.git
   ```
   ```
   cd my-app
    ```

2. Install dependencies

    ```
    npm install 
    ```

This will install the packages listed in `package.json`, including:  
- **React** and **React-DOM**: For creating the user interface.
- **Redux**: To manage shared app data and keep it consistent across steps.
- **React Router DOM**: For handling app navigation.
- **FontAwesome**: For icons.
- **Tailwind CSS**: For modern, utility-first styling.

---

## Start the Development Server
 ```
 npm start
```
Finally, start the React development server: 
