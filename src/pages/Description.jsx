import { useParams } from "react-router-dom";
import { products } from "../constants";
import NotFound from './NotFound';

const Description = () => {
  const { productId } = useParams();
  const product = products.find(product => product.id === parseInt(productId));

  if (!product) {
    return <NotFound />;
  }

  return (
    <section className="flex gap-20 items-center max-lg:flex-col">
      <div className="md:w-[300px] min-w-[300px]">
        <div className="bg-secondary h-16 text-white flex items-center">
          <h3 className="text-xl font-bold ml-4">{product.name}</h3>
        </div>
        <img src={product.image} alt={product.alt} width={400} height={400} />
      </div>
      <div className="max-w-[900px] max-sm:w-[300px] break-words" dangerouslySetInnerHTML={{ __html: product.description }} />
    </section>
  );
}

export default Description;