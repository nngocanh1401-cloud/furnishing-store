"use client";
import { useEffect, useState } from "react";

const orderItem = {
  name: "Asgaard sofa",
  quantity: 1,
  price: 250000,
};

const countries = ["Sri Lanka", "Viet Nam", "United States", "Japan"];

const fallbackProvinces = {
  "Sri Lanka": ["Western Province", "Central Province", "Southern Province"],
  "United States": ["California", "Texas", "New York"],
  Japan: ["Tokyo", "Osaka", "Kyoto"],
};


export default function CheckoutSection() {
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [provinces, setProvinces] = useState([]);
  const [isProvinceLoading, setIsProvinceLoading] = useState(true);
  const [formData, setFormData] = useState({
    //truethy
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Sri Lanka",
    streetAddress: "",
    city: "",
    province: "Western Province",
    zipCode: "",
    phone: "",
    email: "",
    note: "",
  });

  useEffect(() => {
    async function fetchProvinces() {
      try {
        const response = await fetch("https://provinces.open-api.vn/api/v2/p/");
        const data = await response.json();

        setProvinces(data);
      } catch (error) {
        console.error("Failed to fetch provinces:", error);
      } finally {
        setIsProvinceLoading(false);
      }
    }

    fetchProvinces();
  }, []);

  const provinceOptions =
    formData.country === "Viet Nam"
      ? provinces.map((province) => province.name)
      : fallbackProvinces[formData.country] || [];

  const subtotal = orderItem.price * orderItem.quantity;

  const formatPrice = (price) => `Rs. ${price.toLocaleString("en-US")}.00`;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => {
      if (name === "country") {
        const nextProvince =
          value === "Viet Nam"
            ? ""
            : fallbackProvinces[value]?.[0] || "";

        return {
          ...prev,
          country: value,
          province: nextProvince,
        };
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.streetAddress ||
      !formData.city ||
      !formData.province ||
      !formData.phone ||
      !formData.email
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Order placed successfully!");
  };

  return (
    <section className="bg-white py-10 font-[Poppins] min-[768px]:py-14 min-[1200px]:py-[63px]">
      <form
        onSubmit={handlePlaceOrder}
        className="mx-auto grid max-w-[1242px] grid-cols-1 gap-10 px-4 min-[600px]:px-6 min-[992px]:grid-cols-[608px_608px] min-[992px]:gap-26 min-[1200px]:px-0"
      >
        <section className="w-full">
          <div className="mx-auto max-w-[453px] min-[992px]:mx-0 min-[1200px]:ml-[74px]">
            <h2 className="mb-8 text-[28px] font-semibold leading-[126.5%] text-black min-[768px]:text-[36px]">
              Billing details
            </h2>

            <div className="grid grid-cols-1 gap-6 min-[600px]:grid-cols-2">
              <CheckoutInput
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

              <CheckoutInput
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <CheckoutInput
              label="Company Name (Optional)"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />

            <div className="mt-6">
              <label className="mb-[22px] block text-[16px] font-medium text-black">
                Country / Region
              </label>

              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="h-[75px] w-full rounded-[10px] border border-[#9F9F9F] px-[29px] text-[16px] text-[#9F9F9F] outline-none"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <CheckoutInput
              label="Street address"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />

            <CheckoutInput
              label="Town / City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <div className="mt-6">
              <label className="mb-[22px] block text-[16px] font-medium text-black">
                Province
              </label>

              <select
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="h-[75px] w-full rounded-[10px] border border-[#9F9F9F] px-[29px] text-[16px] text-[#9F9F9F] outline-none"
              >
                <option value="">
                  {formData.country === "Viet Nam" && isProvinceLoading
                    ? "Loading provinces..."
                    : "Choose province"}
                </option>

                {provinceOptions.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>

            <CheckoutInput
              label="ZIP code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />

            <CheckoutInput
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <CheckoutInput
              label="Email address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Additional information"
              className="mt-8 h-[75px] w-full rounded-[10px] border border-[#9F9F9F] px-[29px] text-[16px] text-black outline-none placeholder:text-[#9F9F9F]"
            />
          </div>
        </section>

        <aside className="w-full">
          <div className="mx-auto max-w-[533px] px-0 py-4 min-[992px]:px-[38px] min-[992px]:py-[35px]">
            <div className="mb-[14px] flex items-center justify-between">
              <h3 className="text-[24px] font-medium text-black">Product</h3>
              <h3 className="text-[24px] font-medium text-black">Subtotal</h3>
            </div>

            <div className="mb-[22px] flex items-center justify-between">
              <p className="text-[16px] text-[#9F9F9F]">
                {orderItem.name}{" "}
                <span className="ml-[11px] text-[12px] text-black">
                  x {orderItem.quantity}
                </span>
              </p>

              <p className="text-[16px] font-light text-black">
                {formatPrice(subtotal)}
              </p>
            </div>

            <div className="mb-[22px] flex items-center justify-between">
              <p className="text-[16px] text-black">Subtotal</p>
              <p className="text-[16px] font-light text-black">
                {formatPrice(subtotal)}
              </p>
            </div>

            <div className="mb-[33px] flex items-center justify-between border-b border-[#D9D9D9] pb-[33px]">
              <p className="text-[16px] text-black">Total</p>
              <strong className="text-[24px] font-bold text-[#B88E2F]">
                {formatPrice(subtotal)}
              </strong>
            </div>

            <div className="space-y-[11px]">
              <label className="flex cursor-pointer items-center gap-[15px] text-[16px] text-black">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                  className="h-[14px] w-[14px] accent-black"
                />
                Direct Bank Transfer
              </label>

              {paymentMethod === "bank" && (
                <p className="text-justify text-[16px] font-light leading-[150%] text-[#9F9F9F]">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              )}

              <label className="flex cursor-pointer items-center gap-[15px] text-[16px] font-medium text-[#9F9F9F]">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="h-[14px] w-[14px] accent-black"
                />
                Cash On Delivery
              </label>
            </div>

            <p className="mt-[22px] text-justify text-[16px] font-light leading-[150%] text-black">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <strong className="font-semibold">privacy policy.</strong>
            </p>

            <button
              type="submit"
              className="mx-auto mt-[39px] flex h-[64px] w-full max-w-[318px] items-center justify-center rounded-[15px] border border-black bg-white text-[20px] text-black transition hover:bg-black hover:text-white"
            >
              Place order
            </button>
          </div>
        </aside>
      </form>
    </section>
  );
}

function CheckoutInput({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}) {
  return (
    <div className="mt-6">
      <label
        htmlFor={name}
        className="mb-[22px] block text-[16px] font-medium text-black"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="h-[75px] w-full rounded-[10px] border border-[#9F9F9F] px-[29px] text-[16px] text-black outline-none"
      />
    </div>
  );
}