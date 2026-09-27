import { RowsPhotoAlbum } from "react-photo-album";
import { Lightbox } from "yet-another-react-lightbox";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import { photos } from "./GalleryData.js";
import { useState } from "react";

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <h1 className="text-center m-5">Gallery</h1>

      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
        
      />

      <div className="lightbox mb-5">
        <Lightbox
          index={index}
          slides={photos}
          open={index >= 0}
          close={() => setIndex(-1)}
         
        />
      </div>
    </>
  );
};

export default Gallery;