import { Typography } from '@mui/material';
import { useState } from 'react';

type Props = {
  label?: string;
  name: string;
};

export const Contact = ({ label, name }: Props) => {
  const [value, setValue] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {!isEditing ? (
        <Typography
          variant="subtitle1"
          lineHeight="1rem"
          onClick={() => setIsEditing(true)}
        >
          {value}
        </Typography>
      ) : (
        <>
          <span>{label ?? 'Edit contact'}</span>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <footer>
            <button onClick={() => setIsEditing(false)}>Confirm</button>
            <button
              onClick={() => {
                setValue(name);
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </footer>
        </>
      )}
    </div>
  );
};
