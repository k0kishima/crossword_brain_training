import React from 'react';
import styled from 'styled-components';
import { Button, Box } from '@material-ui/core';
import { QuestionContainer } from './Question/Container';
import { PassButtonContainer } from './PassButton';

export const QuestionPage: React.FC = () => {
  const Styled = styled.div`
    button,
    a {
      margin: 10px 30px 30px 30px;
    }
  `;

  return (
    <Styled>
      <QuestionContainer />

      <Box textAlign="center">
        <Button variant="contained" color="primary" href="./answer">
          Try this
        </Button>
        <PassButtonContainer />
      </Box>
    </Styled>
  );
};
