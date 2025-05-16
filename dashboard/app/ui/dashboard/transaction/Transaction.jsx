import styles from "./transaction.module.css";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transaction</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <img
                  width={40}
                  height={40}
                  className={styles.userImage}
                  src="https://st2.depositphotos.com/1066611/6609/i/600/depositphotos_66094863-stock-photo-smiling-boy-sitting-on-a.jpg"
                  alt="Ali"
                />
                Ali
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>#3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <img
                  width={40}
                  height={40}
                  className={styles.userImage}
                  src="https://st2.depositphotos.com/1066611/6609/i/600/depositphotos_66094863-stock-photo-smiling-boy-sitting-on-a.jpg"
                  alt="Ali"
                />
                Ali
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>#3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <img
                  width={40}
                  height={40}
                  className={styles.userImage}
                  src="https://st2.depositphotos.com/1066611/6609/i/600/depositphotos_66094863-stock-photo-smiling-boy-sitting-on-a.jpg"
                  alt="Ali"
                />
                Ali
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
            </td>
            <td>14.02.2024</td>
            <td>#3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
