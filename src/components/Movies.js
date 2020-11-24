import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, ActivityIndicator, View, Dimensions} from 'react-native';
import constants from "../utils/constants";
import axios from "../utils/axios";
import Movie from "./Movie";

const {width, height} = Dimensions.get('screen');


const Movies = ({navigation, type}) => {

    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        axios.get(`movie/${type}?api_key=${constants.API_KEY}&language=es-ES`)
        .then((res) => {
            setMovies(res.data.results);
            setLoading(false);
        })
        .catch((err) => console.log(err));
    }, [setMovies]);

    return !loading ? (
        <FlatList
            style={styles.list}
            data={movies}
            renderItem={({item}) => <Movie movie={item} navigation={navigation} />}
            keyExtractor={(item) => `${item.id}`}
            contentInset={{ bottom: 0, top: 0 }}
         /> 
        ) : (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={constants.COLORS.PRIMARY} />
            </View>
        );
};

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 25,

    },
    container: {
        flex: 1,
        height,
        justifyContent: "flex-start",
      },
});

export default Movies;