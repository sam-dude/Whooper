import styles from './logondsearch.module.css'
import { HiChatAlt2 } from "react-icons/hi";

function LogNdSearch() {
  return (
   
    <div className={styles.logoNdSearch}>
        <div className={styles.logo}><div className={styles.icon}><HiChatAlt2 /></div>Whooper</div>
        <input type="text" className={styles.search} placeholder='Search...'/>
      </div>
    
  )
}

export default LogNdSearch