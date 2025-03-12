import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
const ShoppingList = () => {
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    // Update key, and value in bulk
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};
  return (
    <div>
      {/* Navbar */}
      <div className="navbar mb-6">
        <h1 className="text-2xl font-bold flex gap-2  items-center">
          <MdShoppingCart />
          Cart
        </h1>
        <span className="nav-link">
          <GiHamburgerMenu />
        </span>
      </div>
      <form onSubmit={handleSubmit} className="px-4 flex flex-col gap-2">
        <legend className="form-label">Add Item Detail</legend>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter item name"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Price */}
        <input
          type="text"
          name="price"
          placeholder="Enter price"
          value={formData.price}
          onChange={handleChange}
        />

        {/* Stock */}
        <input
          type="text"
          name="stock"
          placeholder="Enter stock quantity"
          value={formData.stock}
          onChange={handleChange}
        />

        {/* Submit Button */}
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ShoppingList;
