import React from 'react';
import styled from 'styled-components';
import { Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { QuestionContainer } from './Question/Container';
import { PassButtonContainer } from './PassButton';

export const QuestionPage: React.FC = () => {
  const Styled = styled.div`
    button,
    a {
      margin: 10px 30px 30px 30px;
      cursor: pointer;
    }
  `;

  return (
    <Styled>
      <QuestionContainer />

      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="./answer"
        >
          Try this
        </Button>
        <PassButtonContainer />
      </Box>
    </Styled>
  );
};
