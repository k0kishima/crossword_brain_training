import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

type Props = {
  handleClick: () => void;
};

export const NextButton: React.FC<Props> = ({ handleClick }: Props) => {
  return (
    <Button variant="contained" onClick={handleClick} component={Link} to="./">
      Next
    </Button>
  );
};
