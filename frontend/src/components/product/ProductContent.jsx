import Card from "../common/Card";

const ProductContent = () => {
  const limit = 10;
  return (
    <>
      <section className="w-full bg-white text-black flex flex-col flex-wrap md:flex-row justify-center  gap-4">
        <Card limit={limit} />
      </section>
    </>
  );
};

export default ProductContent;
