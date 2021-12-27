import React from 'react';
import { Button } from '@material-ui/core';

type Props = {
  handleClick: () => void;
};

export const SubmitButton: React.FC<Props> = ({ handleClick }: Props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      href="check"
    >
      Submit
    </Button>
  );
};
