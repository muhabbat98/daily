import { useEffect, useRef, useCallback, useState } from "react";
import { useMutation } from '@apollo/client';
import {SEND_IMAGE} from "../../Graphql/Mutation"
import {useDropzone} from 'react-dropzone'
function ImageUpload ()
{
    // let imageUpload
    const [image, setImage] = useState()
    const [ sendFile, { data, loading, error } ] = useMutation( SEND_IMAGE, {
        variables: {
            file: image
        }
    } )
    
    const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
        for ( let file of acceptedFiles ){
            let binFile
            const reader = new FileReader()
            // reader.onabort = () => console.log('file reading was aborted')
            // reader.onerror = () => console.log('file reading has failed')
            // reader.onload = () => {
            // // Do whatever you want with the file contents
            //     const binaryStr = reader.result
            //     binFile = binaryStr
            //     console.log(binaryStr)
            // }
            
            console.log( "File", file )
            setImage(file)
            sendFile()
        }
        // console.log(acceptedFiles)
    }, [] )
//     function getBase64(file) {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = function () {
//             console.log( reader.result );
//             return reader.result
//         };
//         reader.onerror = function (error) {
//             console.log('Error: ', error);
//         };
// }
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    console.log(error)
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