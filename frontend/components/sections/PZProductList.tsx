import PZTitle from "../ui/PZTitle";
import classes from '../../styles/sections/product-list.module.scss'
import PZProductCard, {IPZProductCard} from "../ui/PZProductCard";

export interface IPZProductList {
  title?: string;
  items: Array<IPZProductCard>,
  className: string;
}

const PZProductList = ({ title, items, className }: IPZProductList) => {
  return (
    <div className={ [classes['product-list'], className].join(' ') }>
      { title
        ? <PZTitle
          className={classes['product-list__title']}
          size={'m'}
        >
          { title }
        </PZTitle>
        : ''
      }
      <div className={ classes['product-list__items'] }>
        { items.map(item => (
          <PZProductCard
            {...item}
            key={item.id}
            className={classes['product-list__item']}
          />
        )) }
      </div>
    </div>
  )
}

export default PZProductList;
 