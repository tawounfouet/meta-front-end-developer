# Self-review: Create a light-dark theme switcher

1. When creating a Provider component, what should you do with the `children` prop that it receives?
    - Nothing, the `children` prop is not necessary and can be skipped during the rendering. 
    - You should clone the `children` inside the component to add the context value to it. 
    - You should wrap the JSX that it returns with a Context Provider component and then pass the `children` through. 
    ```
    A: You should wrap the JSX that it returns with a Context Provider component and then pass the children  through. 
    ```

2. Assuming that the default theme for the application is "light", what should be the default value passed to the `createContext` call? Select all that apply.
    - undefined 
    - null
    - The string `"light"`
    ```
    A: undefined
            null
            The string "light"
    ```

3. One of the parts of the context injected into the application is a function called toggleTheme. Assuming that the theme is held in some local state as a string that can be either ‘light’ or ‘dark’. What should be the exact implementation of the toggleTheme function?
    -   ```jsx
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
        ```
    -   ```jsx
        toggleTheme: (theme) => setTheme(!theme)
        ```
    -   ```jsx
        toggleTheme: () => setTheme(theme === "light" ? "light" : "dark")
        ```
    ```
    A: toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
    ```