import { useParams } from "react-router-dom";
import { products } from "../constants";
import { Helmet } from "react-helmet";
import NotFound from './NotFound';

const Description = () => {
  const { productName } = useParams();

  const product = products.find(product => product.slug === productName);

  if (!product) {
    return <NotFound />;
  }

  return (
    <section className="flex gap-20 items-center max-lg:flex-col">
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={product.seo} />
        
      </Helmet>
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
