import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
} from 'react-navigation-header-buttons';

const IoniconsHeaderButton = (props) => (

    <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color="blue" />
);

export default IoniconsHeaderButton;