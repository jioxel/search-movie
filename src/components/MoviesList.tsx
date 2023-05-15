import { useEffect, useState } from "react"
import { ListMovie, Movie } from '../types/movie';
const URL = 'https://www.omdbapi.com/'
const API= '4287ad07'
export const MoviesList = ({searchMovie}:{searchMovie:string})=>{
     const [movies, setMovies] = useState<ListMovie>()
     useEffect(()=>{
          const data = async ()=>{
               const resp = await fetch(`${URL}?apikey=${API}&s=${''}`)
               const res = await resp.json()
               
               console.log(res)
               setMovies(res)
          }
          data()
     },[searchMovie])
     return <div>
          {
               movies?.Response == 'True' && movies?.Search.map(movie=> <Card  key ={ movie.imdbID}movie={movie}/>)
          }
     </div>
}



const Card = ({movie}:{movie:Movie})=>{
     return <div>
          <div>
               <img src={movie.Poster} alt="" />
          </div>
          <div>
               <h2>{movie.Title}</h2>
               <p>{movie.Year}</p>
          </div>
     </div>
}