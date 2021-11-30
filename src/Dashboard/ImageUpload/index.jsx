import { useEffect, useRef, useCallback } from "react";
import { useMutation } from '@apollo/client';
import {SEND_IMAGE} from "../../Graphql/Mutation"
import {useDropzone} from 'react-dropzone'
function ImageUpload ()
{
    // let imageUpload
    const [sendFile, {data, loading, error}] = useMutation(SEND_IMAGE)
    const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
        for ( let one of acceptedFiles )
        {
             console.log(one)
            sendFile( {
                variables: {
                    file: JSON.stringify(one)
                }
            })
        }
        // console.log(acceptedFiles)
    }, [] )
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    useEffect( () =>
    {
        console.log("data from backend",data)
    },[data])

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}
export default ImageUpload