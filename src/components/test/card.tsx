import { TestCardList } from '@/lib/constant';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

interface LocalTestCardProps {
  title: string;
  description: string;
}

export const TestCard: React.FC<LocalTestCardProps> = () => {
  return TestCardList.map(({ description, title }) => (
    <Card className="text-center" key={title}>
      <CardHeader>
        <CardTitle className="text-center text-lg font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  ));
};