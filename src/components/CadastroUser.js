import { useState } from 'react';
import './CadastroUser.css';

function CadastroUser(){
    const [email, SetEmail] = useState('')
    console.log(email)

    async function salvar(){

        let api = await fetch('https://viacep.com.br/ws/'+email+'/json/');

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
                <input type="text" name ='nome' id='nome'/>

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
                />

                <label htmlFor='senha'>Senha</label>
                <input type='password' name ='senha' id='senha'/>

                <input onClick= {salvar} type='button' value='Cadastrar'/>

            </form>
        </div>
    )
}

export default CadastroUser;