"use client";
import CartItem from "@/app/(routes)/cart/components/CartItem";
import Container from "@/components/ui/container";
import useCart from "@/hooks/useCart";
import Summary from "./components/Summary";

const CartPage = () => {
  const cart = useCart()
  return (
    <div className="bg-white">
      <Container>
        <div className="px-8 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">
            Shopping Cart
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart</p>}
              <ul>
                {cart.items.map(item => (
                  <CartItem data={item} key={item.id} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
