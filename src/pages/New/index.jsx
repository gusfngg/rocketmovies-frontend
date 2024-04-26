import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import { Container, Form } from './styles'

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { MovieItem } from '../../components/MovieItem';
import { Button } from '../../components/Button';

export function New() {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [rating, setRating] = useState("");

   const [tags, setTags] = useState([]);
   const [newTag, setNewTag] = useState("");

   const navigate = useNavigate();

   function handleNewTag() {
      setTags(prevState => [...prevState, newTag])
      setNewTag("")
   }

   function handleRemoveTag(deleted) {
      setTags(prevState => prevState.filter(tag => tag !== deleted))
   }

   async function handleNewNote() {
    if (!title || !rating) {
      return alert("Por favor, insira o título e a nota do filme.");
    }
    
    if(newTag) {
      return alert("Voce deixou uma tag para adicionar, porem não clicou no botão de adicionar! Clique para adicionar ou deixe o campo vazio!")
    }

      await api.post("/notes", {
         title,
         description,
         rating,
         tags
      });

      alert("Nota criada com sucesso!")
      navigate(-1)
   }

   return(
      <Container>
         <Header/>
         
         <main>
            <Form>
               <header>
                  <ButtonText 
                    title='Voltar'
                    onClick={() => navigate(-1)}  
                  />
                  <h1>Novo filme</h1>
               </header>

               <div>
                  <Input
                     placeholder="Título"
                     type='text'
                     onChange={e => setTitle(e.target.value)}
                  /> 

                  <Input
                     placeholder='Sua nota (de 0 a 5)'
                     type='number'
                     min='0'
                     max='5'
                     onChange={e => setRating(e.target.value)}
                  />
               </div>

               <TextArea
                  placeholder='Observações'
                  onChange={e => setDescription(e.target.value)}
               />

               <h2>Marcadores</h2>
                  <div className="tags">
                     {
                        tags.map((tag, index) => (
                           <MovieItem
                              key={String(index)}
                              value={tag}
                              onClick={() => {handleRemoveTag(tag)}}
                           />
                        ))
                     }
                     <MovieItem
                        isNew
                        placeholder="Nova tag"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onClick={handleNewTag}
                     />
                  </div>

               <div className="buttons">
                  <Button
                     type='text'
                     title='Excluir filme'
                  />
                  <Button
                     title='Salvar alterações'
                     onClick={handleNewNote}
                  />
               </div>
            </Form>
         </main>
      </Container>
   )
}