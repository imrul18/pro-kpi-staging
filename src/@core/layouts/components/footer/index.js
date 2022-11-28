// ** Icons Import
import { Code, Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-start d-block d-md-inline-block mt-25'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a href='https://1.envato.market/pixinvent_portfolio' target='_blank' rel='noopener noreferrer'>
          VISER X LTD
        </a>
        <span className='d-none d-sm-inline-block'>, All rights Reserved</span>
      </span>
      <span className='float-md-end d-none d-md-block'>
      <Code size={14} /> 
        <span> Developed by Imrul Afnan </span>
        <Code size={14} />
      </span>
    </p>
  )
}

export default Footer
