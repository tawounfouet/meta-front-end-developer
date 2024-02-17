# Self-review: Can you fetch data?

1. True or False: When invoking the `fetch()` function to get some JSON data from an API, you should pass it a URL.
    - True
    - False
    ```
    A: True
    ```

2. True or False: After invoking the `fetch()` function, you need to add a call to the `then()` function.
    - True
    - False
    ```
    A: True
    ```

3. Choose the right way to handle the response from a fetch call.
    - `then( response => response.json())`
    - `then( response => json() )`
    - `then( json => response() )`
    ```
    A: then( response => response.json())
    ```