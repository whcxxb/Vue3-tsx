import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    initialBooks: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    return () => (
      <>
        <h2>My books ({props.initialBooks.length})</h2>
        <ul>
          {props.initialBooks.map((book: any) => (
            <li>
              {' '}
              {book.title} <span style={{ 'font-style': 'italic' }}>({book.author})</span>
            </li>
          ))}
        </ul>
      </>
    )
  }
})
