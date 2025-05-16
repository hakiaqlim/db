"use client";
import { MdPlayCircleFilled } from 'react-icons/md';
import styles from './rightbar.module.css'
const Rightbar = () => {
  return (
    <div className={styles.container}>
<div className={styles.item}>
<div className={styles.bgContainer}>
<img className={styles.bg} src="https://images.squarespace-cdn.com/content/v1/5b4df6d85b409bc833edd49e/1655161557060-IPZFFGHUKR3PLIXNTDQE/AdobeStock_406844477%2B%25281%2529.jpg?format=1000w" width={40} height={40} alt="" />
</div>
<div className={styles.texts}>
<span>🔥 Available Now</span>
<h3>How to use the new version of the admin dashboard?</h3>
<span className={styles.subtitle}>Takes 4 minutes to learn</span>
<p className={styles.desc}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, veniam eveniet accusantium repellendus omnis aut deserunt modi ratione
</p>
<button className={styles.button}><MdPlayCircleFilled/> Watch </button>
</div>
</div>
<div className={styles.item}>
<div className={styles.bgContainer}>
<img src="https://images.squarespace-cdn.com/content/v1/5b4df6d85b409bc833edd49e/1655161557060-IPZFFGHUKR3PLIXNTDQE/AdobeStock_406844477%2B%25281%2529.jpg?format=1000w" width={40} height={40} alt="" />
</div>
<div className={styles.texts}>
<span>🔥 Available Now</span>
<h3>How to use the new version of the admin dashboard?</h3>
<span className={styles.subtitle}>Takes 4 minutes to learn</span>
<p className={styles.desc}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, veniam eveniet accusantium recati?
</p>
<button className={styles.button}><MdPlayCircleFilled/> Watch </button>
</div>
</div>
    </div>
  )
}

export default Rightbar