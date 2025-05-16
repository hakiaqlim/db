import { Product, User } from "./models"; // Assuming both are exported
import { connectDB } from "./utils";

export const fetchUser = async (q = "") => {
  const regex = new RegExp(q, "i");
  try {
    await connectDB();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users");
  }
};

export const fetchUsers = async (id) => {
  try {
    await connectDB();
    const user = await User.findById(id); // ✅
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
};


export const fetchProducts = async () => {
  try {
    await connectDB();
    const products = await Product.find();
    return products;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products");
  }
};
export const fetchProduct = async (id) => {
  try {
    await connectDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product");
  }
};
