import { Metadata } from "next";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  return {
    title: `Product ${params.id}`,
  };
}

export default function Product({ params }: ProductPageProps) {
  return <h5>{params.id}</h5>;
}
