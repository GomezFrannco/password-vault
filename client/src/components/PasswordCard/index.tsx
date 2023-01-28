import Image from "next/image"
import vrypt from "../../../public/vrypt-darkLogo.svg"
import style from "./styles.module.css"

export default function PasswordCard() {
  return (
    <div className={style.passwordCard}>
      <Image className={style.cardImage} src={vrypt} alt={""} width={20} height={20}/>
      <div className={style.cardText}>
        <div>
          <h3>Website:</h3>
          <p>https://devfran.tech</p>
        </div>
        <button>See more</button>
      </div>
    </div>
  )
}
