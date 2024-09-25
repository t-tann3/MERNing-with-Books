import './App.css'
import { Routes,
         Route,
} from 'react-router-dom'
import AddBook from './views/AddBook'
import BookDetails from './views/BookDetails'
import TheHead from './components/Header'
import DisplayAllBooks from './views/CatalogOfBooks'
import UpdateBooks from './views/UpdateBooks'
//comment
function App() {

  return (
    <>
      <TheHead/>
    
      <Routes>

        <Route path='/AddBook' element={<AddBook/>}/>
        <Route path='/BookDetails/:id' element={<BookDetails/>}/>
        <Route path='/CatalogOfBooks' element={<DisplayAllBooks/>}/>
        <Route path='/books/update/:id' element={<UpdateBooks/>}/>

      </Routes>
      




    </>
  )
}

export default App
