"use client";

import { useRouter } from "next/navigation";
import styles from './navlink.module.css'

import Link, { LinkProps } from "next/link";

export function NavLink({link, text, icon}) {
  const { pathname } = useRouter();
  const isActive = pathname === link;
  console.log(pathname);
  return(
    <Link 
      href={link}
      className={isActive ? styles.active :  styles.nav}
    >
      <span className={styles.icon}>{icon}</span><span className={styles.name}>{text}</span>
    </Link>
  )
}