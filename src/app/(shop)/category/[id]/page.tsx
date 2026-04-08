import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

enum CategoryEnum {
  men = 'men',
  women = 'women',
  kid = 'kid',
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { id } = await params;

  if (!(id in CategoryEnum)) {
    notFound();
  }

  return <div>Category Page: {id}</div>;
};

export default CategoryPage;
