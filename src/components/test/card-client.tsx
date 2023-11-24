import { TestCardList } from '@/lib/constant'
import { TestCard } from './card'

export const TestCardClient = () => {
  return TestCardList.map(({ description, title }) => (
    <TestCard key={title} title={title} description={description} />
  ))
}
