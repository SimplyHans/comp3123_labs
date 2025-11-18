import './App.css';
import UserList from './components/UserList';
import AddBook from './components/books/AddBook';
import BooksList from './components/books/BooksList';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import ViewBook from './components/books/ViewBook';
function App() {
  return (
    <div>
      <h1>Axios API and Router Examples</h1>
      <BrowserRouter>
        <nav>
           <NavLink to='/user-list'>User List</NavLink>
           <NavLink to='/add-book'>Add Book</NavLink>
           <NavLink to='/book-list'>Book List</NavLink>
        </nav>

        <Routes>
          <Route path='/user-list' element={ <UserList />}/>
          <Route path='/book-list' element={ <BooksList />}/>
          <Route path='/add-book' element={ <AddBook />}/>
          <Route path='/view-book/:bookID' element={ <ViewBook />}/>
          <Route path='/books' element={<h2>Will Implement</h2>}>
              <Route path='/books/book-list-test' element={ <BooksList />}/>
              <Route path='/books/add-book-test' element={ <h2>Coming soon....</h2>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
