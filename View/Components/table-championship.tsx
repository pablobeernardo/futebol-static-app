import { FlatList, View , StyleSheet } from "react-native";
import ItemTeam from "./item-team";

interface Props{
 teams: any
 navigation: any;
}

export default function TableChampionship(props:Props){
    return(
        <View style={styles.table}>
        <FlatList data={props.teams}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(team) =>
            <ItemTeam team={team} navigation={props.navigation} />
          }
        />
      </View>
    )
}

const styles = StyleSheet.create({

    table: {
      flex: 1,
      width: '100%',
  
    },
  
  });