// File: lib/data.js
import { Product, User } from "./models";
import { connectDB } from "./utils";

// ✅ Renamed: Search users by query
export const searchUsers = async (q = "") => {
  const regex = new RegExp(q, "i");
  try {
    await connectDB();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch users");
  }
};

// ✅ Renamed: Fetch single user by ID
export const fetchUserById = async (id) => {
  try {
    await connectDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error(err);
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
