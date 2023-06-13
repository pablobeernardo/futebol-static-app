import { View , Text, StyleSheet} from "react-native";

interface Props {
    texto: string;
    texto1: string;
    texto2: string;
    texto3: string;
}

export default function LegendTeams(props: Props) {
    return (
        <View style={styles.legend}>
            <Text style={styles.title}>{props.texto}</Text>
            <Text style={styles.title}>{props.texto1}</Text>
            <Text style={styles.title}>{props.texto2}</Text>
            <Text style={styles.title}>{props.texto3}</Text>
        </View>
    )
}


const styles = StyleSheet.create({

legend: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginRight: 30,
    marginBottom: 10
    


  },

  title: {
    
    fontSize: 15,
    fontWeight: 'bold',
    
  }


})