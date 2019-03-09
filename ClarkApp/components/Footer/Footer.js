import React, { Component } from 'react'
import { Footer, FooterTab, Button, Icon } from 'react-native'

export default class Footer extends Component {
  render() {
    return (
        <Footer>
        <FooterTab>
          <Button>
            <Icon name="apps" />
          </Button>
          <Button>
            <Icon name="camera" />
          </Button>
          <Button active>
            <Icon active name="navigate" />
          </Button>
          <Button>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

