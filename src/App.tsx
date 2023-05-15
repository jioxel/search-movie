import { useState } from 'react'
import './App.css'
import { MoviesList } from './components/MoviesList'


function App() {
  const[queryMovie,setQueryMovie] = useState('');
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    // const {query} =Object.fromEntries(new FormData(e.target))
    // setQueryMovie(query.toString())
    
  }
  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setQueryMovie (e.target.value)
  }
  console.log('render')
  return (
    <>
    <h2>2</h2>
      <form onSubmit={(e)=> handleSubmit(e) }>
        <input   name = 'query' placeholder='Search' value={queryMovie} onChange={e=>handleChange(e)}/>
        <button type='submit'> Search </button>
      </form>
        <MoviesList searchMovie={queryMovie}/>

    </>
  )
}

export default App
