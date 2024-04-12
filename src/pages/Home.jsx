import { Link } from "react-router-dom";
import { products } from "../constants";
import { Helmet } from 'react-helmet';
import h2premium from "../assets/videos/h2-premium.mp4";
import video1 from "../assets/videos/artroline.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/h2-premium2.mp4";

const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Gulnara Yertuganova</title>
        <meta name="description" content="Приветствуем вас на сайте gyertuganova.kz! Широкий ассортимент продуктов для вашего здоровья и благополучия. Ознакомьтесь с нашими продуктами H2 Premium Магний водород, Artroline 5 Power, AW Line, DiabeLine, HappyLine, GepoLine и узнайте, как их принимать. Регистрируйтесь в Dandelion и получайте доступ к эксклюзивным предложениям!" />
        <meta name="keywords" content="H2 premium, artroline, artroline 5 power, aw line, diabeline, happyline, gepoline, магний водород" />
      </Helmet>

      <div className="flex flex-wrap justify-center ">
        <video className="md:w-[628px] rounded-md" src={h2premium} controls="controls" />
      </div>

      <div className="flex flex-wrap justify-center mt-20 2xl:gap-20 gap-10 max-sm:gap-14">
        {products.map(product => (
          <div key={product.id} className="md:w-[300px] w-[400px]">
            <div className="bg-secondary h-16 text-white flex items-center">
              <h3 className="text-xl font-bold ml-4">{product.name}</h3>
            </div>

            <Link to={`/product/${product.slug}`}><img src={product.image} alt={product.alt} width={400} height={400} /></Link>
          </div>
        ))}
      </div>

    <div className="flex flex-wrap justify-evenly max-sm:gap-14 mt-20 border-t-4 pt-20">
      <video src={video3} width="320" height="300" controls="controls" />
      <video src={video1} width="320" height="300" controls="controls" />
      <video src={video2} width="320" height="300" controls="controls" />
    </div>
    </section>
  );
}
export default Home;
