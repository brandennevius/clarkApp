import React, { Component } from 'react';
import { Container, Content, Button, Icon } from 'native-base';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class ActivityScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    );
  }
}

export default ActivityScreen;