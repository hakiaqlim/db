// File: app/dashboard/users/[id]/page.jsx
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import { fetchUserById } from '@/lib/data'
import { updateUser } from '@/lib/action'

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUserById(id); // ✅ Correct function for fetching by ID

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <img
            src={
              user.img ||
              'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-symbol-260nw-2282658551.jpg'
            }
            alt="Profile"
          />
        </div>
        {user.username}
      </div>

      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />

          <label>Username</label>
          <input type="text" name="username" defaultValue={user.username} />

          <label>Email</label>
          <input type="email" name="email" defaultValue={user.email} />

          <label>Password</label>
          <input type="text" name="password" placeholder="******" />

          <label>Phone</label>
          <input type="text" name="phone" defaultValue={user.phone} />

          <label>Address</label>
          <textarea name="address" defaultValue={user.address}></textarea>

          <label>Is Admin?</label>
          <select name="isAdmin" defaultValue={user.isAdmin.toString()}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <label>Is Active</label>
          <select name="isActive" defaultValue={user.isActive.toString()}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
