import { useAuth } from '../../hooks/auth'; 
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { api } from '../../services/api';

import { Container, Profile } from './styles';
import { Input } from '../../components/Input';

export function Header() {

   const { signOut, setSearch , user } = useAuth();
   const navigate = useNavigate();

   const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

   function handleSignOut(event) {
      event.stopPropagation();
      signOut();
      navigate("/")
   }

   return(
   <Container>
      <h1>RocketMovies</h1>      

      <Input 
         placeholder='Pesquisar pelo título'
         onChange={e => setSearch(e.target.value)}
      />

      <Profile onClick={() => navigate("/profile")}>
         <div>
            <strong>{user.name}</strong>
            <button onClick={handleSignOut}>sair</button>
         </div>

         <img src={avatarUrl} alt="user photo"/>
      </Profile>
   </Container>
   )
}