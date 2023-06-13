import { View , Text, StyleSheet} from "react-native";

interface Props {
    texto: string;
}

export default function TitleChampionship(props: Props) {
    return (
        <View>
            <Text style={styles.title}>{props.texto}</Text>
        </View>
    )
}


const styles = StyleSheet.create({

title: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 30,
    marginBottom: 16,


  },

})