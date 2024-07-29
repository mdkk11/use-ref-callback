import { useState, useEffect } from 'react';
import { User, fetchUser, updateUser } from '../utils';
import { useCallbackRef } from '../useCallbackRef';
import { Child } from './Child';

export const UserProfileWithUseRef = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = useCallbackRef(async (name: string, email: string) => {
    if (user) {
      const updatedUser = { ...user, name, email };
      const result = await updateUser(updatedUser);
      setUser(result);
      setIsEditing(false);
    }
  });

  useEffect(() => {
    fetchUser(1).then(setUser);
  }, []);

  const toggleEdit = () => setIsEditing(!isEditing);

  if (!user) {
    return <div>Loading...</div>;
  }

  console.log('Rendered UserProfileWithUseRef Component');

  return (
    <div>
      <h1>User Profile With useRef</h1>
      {isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            handleUpdate(formData.get('name') as string, formData.get('email') as string);
          }}
        >
          <input name="name" defaultValue={user.name} />
          <input name="email" defaultValue={user.email} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      )}
      <Child handleUpdate={handleUpdate} />
    </div>
  );
};
