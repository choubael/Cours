import { useColorMode } from "native-base";
import { Dimensions, Platform } from "react-native";

//couleurs
export const COLOR_THEME="#0000FE";
export const INACTIVEBG="#9F9FFF";
export const WHITE="#FFFFFF";
export const DARK="#002851";
export const VuTextColor="#a1a1aa";
export const Inactive_bg = "#f5f5f4";

//constantes
export const { width, height } = Dimensions.get('window');
export const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
export const BACKDROP_HEIGHT = height * 0.75;
export const SPACING = 10;
export const SPACER_ITEM=(width-ITEM_SIZE)/2;
export const EXPLORE_MARGIN=height*0.60;
export const DecelerationRate = Platform.OS === 'ios' ? 0 : 0.93;
export const OBJTXT = ITEM_SIZE - 101;
export const ligne = "\n";
export const space = "    ";

//alertes
export const MAJnom = "une erreur est survenue lors de l'edition de votre nom d'utilisateur, Veuillez reéssayer!";
export const MAJimg = "une erreur est survenue lors de l'edition de votre photo de profil, Veuillez reéssayer!";

