import {useState} from "react"
import AddBook from "./component/AddBook"
import BooksList from "./component/BooksList";
import Header from "./component/Header"

const App = () => {
  const [show, setShow]= useState (true);
  const [books, setBooks] = useState ([
{title: "The Planet", author: "Randy Oscar", release: "12-12-2012"},
{title: "How to be rich", author: "Jake Smith", release: "12-12-2014"},
{title: "Rich Dad Poor Dad", author: "Kiyosarki", release: "12-12-2015"}
  ])

  function handleShow () {
    setShow (! show)
  }

  function addBook(book){
    setBooks([...books, book]) 
  }
  function deleteBook(title){
    setBooks(books.filter((book)=>book.title!==title))
  }
  return (
    <main>
     <Header handleShow={handleShow} show= {show}/>
     {show && <AddBook addBook={addBook}/>}
     <BooksList books={books} deleteBook={deleteBook}/>
    </main>
  );
}

export default App;
