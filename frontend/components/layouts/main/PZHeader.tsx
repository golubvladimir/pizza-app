import Logo from "../../../assets/icons/logo.svg";
import PZContainer from "../../ui/PZContainer";
import PZMenu from "./PZMenu";
import classes from "../../../styles/layouts/main/header.module.scss";

const PZHeader = () => {
  return (
    <header className={ classes['header'] }>
      <PZContainer className={ classes['header__container'] } size={'l'}>
        <Logo className={ classes['header__logo'] } />
        <PZMenu />
      </PZContainer>
    </header>
  )
};

export default PZHeader;

 