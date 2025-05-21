import { addProduct } from "@/lib/action";
import styles from "@/app/ui/dashboard/product/addProduct/addProduct.module.css";

export default function AddProductPage() {
  return (
    <form action={addProduct} className={styles.form}>
      <input type="text" name="title" placeholder="Title" required />

      <select name="cat" id="cat">
        <option value="general">Choose a Category</option>
        <option value="kitchen">Kitchen</option>
        <option value="phone">Phone</option>
        <option value="computer">Computer</option>
      </select>

      <input type="number" name="price" placeholder="Price" required />
      <input type="number" name="stock" placeholder="Stock" required />
      <input type="text" name="color" placeholder="Color" />
      <input type="text" name="size" placeholder="Size" />
      <textarea name="desc" placeholder="Description" cols="30" rows="16" required></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}
