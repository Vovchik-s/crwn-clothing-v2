import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        createUserDocumentFromAuth(response.user)
        // console.log(response)
        const userRef = await createUserDocumentFromAuth(response.user) 
        // Created users database in firebase if it doesn't exist *see firebase.utils.js
    }

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
        </div>
    )
}

export default SignIn;
