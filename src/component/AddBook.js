import {useState} from 'react'

const AddBook = ({addBook}) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [release, setRelease] = useState("")

    function handleSubmit (e) {
        e.preventDefault()
        addBook({title, author, release})
    }

    return (
        <section className = "form-container">
            <form onSubmit={handleSubmit} className = "form">
                <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder = "book title"/>
                <input type="text" onChange={(e)=>setAuthor(e.target.value)} placeholder = "author name"/>
                <input type="date" onChange={(e)=>setRelease(e.target.value)}placeholder =" release date"/>
                <button style= {{backgroundColor: 'steelblue', color: 'white'}}> ADD BOOK </button>
            </form>
            
        </section>
    )
}

export default AddBook