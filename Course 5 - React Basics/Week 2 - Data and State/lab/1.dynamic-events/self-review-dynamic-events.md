# Self review: Dynamic events

1. In React, you are not allowed to code a separate function that should be run to handle a click event.
    - True 
    - False
    ```
    A: False
    ```

2. Event-handling attributes in React are named almost the same as in HTML. Syntactically, the only difference is in the capitalization.
    - True 
    - False
    ```
    A: True
    ```

3. W​hat's wrong with this code?
    ```js
    <button onClick={handleClick()}>
        Click me
    </button>
    ```
    - You cannot invoke an event-handling function from a JSX expression.
    - The event-handling attribute should be all lowercased.
    - T​his code should work.
    ```
    A: You cannot invoke an event-handling function from a JSX expression.
    ```