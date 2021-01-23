//Global Libraries
import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { FlatList, ScrollView ,TouchableWithoutFeedback} from "react-native-gesture-handler";
import { Searchbar, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/EvilIcons';
import { colors, fonts, images } from "../../theme";

class Participate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latest: [1, 2, 3, 4, 5]
        }
    }

      renderSearch = () => (
        <View>
            <View style={{ margin: 20 }}>
                <Text style={styles.welcom}>Welcome,</Text>
                <Text style={styles.welcom2}>LOREM IPSUM</Text>
            </View>
            <Searchbar
                placeholder="Search for Competition"
                placeholderTextColor={colors.blue}
                // icon={'search'}
                inputStyle={{
                    fontFamily: fonts.pmed,
                    fontSize: 13, paddingLeft: -40
                }}
                style={{
                    flexDirection: 'row-reverse', margin: 20, padding: 5, borderRadius: 10
                }}
            // onChangeText={onChangeSearch}
            // value={searchQuery}
            />

        </View>
    )

    renderLatest = () => (
        <View>
            <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                    color: colors.white,
                    fontSize: 20,
                    fontFamily: fonts.pheno
                }}>Latest Competition</Text>
                <Text style={{
                    color: colors.white,
                    fontSize: 13,
                    fontFamily: fonts.pre
                }}>See all</Text>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={this.state.latest}
                keyExtractor={(item, index) => 'D' + index}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.props.navigation.navigate('Detail')
                        }}
                        style={{ borderRadius: 10, margin: 10, backgroundColor: colors.white }}>
                        <Image
                            source={images.imagine}
                            style={{
                                width: 200, height: 130, resizeMode: 'cover',
                                borderTopLeftRadius: 10, borderTopRightRadius: 10
                            }}
                        />
                        <View style={{ backgroundColor: colors.lightGrey, height: 2 }} />
                        <View style={{ margin: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{
                                    fontSize: 10,
                                    fontFamily: fonts.pbo
                                }}>Competition Name</Text>
                                <Text style={{
                                    color: colors.blue,
                                    fontSize: 8,
                                    fontFamily: fonts.pmed
                                }}>3 days left</Text>
                            </View>
                            <Text style={{
                                color: colors.blue,
                                fontSize: 8,
                                fontFamily: fonts.pbo
                            }}>Art & Craft, 500Rs</Text>
                            <Text style={{
                                fontSize: 8,
                                fontFamily: fonts.pmed,
                                width: 200
                            }}>Lorem Ipsum is a dummy content that is placed instead Of text in the document.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, paddingTop: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name="heart" size={30} color={colors.blue} />
                                    <Icon name="share-google" size={30} color={colors.blue} />
                                </View>
                                <Button
                                    uppercase={false}
                                    labelStyle={{ fontFamily: fonts.pbo, fontSize: 8, color: colors.white }}
                                    style={{ backgroundColor: colors.blue, borderRadius: 30 }}
                                >
                                    Participate
                                </Button>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                )}
            />
        </View>
    )


    renderPendingSubmission = () => (
        <View>
            <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                    color: colors.white,
                    fontSize: 20,
                    fontFamily: fonts.pheno
                }}>Pending Competition</Text>
                <Text style={{
                    color: colors.white,
                    fontSize: 13,
                    fontFamily: fonts.pre
                }}>See all</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.latest}
                keyExtractor={(item, index) => 'E' + index}
                renderItem={({ item }) => (
                    <View style={{ borderRadius: 10, margin: 10, flexDirection: 'row', backgroundColor: colors.white }}>
                        <Image
                            source={images.imagine}
                            style={{
                                width: 150, height: 130, resizeMode: 'cover',
                                borderTopLeftRadius: 10, borderBottomLeftRadius: 10
                            }}
                        />
                        <View style={{ margin: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: fonts.pbo
                                }}>Competition Name</Text>

                            </View>
                            <Text style={{
                                color: colors.blue,
                                fontSize: 8,
                                marginTop: 10,
                                fontFamily: fonts.pbo
                            }}>Art & Craft, 500Rs</Text>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fonts.pmed,
                                width: Dimensions.get('window').width - 200
                            }}>Lorem Ipsum is a dummy content that is placed instead Of text in the document.</Text>

                        </View>
                    </View>
                )}
            />

        </View>
    )
    render() {
        return (
            <ImageBackground
                source={images.bg}
                style={{ flex: 1 }}
            >
                <ScrollView style={{ flex: 1 }}>
                    {this.renderSearch()}
                    {this.renderLatest()}
                    {this.renderPendingSubmission()}
                </ScrollView>
            </ImageBackground>)
    }

}

const styles = StyleSheet.create({
    triangleCorner: {
        width: 0,
        height: 0,
        // position: 'absolute',
        // bottom: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 100,
        borderTopWidth: 100,
        borderRightColor: "transparent",
        borderTopColor: colors.yellow,
    },
    triangleCornerBottomLeft: {
        transform: [{ rotate: "270deg" }],
    },
    welcom: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.hel
    },
    welcom2: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.bold
    },
})



export default Participate
