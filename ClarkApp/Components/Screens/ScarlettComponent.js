import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View } from 'react-native'

// demo purposes only
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i
    }
}

export default class Exemple extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [...range(Infinity)],
            swipedAllCards: false,
            swipeDirection: '',
            cardIndex: 0
        }
    }

    renderCard = (card, index) => {
        return (
            <View style={styles.card}>
                <Text style={styles.text}>Scarlett</Text>
            </View>
        )
    };

    onSwiped = (type) => {
        console.log(`on swiped ${type}`)
    }

    onSwipedAllCards = () => {
        this.setState({
            swipedAllCards: true
        })
    };

    swipeLeft = () => {
        this.swiper.swipeLeft()
    };

    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    ref={swiper => {
                        this.swiper = swiper
                    }}
                    onSwiped={() => this.onSwiped('general')}
                    onSwipedLeft={() => this.onSwiped('left')}
                    onSwipedRight={() => this.onSwiped('right')}
                    onSwipedTop={() => this.onSwiped('top')}
                    onSwipedBottom={() => this.onSwiped('bottom')}
                    onTapCard={this.swipeLeft}
                    cards={this.state.cards}
                    cardIndex={this.state.cardIndex}
                    cardVerticalMargin={80}
                    renderCard={this.renderCard}
                    onSwipedAll={this.onSwipedAllCards}
                    stackSize={3}
                    stackSeparation={15}
                    overlayLabels={{

                        left: {
                            title: 'BACK',
                            style: {
                                label: {
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                    color: 'white',
                                    borderWidth: 1
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-start',
                                    marginTop: 30,
                                    marginLeft: -30
                                }
                            }
                        },
                        right: {
                            title: 'NEXT',
                            style: {
                                label: {
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                    color: 'white',
                                    borderWidth: 1
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    marginTop: 30,
                                    marginLeft: 30
                                }
                            }
                        }
                    }
                }
                        
                    animateOverlayLabelsOpacity
                    animateCardOpacity
                    swipeBackCard
                >
                    <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
    },
    done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
    }
})
