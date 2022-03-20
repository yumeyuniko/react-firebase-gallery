import { CheckCircleOutline } from '@mui/icons-material';
import { Box, ImageListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import { v4 as uuid4 } from 'uuid';
import uploadFileProgress from '../../../firebase/uploadFileProgress';

const ProgressItem = ({file}) => {
  const [progress, setProgress] = useState(100);
  const [imageURL, setImageURL] = useState(null);
  const currentUser = {uid: 'userId'}
  useEffect(() => {
    const uploadImage = async () => {
      const imageName = uuid4() + '.' + file.name.split('.').pop()
      try {
        const url = await uploadFileProgress(
          file,
          `gallery/${currentUser.uid}`,
          imageName,
          setProgress
        )
        console.log(url)
        setImageURL(null)
      } catch (error) {
        alert(error.message)
        console.log(error)
      }
    }
    setImageURL(URL.createObjectURL(file));
    uploadImage()
  }, [file]);
  return (
    imageURL && <ImageListItem cols={1} rows={1} >
      <img
        src={imageURL}
        alt="gallery"
        loading="lazy"
      />
  
      <Box sx={backDrop} >
        {progress < 100 ? (
          <CircularProgressWithLabel value={progress} />
        ) : (
           <CheckCircleOutline
           sx={{ width: 60, height: 60, color: 'lightgreen' }}
         />
        )}
      </Box>

    </ImageListItem>
  );
};


export default ProgressItem


const backDrop = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0, .5)'
}
