import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api'

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'
import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   function handleSignUp() {
      if(!name || !email || !password) {
         return alert("Por favor, informe todos os campos!")
      }

      api.post("/users", { name, email, password })
      .then(() => {
         alert("Usuario cadastrado com sucesso!")
         navigate("/")
      })
      .catch(error => {
         if(error.response) {
            alert(error.response.data.message)
         } else {
            alert("Não foi possivel se cadastrar!")
         }
      })
   }

   return(
      <Container>
         <Form>   
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h3>Crie sua conta</h3>

            <Input 
               placeholder='Nome'
               type='text'
               icon={FiUser}
               onChange={(e) => setName(e.target.value)}
            />
            <Input 
               placeholder='Email'                             
               type='email'
               icon={FiMail}
               onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
               placeholder='Senha'
               type='password'
               icon={FiLock}
               onChange={(e) => setPassword(e.target.value)}
            />

            <Button 
               title='Cadastrar'
               onClick={handleSignUp}
            />
            <ButtonText 
               title='Voltar para login'
               onClick={() => navigate("/")}
            />
         </Form>

         <Background/>
      </Container>
   )
}