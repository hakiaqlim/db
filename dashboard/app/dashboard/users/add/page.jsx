// ✅ This is a SERVER component by default (no "use client")
import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'
import { addUser } from '@/lib/action'

export default function AddUserPage() {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="tel" placeholder="phone" name="phone" />
        
        <select name="isAdmin" id="isAdmin">
          <option value="">Is Admin</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <select name="isActive" id="isActive">
          <option value="">Is Active</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <textarea name="address" id="address" rows="4" placeholder="Address"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
