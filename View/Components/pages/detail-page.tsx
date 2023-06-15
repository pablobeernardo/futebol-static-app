import { View , Text, StyleSheet } from "react-native";
import { Image } from 'expo-image';



export default function DetailPage({route, navigation}){

    const{ id, team_name, team_points, position,team_shield_url, 
        team_games, team_loose, team_win,team_pro, team_contra,team_saldo,team_aproveitamento} = route.params.item;

    return(
        <View style={styles.team_name}>
            
            <Image style={styles.team_shield} source={team_shield_url}/>
            <Text style={styles.text_name}>{team_name}</Text>
            <Text style={styles.text_info}>{team_points} Pts</Text>
            <Text style={styles.text_info}>{position}° Lugar</Text>
            <Text style={styles.text_info}>{team_games} Jogos</Text>
            <Text style={styles.text_info}>{team_win} Vitórias</Text>
            <Text style={styles.text_info}>{team_loose} Derrotas</Text>
            <Text style={styles.text_info}>{team_pro} Gols Marcados</Text>
            <Text style={styles.text_info}>{team_contra} Gols Sofridos</Text>
            <Text style={styles.text_info}>{team_saldo} SG</Text>
            <Text style={styles.text_info}>{team_aproveitamento}% de aproveitamento</Text>

        </View>
    )
}


const styles = StyleSheet.create({

team_name: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

team_shield: {
    marginTop:20,
    width:'80%',
    height: 260
  },

text_name:{
    fontSize: 25,
    fontWeight:'700',
    marginTop: 15,

},  

text_info:{
    fontSize:15,
    fontWeight: '500',
    marginTop:5,

    
}


})