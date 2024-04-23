import { useState } from 'react'

interface User {
    uid: string;
    name: string;
}

const tempUser: User = {
    uid: 'xyz890',
    name: 'Default Name'
}

export const Usuario = () => {
    const [user, setUser] = useState<User>(tempUser);

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Santiago Galván'
        })
    }

    return (
        <div className="mt-5">
            <h3> Usuario: </h3>

            <button
                onClick={login}
                className="btn btn-outline-primary">
                Login
            </button>

            {
                (!user)
                    ? <pre>No Hay Usuario</pre>
                    : <pre> {JSON.stringify(user)} </pre>
            }

        </div>
    )
}