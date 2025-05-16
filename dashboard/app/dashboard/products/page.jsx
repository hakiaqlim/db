import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import styles from '@/app/ui/dashboard/product/product.module.css';
import { fetchProducts } from "@/lib/data"; // <-- Assume you have this function
import { deleteProduct } from "@/lib/action";

const ProductsPage = async () => {
  const products = await fetchProducts(); // fetch product list

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/product/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <img
                    width={40}
                    height={40}
                    className={styles.productImage}
                    src={product.img || "https://stores.blackberrys.com/VendorpageTheme/Enterprise/EThemeForBlackberrys/images/product-not-found.jpg"}
                    alt="Product"
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={deleteProduct}>
<input type="hidden" value={product.id} name='id' />
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
