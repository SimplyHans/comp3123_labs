import {useState, useEffect} from 'react'
import BooksApi from '../../api/BooksApi'
import { useNavigate } from 'react-router-dom'

export default function BooksList() {
  const [books, setBooks] = useState([])
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()
  const getBooks = async()=>{
    try{
      const response = BooksApi.getBooks()
      setBooks(response)
    }
    catch(error){
      setErrors(errors)
    }
  }
  useEffect(()=>{
    getBooks()
  },[])

  const handleViewClick = (bookID)=>{
    // alert(`Book Selected ${BookID}`)
    navigate(`/view-book/${bookID}`)
  }

  const handleUpdateClick = (book)=>{
    alert(`Update Selected ${book}`)
  }

  const handleDeleteClick = async (bookID)=>{
    alert(`Delete Selected ${bookID}`)
    try{
      const response = await BooksApi.deleteBook(bookID)
      console.log(`Book Deleted Successfully ${bookID}`)
    }
    catch(error){
      setErrors(errors)
    }
  }

  return(
    <div>
        <h2>Books List</h2>
        <table border="1" cellSpacing="5">
            <thread>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Operations</th>
                </tr>
            </thread>
                <tbody>
                    {
                        books.map(book=>{
                            return(
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.price}</td>
                                    <td>{book.rating}</td>
                                    <td>
                                      <button onClick={e=>handleViewClick(book._id)}>View</button>
                                      <button onClick={e=>handleUpdateClick(book)}>Update</button>
                                      <button onClick={e=>handleDeleteClick(book._id)}>Delete</button>
                                    </td>
                                </tr>
 
                            )
                        })
                    }
                </tbody>

        </table>
    </div>
  )
}
