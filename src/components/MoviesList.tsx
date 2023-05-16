
import { MappedMovie } from '../types/movie';
import { useMovies } from "../hooks/useMovies";



export const MoviesList = ({searchMovie}:{searchMovie:string})=>{

     const {movies} = useMovies(searchMovie);

     return <div className='movies'>
          {
               movies ? movies.map(movie=> <Movie  key ={movie.id} movie={movie}/>) : <h2 style={{textAlign:'center',color:"white"}}>Movies not found</h2>
          }
     </div>
}



const Movie = ({movie}:{movie:MappedMovie})=>{
     return <div className='card'>
          <div className='img'>
               <img src={movie.poster} alt="" />
          </div>
          <div className='description'>
               <h2 className='title'>{movie.title}</h2>
               <p className='year'>{movie.year}</p>
          </div>
     </div>
}