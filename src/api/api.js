import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';

export default function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [movie, setMovie] = useState([]);

  const getMovies = () => {
    return fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        setTitle(json.title);
        setDescription(json.description);
        setMovie(json.movie);
        return json.movie;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMoviesAxios = () => {
    axios
      .get('https://reactnative.dev/movies.json')
      .then(function (response) {
        setTitle(response.data.title);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const postAxios = () => {
    axios
      .post('https://reqres.in/api/users', {
        name: 'Fajar',
        job: 'Developer',
      })
      .then(function (response) {
        console.log(response.status);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    // getMovies();
    // getMoviesAxios();
    postAxios();
  }, []);

  return (
    <View>
      <Text>Title : {title}</Text>
      <Text>Description : {description}</Text>
      <FlatList data={movie} renderItem />
    </View>
  );
}
