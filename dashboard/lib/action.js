'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Product, User } from './models';
import { connectDB } from './utils';
import bcrypt from 'bcrypt';

// Add user
export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

  try {
    await connectDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin: isAdmin === 'true',
      isActive: isActive === 'true',
    });

    await newUser.save();
  } catch (err) {
    console.error(err);
    throw new Error('Failed to create user!');
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
};

// Update user
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

  try {
    await connectDB();

    const updateFields = {
      username,
      email,
      phone,
      address,
      isAdmin: isAdmin === 'true',
      isActive: isActive === 'true',
    };

    if (password && password.trim() !== "") {
      const salt = await bcrypt.genSalt(10);
      updateFields.password = await bcrypt.hash(password, salt);
    }

    // Remove any empty or undefined fields
    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || updateFields[key] === undefined) {
        delete updateFields[key];
      }
    });

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.error(err);
    throw new Error('Failed to update user!');
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
};
export const updateProduct = async (formData) => {
  const { id, 
     title,
      desc,
      price,
      stock,
      color,
      size, } = Object.fromEntries(formData);

  try {
    await connectDB();

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    if (password && password.trim() !== "") {
      const salt = await bcrypt.genSalt(10);
      updateFields.password = await bcrypt.hash(password, salt);
    }

    // Remove any empty or undefined fields
    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || updateFields[key] === undefined) {
        delete updateFields[key];
      }
    });

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.error(err);
    throw new Error('Failed to update product!');
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/users');
};

// Add product
export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } = Object.fromEntries(formData);

  try {
    await connectDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (err) {
    console.error(err);
    throw new Error('Failed to create product');
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};

// Delete product
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to delete product');
  }

  revalidatePath('/dashboard/products');
};

// Delete user (FIXED!)
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectDB();
    await User.findByIdAndDelete(id); // ✅ was wrongly using Product
  } catch (err) {
    console.log(err);
    throw new Error('Failed to delete user');
  }

  revalidatePath('/dashboard/users');
};
