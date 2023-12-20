import { defineComponent } from 'vue'
export default defineComponent({
  name: 'my-footer',
  setup() {
    return () => (
      <footer class="flex justify-center text-sm text-gray/200">
        <p class='mr-3'>©2022-2023</p>
        <p>Built with <span> Vue3</span></p>
      </footer>
    )
  }
})
