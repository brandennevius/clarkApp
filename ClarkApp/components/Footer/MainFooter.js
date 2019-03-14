import React, { Component } from 'react'
import { Footer, Badge, Text, FooterTab, Button, Icon } from 'native-base'

export default class MainFooter extends Component {
  render() {
    return (
      <Footer>
      <FooterTab>
        <Button badge vertical>
          <Badge><Text>2</Text></Badge>
          <Icon name="apps" />
          <Text>Apps</Text>
        </Button>
        <Button vertical>
          <Icon name="camera" />
          <Text>Camera</Text>
        </Button>
        <Button active badge vertical>
          <Badge ><Text>51</Text></Badge>
          <Icon active name="navigate" />
          <Text>Navigate</Text>
        </Button>
        <Button vertical>
          <Icon name="person" />
          <Text>Contact</Text>
        </Button>
      </FooterTab>
    </Footer>

    );
  }
}

