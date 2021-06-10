import { 
    Text, 
    View, 
    FlatList, 
    TouchableOpacity, 
    SafeAreaView 
} from 'react-native';

const Favorite = ({ choices, reset }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ marginTop: 50 }}>
          <FlatList
            data={choices}
            renderItem={({ item }) => <Text style={styles.btnStyle} >{item}</Text>}
            keyExtractor={({item, index}) => index}
          />
          <TouchableOpacity onPress={reset} >
            <Text style={styles.btnStylReset}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  export default Favorite;