import LogNdSearch from '../LogoNdSearch/LogNdSearch';
import styles from './navbar.module.css'
import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";
import {TbMessageCircle} from "react-icons/tb"
import {BiFace} from 'react-icons/bi'
import {LuFolderHeart} from 'react-icons/lu'

function Navbar() {
  const navs = [
    {id: 1, name: 'Home', url: '/', icon: <HiOutlineHome/>},
    {id: 2, name: 'Collaborate', url: '#', icon: <HiOutlineUserGroup />},
    {id: 3, name: 'Messages', url: '#', num: 2, icon: <TbMessageCircle />},
    {id: 4, name: 'Subscriptions', url: '/subsciptions', icon: <LuFolderHeart/>},
    {id: 5, name: 'You', url: '/you', icon: <BiFace/>},
  ];

  const cat = [
    {id: 1, name: "Team Assets"},
    {id: 2, name: "Design Ideas"}
  ]
  return (
    <div className={styles.container}>
      <div className={styles.log}><LogNdSearch /></div>

      <div className={styles.others }>
        <div className={styles.general}>
          <div className={styles.title}>GENERAL</div>
          <nav className={styles.navlinks}>
            {
              navs.map(nav => (
                <a href={nav.url} key={nav.id} className={styles.nav }><div className={styles.icon}>{nav.icon}</div>{nav.name}</a>
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