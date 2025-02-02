const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      accept: 'application/json',
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODkyNDRhYjc2N2UxY2EyZjIyYWZkMzZjYjI0Njc4NSIsIm5iZiI6MTY5OTM4NDQ0OC40NzIsInN1YiI6IjY1NGE4YzgwNTMyYWNiMDBmZTM2MWU0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._j2TNoefJ1Z1ed3kC4HXhrZ4_jUPP7XIg2ldrRjKQC0",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((response) => response.json());
}