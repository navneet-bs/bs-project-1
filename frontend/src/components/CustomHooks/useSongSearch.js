import { useState } from "react";

export function useSongSearch(setSearchedSong= () => console.warn("Warning: No callback specified in `useSongSearch` hook!")) {
    const [songSearch, setSongSearch] = useState("");

    const fetchSongs = async (val) => {
      if (val.length === 0) {
        setSongSearch("");
        setSearchedSong([]);
        return;
      }
      fetch(`http://localhost:1337/api/songs?filters[songName][$containsi]=${val}&populate=*`)
        .then(res => res.json())
        .then(res => {
          setSearchedSong(res.data);
        });
    };

    return { songSearch, setSongSearch, fetchSongs };
  }