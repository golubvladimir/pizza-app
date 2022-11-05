import PZTitle from "../ui/PZTitle";
import classes from '../../styles/sections/category-list.module.scss'
import PZCategoryCard, {IPZCategoryCard} from "../ui/PZCategoryCard";
import PZLink from "../ui/PZLink";

export interface IPZCategoryList {
  className?: string;
  title?: string;
  items: Array<IPZCategoryCard>
}

const PZCategoryList = ({ title, items, className }: IPZCategoryList) => {
  return (
    <div className={ [classes['category-list'], className].join(' ') }>
      { title
        ? <PZTitle
          className={ classes['category-list__title'] }
          size={'m'}
        >
          { title }
        </PZTitle>
        : '' }
      <div className={ classes['category-list__items'] }>
        { items.map(item => (
          <PZLink
            className={ classes['category-list__item'] }
            href={ `/${ item['slug'] }` }
          >
            <PZCategoryCard
              title={ item['title'] }
              slug={ item['slug'] }
            />
          </PZLink>
        )) }
      </div>
    </div>
  )
}

export default PZCategoryList;
 