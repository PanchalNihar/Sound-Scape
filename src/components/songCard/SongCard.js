import React from 'react'
import "./songcard.css"
import AlbumImage from "./AlbumImage"
import AlbumInfo from "./AlbumInfo"
function SongCard({album}) {
  return (
    <div className='song-card-body flex'>
      <AlbumImage url={album?.images[0]?.url}/>
      <AlbumInfo album={album }/>
    </div >
  )
}

export default SongCard