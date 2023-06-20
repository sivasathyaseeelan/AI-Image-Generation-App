import { Outlet, Navigate } from 'react-router-dom'

const PrivateRouter = () => {
    return(
        localStorage.getItem('token') ? <Outlet /> : <Navigate to='/Signin' />
    )
}

export default PrivateRouter
