import Transaction from "../ui/dashboard/transaction/Transaction"
import styles from "../ui/dashboard/dashboard.module.css"
import Card from "../ui/dashboard/card/Card"

import Rightbar from "../ui/dashboard/rightbar/Rightbar"

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
<div className={styles.main}>
<div className={styles.cards}>
<Card/>
<Card/>
<Card/>
</div>
<Transaction/>

</div>
<div className={styles.side}>
<Rightbar/>
</div>
    </div>
  )
}

export default Dashboard