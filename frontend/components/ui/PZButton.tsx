import React from "react";
import classes from '../../styles/ui/button.module.scss';

export interface IPZButton {
  className: string;
  children: React.ReactNode,
  size: 'l' | 'm' | 's',
  fill?: boolean
}

const PZButton = ({ className, children, size, fill }: IPZButton) => {
  const classesArr = [classes.button, className];

  switch (size) {
    case 'l':
      classesArr.push(classes['button--size-l']);
      break;
    case 'm':
      classesArr.push(classes['button--size-m']);
      break;
    case 's':
      classesArr.push(classes['button--size-s']);
  }

  if (fill) {
    classesArr.push(classes['button--fill'])
  }

  return (
    <button
      className={ classesArr.join(' ') }
    >
      { children }
    </button>
  )
}

export default PZButton;
 