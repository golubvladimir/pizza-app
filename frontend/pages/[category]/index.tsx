import classes from '../../styles/pages/category.module.scss';
import PZTitle from "../../components/ui/PZTitle";
import PZProductList from "../../components/sections/PZProductList";
import {IPZCategoryCard} from "../../components/ui/PZCategoryCard";
import {IPZProductCard} from "../../components/ui/PZProductCard";
import PZContainer from "../../components/ui/PZContainer";

const Category = () => {
  const products: IPZProductCard[] = [
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
    }
  ];

  return (
    <div className={ classes['category-page'] }>
      <PZContainer
        className={ classes['category-page__container'] }
        size={'l'}
      >
        <PZTitle
          className={ classes['category-page__title'] }
          size={'l'}
        >
          Category name
        </PZTitle>
        <PZProductList
          className={ classes['category-page__products'] }
          items={ products }
        />
      </PZContainer>
    </div>
  )
}

export default Category;
 