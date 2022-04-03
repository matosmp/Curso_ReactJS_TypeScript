import { Link } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <Link to={"/entrar"}> Clique aqui para ir na página Login </Link>
        </>
    );
}