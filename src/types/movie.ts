export interface ListMovie {
     Search: Movie[]
     totalResults: string
     Response: string
   }
   
   export interface Movie {
     Title: string
     Year: string
     imdbID: string
     Type: string
     Poster: string
   }
export interface MappedMovie{
  id: string
  title: string
  year: string
  poster: string
}
   