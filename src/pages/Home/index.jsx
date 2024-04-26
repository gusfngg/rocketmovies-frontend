import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Content } from './styles';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movie'
export function Home() {
   const [notes, setNotes] = useState([]);

   const { search, user } = useAuth();
   const navigate = useNavigate();

   function handleDetailsNote(id) {
      navigate(`/details/${id}`);
   } 

   useEffect(() => {
      async function fetchNotes() {
         const response = await api.get(`/notes?title=${search}`);
         setNotes(response.data);
      }

      fetchNotes();

   }, [search]);
   return (
      <Container>
         <Header/>

         <main>
            <header>
               <h1>Meus filmes</h1>

               <Button 
                  title='Adicionar filme'
                  icon={FiPlus}
                  onClick={() => navigate("/new")}
               /> 
            </header>
            
            <Content>
               {notes.map((note) => (
                     <Movie
                        key={String(note.id)}
                        data={note}
                        onClick={() => handleDetailsNote(note.id)}
                     />
                  ))}
            </Content>
         </main>
      </Container>
   )
}