import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header'
// import Content from './components/Content'
import Footer from './components/Footer'
export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <main class="h-screen max-w-[76ch] mx-[auto] pt-[6rem] pb-5 px-6 flex flex-col">
        <Header />
        <RouterView class="flex-1" />
        <Footer />
      </main>
    )
  }
})
