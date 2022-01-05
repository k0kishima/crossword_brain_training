import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

type Props = {
  handleClick: () => void;
};

export const SubmitButton: React.FC<Props> = ({ handleClick }: Props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      component={Link}
      to="check"
    >
      Submit
    </Button>
  );
};
