import Communities from '@/components/Communities/Communities'
import styles from './page.module.css'

export default function page() {
  const communities = [
    {id: 1, name: 'Introductions'},
    {id: 2, name: 'What\'s New'},
    {id: 3, name: 'DesignNews'},
    {id: 4, name: 'Behance'},
    {id: 5, name: 'Figma Community'}
  ]
  return (
    <div id={styles.container}>
        <Communities communities={communities}/>
    </div>
  )
}
