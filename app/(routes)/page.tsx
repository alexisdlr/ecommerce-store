import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";

const revalidate = 0

export default async function Home() {
  const products = await getProducts({isFeatured: true})
  const billboard = await getBillboard('baaf2940-a521-4107-b916-ddb8fcb2763a')
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title='Featured Products' items={products} />
      </div>
    </Container>
  )
}
