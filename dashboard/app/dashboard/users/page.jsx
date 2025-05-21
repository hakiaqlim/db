// File: app/dashboard/users/page.jsx
import Search from '@/app/ui/dashboard/search/Search'
import styles from '../../ui/dashboard/users/users.module.css'
import Link from 'next/link'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'
import { searchUsers } from '@/lib/data' // ✅ Updated import
import { deleteUser } from '@/lib/action'

const UserPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const users = await searchUsers(q); // ✅ Updated usage

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <img
                    width={40}
                    height={40}
                    className={styles.userImage}
                    src={
                      user.img ||
                      "https://st2.depositphotos.com/1066611/6609/i/600/depositphotos_66094863-stock-photo-smiling-boy-sitting-on-a.jpg"
                    }
                    alt="User"
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{new Date(user.createdAt).toDateString()}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "Passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
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

export default UserPage;
