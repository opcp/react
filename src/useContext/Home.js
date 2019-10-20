import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { login } from './login/login'

const Home = () => {
    const { user, setUser } = useContext(UserContext)
    return (
        <>
            <h1>首頁</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            {user ? (<button onClick={() => {
                setUser(null)
            }}> logout </button>
            ) : (
                    <button onClick={async () => {
                        const user = await login()
                        setUser(user)
                    }}
                    >
                        login
            </button>
            )}
        </>
    )
}

export default Home