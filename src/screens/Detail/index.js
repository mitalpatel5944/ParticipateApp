//Global Libraries
import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { colors, fonts, images } from "../../theme";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/EvilIcons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderHeader = () => (
        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => {
                this.props.navigation.pop()
            }}>
                <Icon name="chevron-left" size={30} color={colors.white} />
            </TouchableOpacity>
            <Text style={{
                color: colors.white,
                fontSize: 18,
                fontFamily: fonts.pbo
            }}>Details</Text>
            <View />
        </View>
    )

    renderCard = () => (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Card style={{ margin: 20, borderRadius: 10 }}>

                <Card.Cover source={images.imagine} style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                <View style={{ backgroundColor: colors.lightGrey, height: 2, marginTop: 3 }} />
                <View style={{ margin: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{
                            fontSize: 15,
                            fontFamily: fonts.pbo
                        }}>Competition Name</Text>
                        <Text style={{
                            color: colors.blue,
                            fontSize: 10,
                            fontFamily: fonts.pre
                        }}>3 days left</Text>
                    </View>
                    <Text style={{
                        color: colors.blue,
                        fontSize: 10,
                        marginTop: 5,
                        fontFamily: fonts.pbo
                    }}>Art & Craft, 500Rs</Text>
                    <Text style={{
                        fontSize: 13,
                        marginTop: 10,
                        fontFamily: fonts.pre,
                        // width: 200
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                {'\n\n'}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5, paddingTop: 10 }}>
                        <Icon name="heart" size={30} color={colors.blue} />
                        <Icon name="share-google" size={30} color={colors.blue} />
                    </View>

                    <Button mode={'contained'}
                        uppercase={false}
                        labelStyle={{
                            fontFamily: fonts.white, fontFamily: fonts.pbo,
                            fontSize: 12, color: colors.white
                        }}
                        style={{ backgroundColor: colors.yellow, borderRadius: 20, marginTop: 20, padding: 5 }} color={colors.white} onPress={() => console.log('Pressed')}>
                        View Existing Submissions  </Button>

                    <Button mode={'contained'}
                        uppercase={false}
                        labelStyle={{
                            fontFamily: fonts.white, fontFamily: fonts.pbo,
                            fontSize: 12, color: colors.white
                        }}
                        style={{ backgroundColor: colors.blue, borderRadius: 20, marginTop: 10, padding: 5 }} color={colors.white} onPress={() => console.log('Pressed')}>
                        Upload  </Button>
                </View>

            </Card>
        </ScrollView>

    )
    render() {
        return (
            <ImageBackground
                source={images.bg}
                style={{ flex: 1 }}
            >

                {this.renderHeader()}
                {this.renderCard()}
            </ImageBackground>
        );
    }
}


export default Detail
