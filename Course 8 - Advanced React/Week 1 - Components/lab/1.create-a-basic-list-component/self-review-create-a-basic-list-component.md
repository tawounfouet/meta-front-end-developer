# Self-review: Create a basic List component

1. When using the `filter` operator from arrays in JavaScript, what __type__ should you return from the predicate function to determine if the element should be filtered out or not?
    - You should return `null` if the element should be filtered out and any other value to keep the element. 
    - You should return `true` to keep the element and `false` to filter out the element. 
    - You should return `undefined` to filter out the element and `true` to keep it in the list. 
    ```
    A: You should return true to keep the element and false to filter out the element. 
    ```

2. When chaining the three array operators required to complete the exercise, `map`, `filter` and `sort`; in which order should they be applied to `props.data`? Remember that `props.data` contains an array of dessert objects.
    - `sort`, `filter`, `map`. 
    - `map`, `filter`, `sort`. 
    - `filter`, `sort`, `map`. 
    ```
    A: filter, sort, map. 
    ```

3. When using the `map` function to transform an array item into a `<li>` element, what of the following code snippets should be inside the `<li>` tag to render the list item correctly in the following format: `Ice Cream - 200 cal`
    -   ```jsx
        <li>${dessert.name} - ${dessert.calories} cal</li>
        ```
    -   ```jsx
        <li>dessert.name - dessert.calories + “cal”</li>
        ```
    -   ```jsx
        <li>{dessert.name} - {dessert.calories} cal</li>
        ```
    ```
    A: <li>{dessert.name} - {dessert.calories} cal</li>
    ```
