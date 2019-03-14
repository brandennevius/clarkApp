import React, { Component } from 'react';
import { Left, Body, Button, Icon, Title, Header, Right} from 'native-base';

export default class MainHeader extends Component {
  render() {
    return (

        <Header>
          <Left>
          <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right></Right>
        </Header>

    );
  }
}