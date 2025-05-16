import React from 'react'
import styles from '@/app/ui/dashboard/product/addProduct/singleProduct/singleProduct.module.css'

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
<div className={styles.infoContainer}>
    <div className={styles.imgContainer}>   
<img src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-symbol-260nw-2282658551.jpg" alt="" />
</div>
Iphone
 </div>
 <div className={styles.formContainer }>
<form className={styles.form}>
    <label>Title</label>
    <input type="text" name='title' placeholder='Ali'/>
    <label>Price</label>
    <input type="number" name='price' placeholder='ali@gmail.com' />
    <label>Stock</label>
    <input type="number" name='stock' placeholder='23' />
    <label>Color</label>
    <input name="color" type='text' placeholder='red'/>
<label>Size</label>
<textarea name="size" type='text' placeholder='New York'></textarea>
    <label>Cat</label>
    <select name="cat" id="cat">
        <option value='kitchen'>Kitchen</option>
        <option value='computer'>Computer</option>
    </select>
    <label>Description</label>
   <textarea name="desc" id="desc" placeholder='description' rows='10'></textarea>
    <button>Update</button>
</form>
 </div>
    </div>
  )
}

export default SingleProductPage