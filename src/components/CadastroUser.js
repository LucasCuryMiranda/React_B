import { useState } from 'react';
import './CadastroUser.css';

function CadastroUser(){
    const [email, SetEmail] = useState('')
    console.log(email)

    const [name, SetName] = useState('')
    console.log(name)

    const [password, SetPassword] = useState('')
    console.log(password)

    const [is_active, SetIs_active] = useState('')
    console.log(is_active)

    const [cpf_cnpj, SetCpf_cnpj] = useState('')
    console.log(cpf_cnpj)

    async function salvar(){

        let api = await fetch("http://127.0.0.1:8081/api/users",{
            method:"POST",
            body:JSON.stringify({
                "name":name,
                "email":email,
                "password":password,
                "cpf_cnpj":cpf_cnpj

            }),
            headers:{
            "Content-Type":"application/json"
            }
        });

        let resposta = await api.json();

        if(api.ok){
            console.log(resposta)
            return
        }
        console.log(resposta);
    }
    
    

    return (
        <div id = "formulario">
            <form>
            
                <h2>Cadastre-se</h2>
                <label htmlFor="nome">Nome</label>
                <input 
                type="text" 
                name ='nome' 
                id='nome'
                value = {name}
                onChange={(e) => SetName(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input 
                type="email"
                name ='email' 
                id='email'
                value = {email}
                onChange={(e) => SetEmail(e.target.value)}
                />

                <label htmlFor="cpf_cnpj">CPF / CNPJ</label>
                <input 
                type="text" 
                name ='cpf_cnpj' 
                id='cpf_cnpj'
                value = {cpf_cnpj}
                onChange={(e) => SetCpf_cnpj(e.target.value)}
                />

                <label htmlFor='senha'>Senha</label>
                <input 
                type='password' 
                name ='senha' 
                id='senha'
                value = {password}
                onChange={(e) => SetPassword(e.target.value)}
                />

                <input onClick= {salvar} type='button' value='Cadastrar'/>

            </form>
        </div>
    )
}

export default CadastroUser;