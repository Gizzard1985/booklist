const BooksList = ({books, deleteBook}) => {
    return( <section className= "books-container">
                {books.length > 0 ? (
                books.map((book) => (
                    <div className= "card" onClick={()=>deleteBook(book.title)}>
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                        <h6>{book.release}</h6>
                    </div>
                ))
                ) : (
                    <h1>Empty book list</h1>
        )}
        </section>
    );
}

export default BooksList
