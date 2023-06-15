import { StyleSheet, View } from 'react-native';
import TeamEntity from '../../../entities/team-entity';
import { useEffect, useState } from 'react';
import TitleChampionship from '../title-championship';
import TableChampionship from '../table-championship';
import LegendTeams from '../legend-teams';



export default function HomePage({navigation}) {

  const [teams, setTeam] = useState<TeamEntity[]>([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer test_dd769753f45f74346dbf9e43181a45 ");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    let teamsPosition: TeamEntity[] = [];

    fetch("https://api.api-futebol.com.br/v1/campeonatos/10/tabela", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(dataJson => {
        dataJson.map((team) => {

          const dataTeam = {
            id: team['time']['time_id'],
            position: team['posicao'],
            team_shield_url: team['time']['escudo'],
            team_name: team['time']['nome_popular'],
            team_points: team['pontos'],
            team_games: team['jogos'],
            team_win: team['vitorias'],
            team_loose: team['derrotas'],
            team_pro: team['gols_pro'],
            team_contra: team['gols_contra'],
            team_saldo: team['saldo_gols'],
            team_aproveitamento: team['aproveitamento']
          };

          teamsPosition.push(dataTeam);
        });
        setTeam(teamsPosition);
        console.log(teamsPosition);
      })
      .catch(error => console.log('error', error));
  }, []);


  return (
    <View style={styles.container}>
      <TitleChampionship texto='Campeonato Brasileiro' />
      <LegendTeams texto='' texto1={'Posição'} texto2={'Clube'} texto3={'Pontos'} />
      <TableChampionship teams={teams} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 16,
    marginHorizontal: 16,
  },

});
