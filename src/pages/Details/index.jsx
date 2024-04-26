import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom' 

import { FiClock } from 'react-icons/fi';
import { Container, Content } from './styles';
import { Header } from  '../../components/Header'
import { ButtonText } from  '../../components/ButtonText'
import { Stars } from  '../../components/Stars'
import { Tag } from  '../../components/Tag'

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export function Details() {
   const [data, setData] = useState(null);
   const { user } = useAuth(); 

   const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
   
   const navigate = useNavigate();
   const params = useParams();


   useEffect(() => {
      async function fetchNotes() {
         const response = await api.get(`/notes/${params.id}`)
         setData(response.data)
      }

      fetchNotes();
   }, [])

   return(
      <Container>
            <Header/>

            <main>
               <Content> 
                  <ButtonText title='Voltar' onClick={() => navigate(-1)}/>
                  <header>
                     <div>
                        <h1>{data && data.title}</h1>
                        <Stars rating={data && data.rating}/>
                     </div>

                     <div>
                        <img src={avatarUrl} alt="user photo"/>

                        <span>Por {user.name}</span>

                        <FiClock/>

                        <span>
                           {
                              data && data.created_at
                           }
                        </span>
                     </div>
                  </header>
                  <div>
                     {
                        data && data.tags.map((tag, index) => (
                           <Tag title={tag.name} key={String(index)}/>
                        ))
                     }
                  </div>

                  <p>
                     {
                        data && data.description
                     }
                  </p>

               
               </Content>
            </main>              
      </Container>
   )
}