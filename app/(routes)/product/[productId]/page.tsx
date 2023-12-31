import getProduct from "@/actions/getProduct";
import getProducts from "@/actions/getProducts";
import Gallery from "@/components/gallery/Gallery";
import Info from "@/components/Info";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";

interface ProductPageProps {
  params: {
    productId: string;
  };
}
const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product.category.id,
  });
  return (
    <div>
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 lg:mt-0">
              <Info data={product} />
            </div>
          </div>

          <hr className="my-10" />
          <ProductList items={suggestedProducts} title="Related Products" />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
