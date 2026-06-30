import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removetocart } from "../slice/slice";


const Cart = () => {

    const Cartitems=useSelector((item)=>item.cart.items)
   
//   const total = Cartitems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
  const dispatch=useDispatch()

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          🛒 Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {Cartitems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-5 flex flex-col sm:flex-row gap-5"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>

                  <p className="text-gray-600 mt-2">
                    Price: ₹{item.price}
                  </p>

                  <p className="text-gray-600">
                    Quantity: {item.quantity}
                  </p>

                  <p className="font-bold text-lg mt-2">
                    ₹{item.price}
                  </p>
                </div>

                <div className="flex items-center">
                  <button onClick={()=>dispatch(removetocart(item.id))} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-6">
            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Items</span>
              <span>{Cartitems.length}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹3456789</span>
            </div>

            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
              Proceed to Checkout
            </button>

            <button className="w-full mt-3 border border-gray-300 hover:bg-gray-100 py-3 rounded-lg font-semibold transition">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;