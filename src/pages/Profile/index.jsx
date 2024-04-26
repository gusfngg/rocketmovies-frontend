import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Container, Form, Avatar } from './styles';

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile(){
   const { user, updateProfile } = useAuth();

   const [name, SetName] = useState(user.name); 
   const [email, SetEmail] = useState(user.email); 
   const [passwordOld, SetPasswordOld] = useState(); 
   const [passwordNew, SetPasswordNew] = useState(); 

   const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
   const [avatar, setAvatar] = useState(avatarUrl); 
   const [avatarFile, setAvatarFile] = useState(null); 

   const navigate = useNavigate();

   async function handleUpdate() {
      const user = {
         name,
         email,
         password: passwordNew,
         old_password: passwordOld
      }

      await updateProfile({ user, avatarFile })
   }

   function handleChangeAvatar(event) {
      const file = event.target.files[0];
      setAvatarFile(file);

      const imagePreview = URL.createObjectURL(file);
      setAvatar(imagePreview)
   }

   return(
      <Container>
         <header>
            <ButtonText title='Voltar' onClick={() => navigate(-1)}/>
         </header>

         <Form>
            <Avatar>
               <img src={avatar} alt='user photo' />
               
               <label htmlFor="avatar">
                  <FiCamera/>

                  <input
                     id='avatar'
                     type='file'
                     onChange={handleChangeAvatar}
                  />
               </label>
            </Avatar>
            <Input
               placeholder="Nome"
               type="text"
               icon={FiUser}
               value={name}
               onChange={(e) => SetName(e.target.value)}
            />
            <Input
               placeholder="E-mail"
               type="text"
               icon={FiMail}
               value={email}
               onChange={(e) => SetEmail(e.target.value)}
            />
            <Input
               placeholder="Senha atual"
               type="password"
               icon={FiLock}
               onChange={(e) => SetPasswordOld(e.target.value)}
            />
            <Input
               placeholder="Nova senha"
               type="password"
               icon={FiLock}
               onChange={(e) => SetPasswordNew(e.target.value)}
            />

            <Button 
               title='Salvar'
               onClick={handleUpdate}      
            />
         </Form>
      </Container>
   )
}