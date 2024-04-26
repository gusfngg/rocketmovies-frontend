import { Container } from './styles';
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'

export function Movie({ data, ...rest }) {
   return (
      <Container {...rest}>
         <h1>{data.title}</h1>
         <Stars rating ={data.rating}/>

         <p>{data.description}</p>

          {data.tags && (
            <footer>
              {data.tags.map((tag) => (
                <Tag key={tag.id} title={tag.name} />
              ))}
            </footer>
          )}
      </Container>
   )
}