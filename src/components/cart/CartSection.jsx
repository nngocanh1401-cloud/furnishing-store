"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartSection() {
  const {
    cartItems,
    removeFromCart,
    updateCartQuantity,
  } = useCart();

  const formatPrice = (price) => `Rs. ${price.toLocaleString("en-US")}.00`;

  const updateQuantity = (id, value) => {
    const quantity = Math.max(1, Number(value));

    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };



  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="bg-white py-10 font-[Poppins] min-[768px]:py-14 min-[992px]:py-[72px]">
      <div className="mx-auto max-w-[1240px] px-4 min-[600px]:px-6 min-[1200px]:px-0">
        <div className="grid grid-cols-1 gap-8 min-[992px]:grid-cols-[817px_393px] min-[992px]:gap-[30px]">

          <div className="overflow-x-auto">
            <div className="min-w-[760px] min-[768px]:min-w-[817px]">
              <div className="grid h-[55px] grid-cols-[120px_177px_177px_106px_162px_75px] items-center bg-[#F9F1E7] text-[16px] font-medium text-black">
                <div></div>
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
                <div></div>
              </div>

              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="mt-[45px] grid grid-cols-[120px_177px_177px_106px_162px_75px] items-center min-[768px]:mt-[55px]"
                  >
                    <Link
                      href={`/product/${item.id}`}
                      aria-label={`View ${item.name}`}
                      className="block h-[105px] w-[105px]"
                    >
                      <div className="flex h-[105px] w-[105px] items-center justify-center overflow-hidden rounded-[10px] bg-[rgba(184,142,47,0.22)]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </Link>

                    <p className="text-[16px] text-[#9F9F9F]">
                      {item.name}
                    </p>

                    <p className="text-[16px] text-[#9F9F9F]">
                      {formatPrice(item.price)}
                    </p>

                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(event) => updateQuantity(item.id, event.target.value)}
                      onInput={(event) => updateQuantity(item.id, event.currentTarget.value)}
                      className="h-8 w-8 rounded-[5px] border border-[#9F9F9F] text-center text-[16px] text-black outline-none"
                      aria-label={`Quantity of ${item.name}`}
                    />

                    <p className="text-[16px] text-black">
                      {formatPrice(item.price * item.quantity)}
                    </p>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="flex h-8 w-8 items-center justify-center text-[22px] text-[#B88E2F] transition hover:scale-110"
                      aria-label={`Remove ${item.name}`}
                    >
                      🗑
                    </button>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-[18px] text-[#9F9F9F]">
                  Your cart is empty.
                </div>
              )}
            </div>
          </div>

          <aside className="mx-auto w-full max-w-[393px] bg-[#F9F1E7] px-8 py-8 text-center min-[768px]:px-[75px] min-[768px]:py-[30px] min-[992px]:h-[390px] min-[992px]:py-[15px]">
            <h2 className="mb-8 text-[28px] font-semibold leading-[1.3] text-black min-[768px]:mb-[45px] min-[768px]:text-[32px] min-[768px]:leading-[48px]">
              Cart Totals
            </h2>

            <div className="mb-6 flex items-center justify-between min-[768px]:mb-[31px]">
              <span className="text-[16px] font-medium text-black">
                Subtotal
              </span>

              <p className="text-[14px] text-[#9F9F9F] min-[768px]:text-[16px]">
                {formatPrice(total)}
              </p>
            </div>

            <div className="mb-8 flex items-center justify-between min-[768px]:mb-[31px]">
              <span className="text-[16px] font-medium text-black">
                Total
              </span>

              <strong className="text-[18px] font-medium text-[#B88E2F] min-[768px]:text-[20px]">
                {formatPrice(total)}
              </strong>
            </div>

            <Link
              href="/checkout"
              className="mx-auto flex h-[52px] w-[200px] items-center justify-center rounded-[15px] border border-black text-[18px] text-black transition hover:bg-black hover:text-white min-[768px]:h-[59px] min-[768px]:w-[222px] min-[768px]:text-[20px]"
            >
              Check Out
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}