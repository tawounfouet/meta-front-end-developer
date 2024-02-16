# Self review: Displaying images

1. Is this code a correct way to import an image in React?
    ```jsx
    import avatar from "./assets/avatar.png"

    function UserImage() {
        return ( 
            <div>
                <img 
                    src={avatar}
                    alt = "User image" 
                />
            < /div>
        )
    }
    export default UserImage;
    ```
    - Yes 
    - No
    ```
    A: Yes
    ```

2. Is this code a correct way to import an image in React?
    ```jsx
    function UserImage() {
        const avatarImg = "https://picsum.photos/400/265";
        return ( 
            <div>
                <img 
                    src="avatar.png"
                    alt="User image" 
                />
            </div>
        )
    }
    export default UserImage;
    ```
    - Yes 
    - No
    ```
    A: No
    ```

3. What's wrong with this code?
    ```jsx
    function ProfileImage() {
        const profileImg = "https://picsum.photos/400/265";
        return <img src={profileImg} alt="Profile image" />
    }
    export default ProfileImage;
    ```
    - You must surround the img element with a root, wrapping div element.
    - Nothing. This code is correct.
    - There should be parentheses after the return keyword and the img element should spread its attributes over multiple lines.
    ```
    A: Nothing. This code is correct.
    ```
