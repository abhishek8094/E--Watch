import Hero from "@/componets/Hero";
import ProductList from "@/componets/ProductList";

export default function Home() {
  return (
    <div className="bg-[#F8F9FA]">
      <Hero />
      <h2 className="w-full text-center text-2xl md:text-4xl font-semibold py-6">
        All Products
      </h2>
      <ProductList />
    </div>
  );
}
