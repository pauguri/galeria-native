import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CrossIcon from './CrossIcon';
import CheckIcon from './CheckIcon';

export default function Notice({ type, message, label }: { type: "success" | "error", message: string, label?: string }) {
    return (
        <View style={[styles.container, type == "error" ? styles.errorContainer : styles.successContainer]}>
            {type == "error" ? <CrossIcon color="#C33C3C" /> : <CheckIcon color='#6BC33C' />}
            <Text style={[styles.text, styles.message, type == "error" ? styles.errorMessage : styles.successMessage]}>{message}</Text>
            {label && <Text style={[styles.text, type == "error" ? styles.errorLabel : styles.successLabel]}>{label}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingVertical: 28,
        paddingHorizontal: 32,
        borderWidth: 3,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 28,
    },
    successContainer: {
        backgroundColor: '#F2FAEE',
        borderColor: '#BBE3A6'
    },
    errorContainer: {
        backgroundColor: '#FAEEEE',
        borderColor: '#E3A6A6',
    },
    text: {
        fontSize: 22,
        fontWeight: '400'
    },
    message: {
        color: '#405458',
        paddingLeft: 28,
        borderLeftWidth: 2,
        borderLeftColor: '#BBE3A6'
    },
    successMessage: {
        borderLeftColor: '#BBE3A6',
    },
    errorMessage: {
        borderLeftColor: '#E3A6A6',
    },
    successLabel: {
        color: '#6BC33C'
    },
    errorLabel: {
        color: '#C33C3C'
    }
});