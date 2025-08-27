import useProduct from "../../hooks/useProduct.js";
import Card from "../common/Card.jsx";

const featuredSection = () => {
  const { products } = useProduct({ limit: 3 });
  return (
    <>
      <section className="bg-gray-50 w-full min-h-screen text-center p-5">
        <h1 className="text-2xl font-bold">Featured Products</h1>
        <p className="textarea-sm font-light mb-8">
          Our best-selling tools, engineered for peak performance and
          durability.
        </p>

        <figure className="flex flex-wrap gap-10 justify-center pb-12">
          <Card products={products} />
        </figure>
      </section>
    </>
  );
};

export default featuredSection;
