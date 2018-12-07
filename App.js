/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, Modal, NativeModules, Platform} from "react-native";

type Props = {};

const ScatterTestModule = NativeModules.ScatterTestModule;

export default class App extends Component<Props> {
    constructor (props) {
        super(props);
        this.state = {
            modalText: "",
            isShowModal: false,
        };
    }

    showModal = str => {
        this.setState({
            modalText: str,
            isShowModal: true
        });
    };

    getIdentity = () => {
        const network = {
            blockchain:"eos",
            host:"localhost",
            port:8888,
            protocol:"http",
            chainId:""
        };
        const requiredFields = {accounts:[network]};
        ScatterTestModule.getIdentity(requiredFields)
            .then(res => this.showModal("getIdentity ==== " + JSON.stringify(res)))
            .catch(e => console.log(e));
    };

    authenticate = () => {
        const getRandom = () => Math.round(Math.random() * 8 + 1).toString();
        let randomString = "";
        for(let i = 0; i < 12; i++) randomString += getRandom();
        ScatterTestModule.authenticate(randomString)
            .then(res => this.showModal("authenticate ==== " + res))
            .catch(e => console.log(e));
    };

    forgetIdentity = () => {
        ScatterTestModule.forgetIdentity()
            .then(res => this.showModal("forgetIdentity ==== " + res))
            .catch(e => console.log(e));
    };

    suggestNetwork = () => {
        const network = {
            blockchain:"eos",
            host:"localhost",
            port:8888,
            protocol:"http",
            chainId:""
        };
        ScatterTestModule.suggestNetwork(network)
            .then(res => this.showModal("suggestNetwork ====" + res))
            .catch(e => console.log(e));
    };

    createTransaction = () => {};

    requestSignature = () => {};

    getArbitrarySignature = () => {
        const publicKey = "EOS7TxduYf3WAdkkK81xYFuUCWNSevxWtmkrWxinDiXCYi1rCBnxC"; // The key you want a signature for
        const data = "This should be able to be signed by anything";        // Anything, or a hash ( sha256 )
        const whatFor = "Testing";     // The reason you are requesting a signature from a user.
        const isHash = false;   // Only set to true if the `data` is a hash, as it requires a different signing method.
        const map = {publicKey, data, whatFor, isHash};
        ScatterTestModule.getArbitrarySignature(map)
            .then(res => this.showModal("getArbitrarySignature ====" + res))
            .catch(e => console.log(e));
    };

    requestTransfer = () => {
        const tokenDetails = {contract:"eosio.token", symbol:"EOS", memo:"", decimals:4};
        const network = {
            blockchain:"eos",
            chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
            host:"nodes.get-scatter.com",
            port:443,
            protocol:"https"
        };
        const to = "eosio";
        const amount = "0.0001";
        const map = {network, to, amount, tokenDetails};
        ScatterTestModule.requestTransfer(map)
            .then(res => this.showModal("requestTransfer ==== " + JSON.stringify(res)))
            .catch(e => console.log(e));
    };

    getPublicKey = () => {
        const blockchain = "eos";
        ScatterTestModule.getPublicKey(blockchain)
            .then(res => this.showModal("getPublicKey ====" + res))
            .catch(e => console.log(e));
    };

    linkAccount = () => {
        const account = {
            name:"cannontest11",
            authority:"active",
            publicKey: "EOS7TxduYf3WAdkkK81xYFuUCWNSevxWtmkrWxinDiXCYi1rCBnxC"
        };

        const network = {
            blockchain:"eos",
            host:"localhost",
            port:8888,
            protocol:"http",
            chainId:""
        };

        const map = {account, network};

        ScatterTestModule.linkAccount(map)
            .then(res => this.showModal("linkAccount ====" + res))
            .catch(e => console.log(e));
    };

    hasAccountFor = () => {
        const network = {
            blockchain:"eos",
            host:"localhost",
            port:8888,
            protocol:"http",
            chainId:""
        };
        ScatterTestModule.hasAccountFor(network)
            .then(res => this.showModal("hasAccountFor ====" + res))
            .catch(e => console.log(e));
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.BodyBox}>
                    <TouchableOpacity style={styles.ButtonBox} onPress={this.getIdentity}>
                        <Text style={styles.ButtonName}>getIdentity</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonBox} onPress={this.authenticate}>
                        <Text style={styles.ButtonName}>authenticate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonBox} onPress={this.forgetIdentity}>
                        <Text style={styles.ButtonName}>forgetIdentity</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonBox} onPress={this.suggestNetwork}>
                        <Text style={styles.ButtonName}>suggestNetwork</Text>
                    </TouchableOpacity>
                    {/*<TouchableOpacity style={styles.ButtonBox} onPress={this.createTransaction}>*/}
                    {/*<Text style={styles.ButtonName}>createTransaction</Text>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity style={styles.ButtonBox} onPress={this.requestSignature}>*/}
                    {/*<Text style={styles.ButtonName}>requestSignature</Text>*/}
                    {/*</TouchableOpacity>*/}
                    <TouchableOpacity style={styles.ButtonBox} onPress={this.getArbitrarySignature}>
                        <Text style={styles.ButtonName}>getArbitrarySignature</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonBox} onPress={this.requestTransfer}>
                        <Text style={styles.ButtonName}>requestTransfer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonBox} onPress={this.getPublicKey}>
                        <Text style={styles.ButtonName}>getPublicKey</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonBox} onPress={this.linkAccount}>
                        <Text style={styles.ButtonName}>linkAccount</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonBox} onPress={this.hasAccountFor}>
                        <Text style={styles.ButtonName}>hasAccountFor</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    transparent={true}
                    visible={this.state.isShowModal}
                    onRequestClose={() => {}}
                >
                    <View style={styles.ModalBox}>
                        <View style={styles.ModalBodyBox}>
                            <Text style={styles.ModalText}>{this.state.modalText}</Text>
                            <TouchableOpacity style={styles.ButtonBox} onPress={() => this.setState({isShowModal: false})}>
                                <Text style={styles.ButtonName}>知道了</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    BodyBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80,
        paddingBottom: 80,
    },
    ButtonBox: {
        height: 50,
        width: 200,
        marginTop: 25,
        backgroundColor: "#1890ff",
        borderColor: "#1890ff",
        borderWidth: 1,
        borderRadius: 3,
    },
    ButtonName: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 50,
        textAlign: "center",
    },
    ModalBox: {
        flexBasis: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, .2)",
    },
    ModalBodyBox: {
        position: "relative",
        width: "90%",
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 26,
        paddingLeft: 26,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 4,
    },
    ModalText: {
        fontSize: 18,
        lineHeight: 28,
        textAlign: "center",
    }
});
