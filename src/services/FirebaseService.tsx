import firebase from 'react-native-firebase';
import { Image } from 'react-native-image-crop-picker';

export class FirebaseService {
  /* Upload image to Firebase Storage and return public URL to download it. */
  static uploadUserImage = async (image: string): Promise<string> => {
    const user = firebase.auth().currentUser!;
    const imageRef = firebase
      .storage()
      .ref('users')
      .child(user.uid);
    const snapshot = await imageRef.putFile(image);
    return snapshot.downloadURL as string;
  };

  static updateUserImage = async (image: string): Promise<void> => {
    const photoURL = await FirebaseService.uploadUserImage(image);
    return firebase.auth().currentUser!.updateProfile({ photoURL });
  };
}
