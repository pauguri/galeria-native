import { View, Text } from 'react-native'
import React from 'react'

export default function TitledSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <View style={{ paddingVertical: 24 }}>
            <Text style={{ color: "#fff", paddingBottom: 8 }}>{title}</Text>
            <View style={{ flexDirection: 'row', gap: 4 }}>
                {children}
            </View>
        </View>
    )
}