import { useEffect, useState } from "react"
import { ListMovie, MappedMovie } from "../types/movie"
const URL = 'https://www.omdbapi.com/'
const API= '4287ad07'

export const useMovies = (searchMovie:string)=>{
     const [movies, setMovies] = useState<ListMovie>()
     const mappedMovies:MappedMovie[] | false = movies?.Response == 'True' && movies.Search.map(movie =>({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
     }))
     useEffect(()=>{
          const data = async ()=>{
               const resp = await fetch(`${URL}?apikey=${API}&s=${searchMovie}`)
               const res = await resp.json()
               console.log(res)
               setMovies(res) 
          }
          data()
     },[searchMovie])

     return {movies:mappedMovies}
}