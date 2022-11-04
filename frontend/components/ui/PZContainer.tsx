import React from "react";
import classes from '../../styles/ui/container.module.scss'

export interface IPZContainer {
  className?: string,
  children: React.ReactNode,
  size: 'l' | 'm' | 's'
}

const PZContainer = ({ children, size, className }: IPZContainer) => {
  const classesArr = [classes['container'], className]

  switch (size) {
    case 'l':
      classesArr.push(classes['container--size-l']);
      break;
    case 'm':
      classesArr.push(classes['container--size-m']);
      break;
    case 's':
      classesArr.push(classes['container--size-s']);
      break;
  }

  return (
    <div className={ classesArr.join(' ') }>
      { children }
    </div>
  )
};


export default PZContainer;
 