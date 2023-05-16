import { useCallback, useMemo, useRef, useState } from 'react'
import './App.css'
import { MoviesList } from './components/MoviesList'
import debounce from 'just-debounce-it'

function App() {
  const[queryMovie,setQueryMovie] = useState('');
  const[value,setValue]=useState('')

  const debounceGetMovies = useCallback( 
    debounce((value:any)=>{
      setQueryMovie((v)=> v = value)
    },500)
    ,[])

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    // const {query} =Object.fromEntries(new FormData(e.target))
    // setQueryMovie(query.toString())
    
  }
  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
    debounceGetMovies(e.target.value)
    
  }
  console.log(queryMovie)
  return (
    <>
      <form onSubmit={(e)=> handleSubmit(e) }>
        <input   name = 'query' placeholder='Search' value={value} onChange={e=>handleChange(e)}/>
        <button type='submit'> Search </button>
      </form>
        <MoviesList searchMovie={queryMovie}/>

    </>
  )
}

export default App
