import { useCallback, useEffect, useMemo, useState } from "react";

export const Login = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const emailLength = useMemo(() => {
        return email.length * 1000
    }, [email.length])

    const handlerEntrar = useCallback(() => {
        console.log(email);
        console.log(password);
    }, [email, password])

    return (
        <div>
            <form >
                <p>Quantidade de caracteres no email: {emailLength}</p>
                <label >
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label >
                    <span>Senha</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="button" onClick={handlerEntrar}>
                    Entrar
                </button>
            </form>

        </div>
    );

}



/** Instruções das aulas 06 até a 08 
 * 
 * 
   import { useNavigate } from "react-router-dom";


export const Login = ()=>{

    const navigate = useNavigate();

    useEffect(()=>{
    alert('Executando essa mensagem com useEffect somente esse vez quando é criado o componente')
},[])

useEffect(()=>{
    console.log(email)

},[email]);// Toda vez que o estado do email for alterado será executado a instrução acima(console.log(emai))

useEffect(()=>{
    console.log(password)
},[password]); // Toda vez que o estado do email for alterado será executado a instrução acima(console.log(emai))


    const handleClick = ()=>{
        navigate('/pagina-inicial')
    }

return(
    <div>
        <h1>Login</h1>
        <button onClick={handleClick}>Ir para página inicial</button>
    </div>
);

}
 * 
 * 
 * 
 */