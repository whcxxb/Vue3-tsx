import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'AddBook',
  emits: ['addBook'],
  setup(props, { emit }) {
    const book = reactive({
      title: '',
      author: ''
    })
    const addBook = (e: any) => {
      e.preventDefault();
      emit('addBook', { title: book.title, author: book.author });
      book.title = '';
      book.author = '';
    };
    return () => (
      <form >
        <div>
          <label for="title">Book name</label>
          <input id="title" v-model={book.title} class='border outline-none' />
        </div>
        <div>
          <label for="author">Author</label>
          <input id="author" v-model={book.author} class='border outline-none' />
        </div>
        <button type="submit" onClick={addBook} class='p-2 bg-teal/200'>Add book</button>
      </form >
    )
  }
})
