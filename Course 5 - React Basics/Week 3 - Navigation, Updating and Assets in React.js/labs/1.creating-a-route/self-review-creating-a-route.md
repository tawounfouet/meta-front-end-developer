# Self review: Creating a route

1. What did you need to install in order to create routes?
    - `react-dom`
    - `router-dom`
    - `react-router-dom`
    - `three.js`
    ```
    A: react-router-dom
    ```

2. Instead of anchor tags, what tag did you use with React Router?
    - the `element` attribute
    - the `Link` tag
    - the `To` tag
    - the `to` attribute
    ```
    A: the Link tag
    ```

3. What's wrong with this code?
    ```js
    <Link to="/" className="nav-item" href="/">
        Home
    <Link>
    ```
    - You cannot have hyphens in the value of the `className` attribute.
    - The `href` attribute should not be used here.
    - The `to` attribute can't have just the `"/"` value.
    ```
    A: The href attribute should not be used here.
    ```