import Communities from '@/components/Communities/Communities'
import styles from './page.module.css'
import People from '@/components/People/People'

export default function page() {
  const communities = [
    {id: 1, name: 'Introductions'},
    {id: 2, name: 'What\'s New'},
    {id: 3, name: 'DesignNews'},
    {id: 4, name: 'Behance'},
    {id: 5, name: 'Figma Community'}
  ]

  const people = [
    {id: 1, name: 'Patrick Newman', hotlink: '@parickNewman'},
    {id: 2, name: 'Samuel', hotlink: '@0xSammie'},
    {id: 3, name: 'Anatoly Belik', hotlink: '@anatoly_belik'}
]
  return (
    <div id={styles.container}>
        <Communities communities={communities}/>
        <People people={people}/>
    </div>
  )
}
