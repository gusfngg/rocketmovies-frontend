import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { useAuth } from '../../hooks/auth'

export function SignIn() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const { signIn } = useAuth();
   const navigate = useNavigate();
   
   function handleSignIn() {
      signIn({ email, password})
   }

   return(
      <Container>
         <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h3>Faça seu login</h3>
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
               title='Entrar'
               onClick={handleSignIn}
            />
            
            <ButtonText  title='Criar conta' onClick={() => navigate("/register")}/>
         </Form>

         <Background/>
      </Container>
   )
}