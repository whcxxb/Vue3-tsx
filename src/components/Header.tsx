import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
export default defineComponent({
  name: 'my-header',
  setup() {
    const avatar = new URL('../assets/img/avatar.jpg', import.meta.url).href
    const menu = [{ name: 'About', link: '/about' }]
    const menuElement = menu.map((item) => {
      return (
        <div class="w-full">
          <RouterLink to="/">
            <img class="h-[60px] rounded-[50%]" src={avatar} alt="" />
          </RouterLink>
          <ul>
            <li>
              <RouterLink to={item.link}>{item.name}</RouterLink>
            </li>
          </ul>
        </div>
      )
    })
    return () => <header>{menuElement}</header>
  }
})
