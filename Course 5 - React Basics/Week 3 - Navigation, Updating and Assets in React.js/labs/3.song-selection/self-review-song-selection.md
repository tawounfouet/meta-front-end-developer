# Self review: Song selection

1. In plain JavaScript, how do you build an instance of the Audio constructor?
    - `New Audio();`
    - `Audio();`
    - `new Audio();`
    ```
    A: new Audio();
    ```

2. If an object instance of the `Audio` constructor is saved in a variable named `song`, what property on the `song` object can you use to check if the song is currently playing?
    - `song.play()`
    - `song.pause();`
    - `song.paused`
    ```
    A: song.paused
    ```

3. What is wrong with this code?
    ```jsx
    function toggle() {
        if(song.paused) {
            song.pause()
        } else {
            song.play()
        }
    }
    ```
    - The app's logic doesn't work. The code on line 3 and the code on line 5 should swap places.
    - The condition in the `if` statement is wrong. It should be: `if(song.paused())`
    - You need to have an `else if` condition, in between the `if` and `else` conditions.
    ```
    A: The app's logic doesn't work. The code on line 3 and the code on line 5 should swap places.
    ```