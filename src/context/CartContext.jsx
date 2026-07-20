"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext(null);
function getNumericPrice(price) {
  if (typeof price === "number") {
    return price;
  }

  return (
    Number(
      String(price || "").replace(/[^\d]/g, "")
    ) || 0
  );
}
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const cartTotal = cartItems.reduce((total, item) => {
  const price = getNumericPrice(item.price);
  const quantity = Number(item.quantity) || 1;

  return total + price * quantity;
}, 0);

  // Đọc giỏ hàng từ localStorage khi website khởi động
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");

      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Không thể đọc giỏ hàng:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Lưu lại localStorage mỗi khi giỏ hàng thay đổi
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems, isLoaded]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((currentItems) => {
      const existingProduct = currentItems.find(
        (item) => item.id === product.id
      );

      // Nếu sản phẩm đã có trong giỏ thì tăng số lượng
      if (existingProduct) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      // Nếu chưa có thì thêm sản phẩm mới
      return [
        ...currentItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };

  const increaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: Math.max(1, item.quantity - 1),
              }
            : item
        )
    );
  };
  const updateCartQuantity = (productId, quantity) => {
  const safeQuantity = Math.max(1, Number(quantity) || 1);

  setCartItems((currentItems) =>
    currentItems.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: safeQuantity,
          }
        : item
    )
  );
};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        updateCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart phải được sử dụng bên trong CartProvider"
    );
  }

  return context;
}