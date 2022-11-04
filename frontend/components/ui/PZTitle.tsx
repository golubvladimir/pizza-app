import React from "react";
import classes from '../../styles/ui/title.module.scss';

export interface IPZTitle {
  children: React.ReactNode,
  size: 'l' | 'm' | 's',
  className?: string
}

const PZTitle = ({ children, size, className }: IPZTitle) => {
  const classesAr = [classes.title, className];

  switch (size) {
    case 'l':
      return (
        <h1 className={ [...classesAr, classes.titleSizeL].join(' ') }>{ children }</h1>
      );
    case 'm':
      return (
        <h2 className={ [...classesAr, classes.titleSizeM].join(' ') }>{ children }</h2>
      );
    case 's':
      return (
        <h3 className={ [...classesAr, classes.titleSizeS].join(' ') }>{ children }</h3>
      )
  }
}

export default PZTitle;
 