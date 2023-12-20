import { defineComponent, reactive } from 'vue'
import AddBook from '@/components/AddBook'
import BookList from '@/components/BookList'
export default defineComponent({
  setup() {
    const initialBooks = reactive([
      { title: 'Code Complete', author: 'Steve McConnell' },
      { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
      { title: 'Living a Feminist Life', author: 'Sarah Ahmed' }
    ])
    const addBook = (book: any) => {
      initialBooks.push(book)
    }
    return () => (
      <div>
        <BookList initialBooks={initialBooks} />
        <AddBook onAddBook={addBook} />
      </div>
    )
  }
})
