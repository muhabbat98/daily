import { gql} from '@apollo/client';

export const SEND_IMAGE = gql`
  mutation UploadImage($file:Upload) {
    imageUpload(file:$file){
        filename
    }
  }
`;