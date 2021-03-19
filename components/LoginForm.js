import React, {useState} from 'react'

function LoginForm(props) {
    
    const [hasAccount, setHasAccount] = useState(true)

    const submitHandler = evt => {
        evt.preventDefault()
        props.loginToggler()
    }

    const hasAccountToggler = () => {
        setHasAccount(hasAccount => !hasAccount)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="InnerForm">
                {hasAccount ? <h1>Login</h1> : <h1>Register</h1>}
               
                <div className="FormElement">
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" placeholder="Username..."/>
                </div>
                
                <div className="FormElement">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" placeholder="Password..."/>
                </div>
                
                {hasAccount ?
                    <div>
                        <div>
                            <a onClick={hasAccountToggler}>Don't have an account? Register Here</a>
                        </div>
                        <input type="submit" value="Login"/>
                    </div>
                :
                    <div>
                        <div className="FormElement">
                            <label htmlFor="confirmPassword">Confirm Password: </label>
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Password..."/>
                        </div>

                        <div>
                            <a onClick={hasAccountToggler}>Already signed up? Login Here</a>
                        </div>
                        <input type="submit" value="Register"/>
                    </div>
                }
            </div>
        </form>
    )
}

export default LoginForm;