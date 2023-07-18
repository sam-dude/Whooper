import styles from './people.module.css';

function People({people}) {
    
  return (
    <div className={styles.people}>
        <div className={styles.title}>SUGGESTED PEOPLE</div>
        <div className={styles.persons}>
            {
                people.map(person => (
                    <div className={styles.person} key={person.id}>
                        <div className={styles.dp}>{person.name.charAt(0)}</div>
                        <div className={styles.info}>
                            <div className={styles.name}>{person.name}</div>
                            <div className={styles.hotlink}>{person.hotlink}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default People