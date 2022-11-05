import PZTitle from "./PZTitle";
import PZButton from "./PZButton";
import Image from 'next/image';
import classes from '../../styles/ui/product-card.module.scss';

export interface IPZProductCard {
  className?: string;
  id?: number;
  img: string;
  title: string;
  description: string;
  price: number;
}

const PZProductCard = ({ title, description, price, className, img }: IPZProductCard) => {
  return (
    <div className={ [classes['product-card'], className].join(' ') }>
      <Image
        className={ classes['product-card__img'] }
        src={img}
        width={100}
        height={100}
        alt={'Pizza type'}
      />
      <PZTitle
        className={ classes['product-card__title'] }
        size={'s'}
      >
        { title }
      </PZTitle>
      <p className={ classes['product-card__description'] }>
        { description }
      </p>
      <p className={ classes['product-card__price'] }>
        { price }
      </p>
      <PZButton
        className={ classes['product-card__btn'] }
        size={'s'}
      >Add</PZButton>
    </div>
  )
}

export default PZProductCard;
 