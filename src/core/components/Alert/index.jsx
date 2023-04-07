import { Alert as BootstrapAlert, Button } from 'react-bootstrap';
import { actions, selectors } from './store';

const Alert = () => {
  const isShow = selectors.useIsShow()
  const variant = selectors.useVariant()
  const message = selectors.useMessage()
  const setIsNotShow = actions.useIsNotShow()

  const handleClose = () => {
    setIsNotShow()
  }

  return (
    <div className='d-flex justify-content-end mx-3 fixed-bottom'>
      <BootstrapAlert variant={variant} show={isShow} closeVariant className='d-flex justify-content-between' style={{ minWidth: '25vw' }}>
        <p className='my-auto text-wrap'>
          {message}
        </p>
        <Button onClick={handleClose} variant="outline">
          X
        </Button>
      </BootstrapAlert>
    </div>
  )
}

export default Alert
