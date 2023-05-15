import { useState } from 'react'
import './App.css'
import { MoviesList } from './components/MoviesList'

function App() {
  const [searchMovie, setSearchMovie] = useState('')
  const handleSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(searchMovie)
    setSearchMovie(e.target.value)
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    
  }
  return (
    <>
    <h2>2</h2>
      <form onSubmit={(e)=> handleSubmit(e) }>
        <input type="text" name="search" id="search" onChange={e=>handleSearch(e)}/>
        <button type='submit'> Search </button>
      </form>
        <MoviesList searchMovie={searchMovie}/>

    </>
  )
}

export default App
