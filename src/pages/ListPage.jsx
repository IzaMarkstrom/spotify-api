import React, { useEffect, useState } from 'react';
import Card from "../components/Card"


export default function ListPage() {
    const auth = `Bearer ${process.env.REACT_APP_TOKEN }`

const [albums, setAlbums] = useState([]);

useEffect(() => {
    getData()
        .then(data =>
            data.albums.items.forEach(item => setAlbums(added => [...added, item]))
        )
        .catch(error => console.log(error));
}, []);

async function getData() {
    const response = await fetch(
        'https://api.spotify.com/v1/browse/new-releases',
        {
            method: 'GET',
            headers: {
                Authorization: auth
            },
            'Content-Type': 'application/json'
        }
    );
    return await response.json();
}

  return (
        <main>
            <Card albums={albums}/>
        </main>
  )
}
