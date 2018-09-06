import React, { Component } from 'react';
import styled from 'react-emotion';
import { navigate } from '@reach/router';
import { Button, OutlinedButton } from '../../shared/Buttons';
import TimeSelector from '../../components/TimeSelector';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column'
});

const StartReviewBox = styled('div')({
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  Button: {
    marginBottom: '0.5rem'
  }
});

export default class DeckActions extends Component {
  handleAddNote = () => {
    navigate(this.props.deck.slug + '/add-note');
  };

  handleStartReview = () => {
    navigate(this.props.deck.slug + '/review');
  };

  render() {
    return (
      <Container>
        <OutlinedButton large onClick={this.handleAddNote}>
          Add Note
        </OutlinedButton>
        <StartReviewBox>
          <Button large onClick={this.handleStartReview}>
            Start Review
          </Button>
          <TimeSelector />
        </StartReviewBox>
      </Container>
    );
  }
}