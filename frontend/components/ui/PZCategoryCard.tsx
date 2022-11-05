import PZTitle from "./PZTitle";
import PZCategoryIcon from "./PZCategoryIcon";
import classes from '../../styles/ui/category-card.module.scss';

export interface IPZCategoryCard {
  className?: string;
  title: string;
  slug: string;
}

const PZCategoryCard = ({ title, slug, className }: IPZCategoryCard) => {
  return (
    <div className={ [classes['category-card'], className].join(' ') }>
      <PZCategoryIcon
        className={ classes['category-card__icon'] }
        name={slug}
      />
      <PZTitle
        className={ classes['category-card__title'] }
        size={'s'}
      >
        { title }
      </PZTitle>
    </div>
  )
};

export default PZCategoryCard;
 