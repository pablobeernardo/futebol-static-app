import { View , Text, StyleSheet, TouchableOpacity} from "react-native";
import { Image } from 'expo-image';



interface Props {
 team: any;
 navigation: any;
}

export default function ItemTeam(props: Props) {
    return (
      <TouchableOpacity onPress={() => {
        props.navigation.navigate('detail', props.team)
      }}>
        <View style={styles.items}>
              <Image style={styles.team_shield} source={props.team.item.team_shield_url} />
              <Text style={styles.team_position}>{props.team.item.position}</Text>
              <Text style={styles.team_name}>{props.team.item.team_name}</Text>
              <Text style={styles.team_points}>{props.team.item.team_points}</Text>
        </View>
      </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 8,
    height: 50

  },

  team_shield: {
    width: 30,
    height: 30
  },

  team_name: {
    fontSize: 15,
    width: 150,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  team_position: {
    width: 30,
    fontSize: 20,
  },

  team_points: {
    width: 30,
    fontSize: 15,
  }

});