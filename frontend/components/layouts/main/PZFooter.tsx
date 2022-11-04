import PZContainer from "../../ui/PZContainer";
import classes from '../../../styles/layouts/main/footer.module.scss'

const PZFooter = () => {
  return (
    <footer className={ classes.footer }>
      <PZContainer className={ classes['footer__container'] } size={'l'}>
        <p className={ classes['footer__copyright'] }>©Pizza App</p>
      </PZContainer>
    </footer>
  )
}

export default PZFooter;