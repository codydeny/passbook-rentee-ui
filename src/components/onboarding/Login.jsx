import React from 'react'
import useStore from '../../utlis/customHooks/useStore'


export default function Login() {
    const store = useStore()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    React.useEffect(() => {
        
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        await store.signupWithFirebase(email, password);
    }

    return (
        <div>
            <form onSubmit={handleLogin} className="flex flex-col justify-center border border-gray-300 p-3 rounded-lg" autoComplete='off'>
                <input autoComplete='off' className="m-4 p-3 border border-gray-300 rounded-lg" value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name="email" placeholder="Email"  />
                <input autoComplete='off' className="m-4 p-3 border border-gray-300 rounded-lg active:border-blue-600" value={password} onChange={(e)=> setPassword(e.target.value)} type="text" name="password" placeholder="Password" />
                <button className="m-4 btn px-2 py-4 border border-blue-600 text-blue-600 rounded-lg" onClick={handleLogin}>Login</button>
            </form>
            <div className="my-5 flex flex-col justify-center">
                <span className="display-5 fw-bold">Users</span>
                {store.state.user.map((u)=> (
                <div className="my-5 flex flex-col">
                    <span className="text-gray-600 text-center">{u.email}</span>
                    <span className="text-gray-600">{u.accessToken}</span>
                </div>
                ))}
            </div>
        </div>
    )
}
