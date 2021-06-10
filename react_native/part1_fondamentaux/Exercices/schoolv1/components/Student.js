import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import styles from '../Styles';

const Student = ({ navigation, id, name, attendance, lessons, average, mention, url }) => {

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Abscence', { id : id })}
        >
            <View
                style={[
                    styles.item,
                    { flex: 1, flexDirection: 'row' },
                    { backgroundColor: attendance > 5 ? '#6e3b6e' : '#f9c2ff' }
                ]}
            >
                <View style={{ width: 110 }}>
                    <Image
                        source={{ uri:  url }}
                        style={{ width: 100, height: 100, padding: 5 }}
                    />
                </View>
                <View style={{ width: 200 }}>
                    <Text>{name}</Text>
                    <Text style={{ padding: 2, marginBottom: 2 }} >Nombre d'abscence(s) {attendance}</Text>
                    <Text style={{ padding: 2, marginBottom: 2 }} >Nombre de cours {lessons ? lessons.length : 0}</Text>
                    <Text style={{ padding: 2, marginBottom: 2 }} >Moyenne {average}</Text>
                    <Text>Mention : {mention}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Student;