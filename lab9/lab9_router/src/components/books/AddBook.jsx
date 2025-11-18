import React, {useState} from 'react'
import BooksApi from '../../api/BooksApi'

const BOOK_INIT = {
    title: '',
    author: '',
    price: 0,
    rating: 0
}

export default function AddBook() {
    const [book, setBook] = useState(BOOK_INIT)
    const handleValueChange = (e) =>{
        setBook({
            ...book,
            [e.target.name] : e.target.value
        })

    }
    const addNewBook = async () => {
        try{
            const response = await BooksApi.addBook(book)
            console.log(response)
            setBook(BOOK_INIT)
            alert('New Book Added')
        }catch(error){
            console.log(error)
        }
    }

    const handleSubmit = e =>{
        e.preventDefault()
        addNewBook()
    }

  return (
    <div>
        <h2>Add New Book</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={book.title} onChange={handleValueChange}></input>
            </div>
            <div>
                <label>Author:</label>
                <input type="text" name="author" value={book.author} onChange={handleValueChange}></input>
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" value={book.price} onChange={handleValueChange}></input>
            </div>
            <div>
                <label>Rating:</label>
                <input type="number" name="rating" step="0.1" min="0" max="5" value={book.rating} onChange={handleValueChange}></input>
            </div>
            <button>Add Book</button>
        </form>
    </div>
  )
}
