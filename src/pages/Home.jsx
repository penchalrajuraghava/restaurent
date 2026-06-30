import { useContext } from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { datacontext } from "../context/UserContext";
import { FaTrash } from "react-icons/fa";

const Home = () => {
  const {
    cate,
    Setcate,
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    showCart,
  } = useContext(datacontext);

  const Filter = (category) => {
    if (category === "All") {
      Setcate(food_items);
    } else {
      const filteredItems = food_items.filter(
        (item) => item.food_category === category,
      );

      Setcate(filteredItems);
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  return (
    <div className="bg-slate-300 min-h-screen">
      <Nav />

      {/* Categories */}

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {Categories.map((item) => (
          <div
            key={item.id}
            onClick={() => Filter(item.name)}
            className="bg-white rounded-xl shadow-lg p-4 w-32 flex flex-col items-center justify-center cursor-pointer hover:bg-green-200 hover:scale-105 transition-all duration-300"
          >
            <div>{item.icon}</div>

            <h2 className="mt-2 text-lg font-semibold capitalize">
              {item.name}
            </h2>
          </div>
        ))}
      </div>

      {/* Food Cards */}

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cate.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type}
            description={item.description}
          />
        ))}
      </div>

      {/* Cart Sidebar */}

      <div
        className={`fixed top-0 right-0 h-screen w-[400px] bg-white shadow-2xl z-50 transition-transform duration-500 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 overflow-y-auto h-full">
          <h1 className="text-3xl font-bold mb-5">Cart ({cart.length})</h1>

          {cart.length === 0 ? (
            <div className="flex justify-center items-center h-[70vh]">
              <h2 className="text-2xl text-gray-400 font-bold">
                Cart is Empty
              </h2>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 border-b py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h2 className="font-bold">{item.name}</h2>

                    <p className="text-orange-500 font-bold">₹{item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="bg-red-500 text-white px-3 rounded"
                      >
                        -
                      </button>

                      <span className="font-bold">{item.qty}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="bg-green-500 text-white px-3 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 text-xl"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}

              <div className="mt-6 border-t pt-5">
                <h2 className="text-2xl font-bold">Total : ₹{totalPrice}</h2>

                <button className="w-full mt-5 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
