import { useEffect, useCallback, useState } from "react";
import { useMutation } from '@apollo/client';
import {DriveFolderUpload} from '@mui/icons-material';

import {SEND_IMAGE} from "../../Graphql/Mutation"
import {useDropzone} from 'react-dropzone'
import {  Loader } from "../../style";
import ErrorItem from "../../Components/MainAdd/Errors";
function ImageUpload ({imageId})
{
    const [image, setImage] = useState()
    
    const [ sendFile, { data, loading, error } ] = useMutation( SEND_IMAGE, {
        variables: {
            file: image
        }
    } )
    const [errorStatus, setErrorStatus] =useState(false)
    useEffect( () =>
    {
       
        if ( data && data.imageUpload ){
            imageId(parseInt(data.imageUpload.id))
        }
      
    }, [ data,imageId ] )
        
    useEffect( () =>{
        if(error)setErrorStatus(true)
    },[error])
    const onDrop = useCallback(acceptedFiles => {
    
        for ( let file of acceptedFiles )
        {
            setImage(file)
            sendFile()
        }
    }, [sendFile] )
    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/*',maxSize:1000000})
 
    return (<>
        {
            loading ? <Loader/>:<></>
        }
        <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                <p style={ { display: 'flex', alignItems: "center" } }>image upload <DriveFolderUpload style={ {marginLeft:"16px"} }/></p>
                }
        </div>
        {
            error ? <ErrorItem errorStatus={ {errorStatus, setErrorStatus, message:error.message} } /> :<></>
        }
        </>
    )
}
export default ImageUpload