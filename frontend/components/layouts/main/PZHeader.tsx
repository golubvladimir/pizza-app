import Logo from "../../../assets/icons/logo.svg";
import PZContainer from "../../ui/PZContainer";
import PZMenu from "./PZMenu";
import PZTitle from "../../ui/PZTitle";
import classes from "../../../styles/layouts/main/header.module.scss";


const PZHeader = () => {
  return (
    <header className={ classes['header'] }>
      <PZContainer className={ classes['header__container'] } size={'l'}>
        <Logo className={ classes['header__logo'] } />
        <PZTitle size={'l'} className={ classes['header__title'] }>Pizza App</PZTitle>
        <PZMenu className={ classes['header__menu'] } />
      </PZContainer>
    </header>
  )
};

export default PZHeader;

 