import PZLink from "../../ui/PZLink";
import classes from '../../../styles/layouts/main/menu.module.scss'

const PZMenu = () => {
  const pzLinks = [
    {
      title: 'Pizzas',
      href: '/pizzas'
    },
    {
      title: 'Snacks',
      href: '/snacks'
    },
    {
      title: 'Drinks',
      href: '/drinks'
    },
  ]


  return (
    <nav className={ classes['menu'] }>
      { pzLinks.map(item => (<PZLink className={ classes['menu__item'] } href={item['href']}>{ item['title'] }</PZLink>)) }
    </nav>
  )
}

export default PZMenu;

 