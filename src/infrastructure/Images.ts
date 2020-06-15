import uuid from 'react-native-uuid';
import { getImagesStorage } from '../models/FirebaseRefProxy';

export const uploadImage = async (imageUri: string, fileName: string | undefined): Promise<string> => {
  const DEFAULT_EXTENSION = '.jpg';
  const fileExtension = fileName ? fileName.split('.').pop() : DEFAULT_EXTENSION;
  const uploadedFileName = `${uuid.v1()}.${fileExtension}`;

  await getImagesStorage()
    .child(uploadedFileName)
    .putFile(imageUri);
  return uploadedFileName;
};

export const loadImage = async (imageName: string): Promise<string> => {
  return getImagesStorage()
    .child(imageName)
    .getDownloadURL();
};
