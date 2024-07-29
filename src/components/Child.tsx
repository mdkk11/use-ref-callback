import { memo } from 'react';

type Props = {
  handleUpdate: (name: string, email: string) => Promise<void>;
};

export const Child = memo(({ handleUpdate }: Props) => {
  console.log('Rendered Child Component');

  return (
    <div>
      <button type="button" onClick={() => handleUpdate('taro', 'email')}>
        Child Component
      </button>
    </div>
  );
});
