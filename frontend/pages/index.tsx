import classes from '../styles/pages/main.module.scss'
import PZProductList from "../components/sections/PZProductList";
import PZContainer from "../components/ui/PZContainer";
import {IPZProductCard} from "../components/ui/PZProductCard";

const Main = () => {

  const list: IPZProductCard[] = [
    {
      id: 1,
      img: '/pizza.png',
      title: 'Pizza item',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto reprehenderit unde. Alias dignissimos ducimus explicabo facilis ipsam necessitatibus, perferendis porro quibusdam. Consequuntur ea enim magnam praesentium quaerat, quo quod.',
      price: 222
    },
    {
      id: 2,
      img: '/pizza.png',
      title: 'Pizza item',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto reprehenderit unde. Alias dignissimos ducimus explicabo facilis ipsam necessitatibus, perferendis porro quibusdam. Consequuntur ea enim magnam praesentium quaerat, quo quod.',
      price: 222
    },
    {
      id: 3,
      img: '/pizza.png',
      title: 'Pizza item',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto reprehenderit unde. Alias dignissimos ducimus explicabo facilis ipsam necessitatibus, perferendis porro quibusdam. Consequuntur ea enim magnam praesentium quaerat, quo quod.',
      price: 222
    },
    {
      id: 4,
      img: '/pizza.png',
      title: 'Pizza item',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto reprehenderit unde. Alias dignissimos ducimus explicabo facilis ipsam necessitatibus, perferendis porro quibusdam. Consequuntur ea enim magnam praesentium quaerat, quo quod.',
      price: 222
    },
    {
      id: 5,
      img: '/pizza.png',
      title: 'Pizza item',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto reprehenderit unde. Alias dignissimos ducimus explicabo facilis ipsam necessitatibus, perferendis porro quibusdam. Consequuntur ea enim magnam praesentium quaerat, quo quod.',
      price: 222
    },
    {
      id: 6,
      img: '/pizza.png',
      title: 'Pizza item',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto reprehenderit unde. Alias dignissimos ducimus explicabo facilis ipsam necessitatibus, perferendis porro quibusdam. Consequuntur ea enim magnam praesentium quaerat, quo quod.',
      price: 222
    },
    {
      id: 7,
      img: '/pizza.png',
      title: 'Pizza item',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto reprehenderit unde. Alias dignissimos ducimus explicabo facilis ipsam necessitatibus, perferendis porro quibusdam. Consequuntur ea enim magnam praesentium quaerat, quo quod.',
      price: 222
    },
    {
      id: 8,
      img: '/pizza.png',
      title: 'Pizza item',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto reprehenderit unde. Alias dignissimos ducimus explicabo facilis ipsam necessitatibus, perferendis porro quibusdam. Consequuntur ea enim magnam praesentium quaerat, quo quod.',
      price: 222
    },
    {
      id: 9,
      img: '/pizza.png',
      title: 'Pizza item',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto reprehenderit unde. Alias dignissimos ducimus explicabo facilis ipsam necessitatibus, perferendis porro quibusdam. Consequuntur ea enim magnam praesentium quaerat, quo quod.',
      price: 222
    },
    {
      id: 10,
      img: '/pizza.png',
      title: 'Pizza item',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto reprehenderit unde. Alias dignissimos ducimus explicabo facilis ipsam necessitatibus, perferendis porro quibusdam. Consequuntur ea enim magnam praesentium quaerat, quo quod.',
      price: 222
    },
    {
      id: 11,
      img: '/pizza.png',
      title: 'Pizza item',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto reprehenderit unde. Alias dignissimos ducimus explicabo facilis ipsam necessitatibus, perferendis porro quibusdam. Consequuntur ea enim magnam praesentium quaerat, quo quod.',
      price: 222
    },
    {
      id: 12,
      img: '/pizza.png',
      title: 'Pizza item',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto reprehenderit unde. Alias dignissimos ducimus explicabo facilis ipsam necessitatibus, perferendis porro quibusdam. Consequuntur ea enim magnam praesentium quaerat, quo quod.',
      price: 222
    },
  ]

  return (
    <div className={ classes.mainPage }>
      <PZContainer
        className={ classes['main-page__container'] }
        size={'l'}
      >
        <PZProductList
          className={ classes.mainPage__productList }
          items={list}
        />
      </PZContainer>
    </div>
  )
}

export default Main;