import { useEffect, useState } from "react";

export const Login = () => {

    const [password, setPassword] = useState('');
    const [email,setEmail] = useState('');

useEffect(()=>{
    alert('Executando essa mensagem com useEffect somente esse vez quando é criado o componente')
},[])

useEffect(()=>{
    console.log(email)

},[email]);// Toda vez que o estado do email for alterado será executado a instrução acima(console.log(emai))

useEffect(()=>{
    console.log(password)
},[password]); // Toda vez que o estado do email for alterado será executado a instrução acima(console.log(emai))



    const handlerEntrar = () => {
            console.log(email);
            console.log(password);
    }

    return (
        <div>
            <form >
                <label >
                    <span>Email</span>
                    <input value={email} onChange={e=>setEmail(e.target.value)}/>
                </label>
                <label >
                    <span>Senha</span>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                </label>
                <button type="button" onClick={handlerEntrar}>
                    Entrar
                </button>
            </form>

        </div>
    );

}



/** Na aula 06 foi explicado como usar a navegação utilizando função com useNavigation
 * 
 * 
 * 
   import { useNavigate } from "react-router-dom";


export const Login = ()=>{

    const navigate = useNavigate();

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