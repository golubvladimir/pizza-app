import Pizzas from '../../assets/icons/pizzas.svg';
import Drinks from '../../assets/icons/drinks.svg';
import Snacks from '../../assets/icons/snacks.svg';
import Sauces from '../../assets/icons/sauces.svg';
import React from "react";

export interface IPZCategoryIcon {
  name: string;
  className: string;
}

const PZCategoryIcon = ({ name, className }: IPZCategoryIcon) => {
  let Icon;

  switch (name) {
    case 'pizzas':
      Icon = Pizzas;
      break;
    case 'drinks':
      Icon = Drinks;
      break;
    case 'snacks':
      Icon = Snacks;
      break;
    case 'sauces':
      Icon = Sauces;
  }

  return (
    <Icon className={className} />
  )
}

export default PZCategoryIcon;