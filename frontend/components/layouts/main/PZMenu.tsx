import PZLink from "../../ui/PZLink";
import classes from '../../../styles/layouts/main/menu.module.scss'

export interface IPZMenu {
  className: string;
}

const PZMenu = ({ className }: IPZMenu) => {
  const pzLinks = [
    {
      id: 1,
      title: 'Pizzas',
      href: '/pizzas'
    },
    {
      id: 2,
      title: 'Snacks',
      href: '/snacks'
    },
    {
      id: 3,
      title: 'Drinks',
      href: '/drinks'
    },
    {
      id: 4,
      title: 'Sauces',
      href: '/sauces'
    }
  ]

  return (
    <nav className={ [classes['menu'], className].join(' ') }>
      { pzLinks.map(item => (
        <PZLink
          key={item['id']}
          className={ classes['menu__item'] }
          href={item['href']}
        >
          { item['title'] }
        </PZLink>
      )) }
    </nav>
  )
}

export default PZMenu;

 