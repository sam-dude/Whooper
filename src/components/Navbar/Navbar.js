import LogNdSearch from '../LogoNdSearch/LogNdSearch';
import styles from './navbar.module.css'

function Navbar() {
  const navs = [
    {id: 1, name: 'Home', url: '/'},
    {id: 2, name: 'Collaborate', url: '#'},
    {id: 3, name: 'Messages', url: '#', num: 2},
    {id: 4, name: 'Subscriptions', url: '/subsciptions'},
    {id: 5, name: 'You', url: '#'},
  ];

  const cat = [
    {id: 1, name: "Team Assets"},
    {id: 2, name: "Design Ideas"}
  ]
  return (
    <div className={styles.container}>
      <LogNdSearch />

      <div className={styles.others }>
        <div className={styles.general}>
          <div className={styles.title}>GENERAL</div>
          <nav className={styles.navlinks}>
            {
              navs.map(nav => (
                <a href={nav.url} key={nav.id} className={styles.nav }>{nav.name}</a>
              ))
            }
          </nav>
        </div>

        <div className={styles.categories}>
          <div className={styles.title}>CATEGORY</div>
          <div className={styles.cats}>
            {cat.map(item => (
              <div key={item.id} className={styles.cat}><div className={styles.catIcon}>{item.name.charAt(0)}</div>{item.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar