import { Link } from "react-router-dom";
import { products } from "../constants";

const Home = () => {
    return (
      <section>
        <div className="flex flex-wrap justify-center 2xl:gap-20 gap-10 max-sm:gap-14">
          {products.map(product => (
            <div key={product.id} className="md:w-[300px] w-[400px]">
              <div className="bg-secondary h-16 text-white flex items-center">
                <h3 className="text-xl font-bold ml-4">{product.name}</h3>
              </div>
              <Link to={product.link}><img src={product.image} alt={product.alt} width={400} height={400} /></Link>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Home;