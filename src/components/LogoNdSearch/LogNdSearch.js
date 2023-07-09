import styles from './logondsearch.module.css'

function LogNdSearch() {
  return (
   
    <div className={styles.logoNdSearch}>
        <div className={styles.logo}>Whooper</div>
        <input type="text" className={styles.search} placeholder='Search...'/>
      </div>
    
  )
}

export default LogNdSearch