import Image from 'next/image'
import vrypt from '../../../public/vrypt-darkLogo.svg'
import style from './styles.module.css'

export default function NavBar({ children }: { children: JSX.Element}) {
  return (
    <nav className={style.navigationBar}>
      <Image
        className={style.navImage}
        src={vrypt}
        alt="vrypt logo"
      />
      <div className={style.navMenu}>
        {children}
      </div>
    </nav>
  )
}