import { COLOR_THEME, DARK, ITEM_SIZE, SPACING, WHITE, height, width } from './Couleurs&Cte';

import { StyleSheet } from 'react-native'
import { useColorMode } from 'native-base';

export const styles = (colorMode, translateY) => StyleSheet.create({
    NavBar_Icon:{
        width:25,
        height:25,
        marginLeft:20,
    },
    edit_Icon:{
        position:'absolute',
        marginLeft:85,
        marginTop:100,
        backgroundColor:colorMode === 'light' ? WHITE : DARK,
        borderRadius:50,
        padding:5,
    },
    drawerItemStyle:{
        marginHorizontal:30,
        borderRadius:10,
        elevation:3,
    },
    DeconnexionItemStyle: {
        borderRadius:10,
        elevation:3,
        backgroundColor:"red",
        padding:10,
        marginHorizontal:20,
        alignItems:'center',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: colorMode === "light" ? 'black' : WHITE,
    },
    Explorer: {
        borderRadius:10,
        elevation:3,
        backgroundColor:COLOR_THEME,
        marginTop:10,
        padding:10,
        alignItems:'center',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: colorMode === "light" ? 'black' : WHITE,
    },
    drawerLabelStyle:{
        fontWeight:'bold'
    },
    dragIndicator:
    {
        bg:COLOR_THEME,
        height:2,
        borderRadius:50,
        width:20
    },
    Avatar:{
        backgroundColor:COLOR_THEME,
        borderColor:colorMode === "light" ? 'black' : WHITE,
        borderWidth:2
    },
    drawerstyle:{
        backgroundColor: 'transparent',
        width:width*0.85
    },
    UE_carte:{
        marginHorizontal: SPACING,
        padding: 10,
        alignItems: 'center',
        transform: [{ translateY }],
        backgroundColor: colorMode === "light" ? WHITE : DARK,
        borderRadius: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowColor: colorMode === "light" ? 'black' : WHITE,
        elevation:5
    },
    Header_Accueil:{
        alignItems:'center',
        alignSelf:'center',
        borderRadius:40,
        marginTop:height*0.05,
        padding:5,
        backgroundColor:colorMode === "light" ? WHITE : DARK,
        width:ITEM_SIZE,
        position:'absolute',
        justifyContent:'space-between',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowColor: colorMode === "light" ? 'black' : WHITE,
        elevation:5
    },
    UE_card_img:{
        width: 150,
        height: 150,
        resizeMode: 'cover',
    },
    notification_box:{
        borderColor:colorMode==="light" ? COLOR_THEME : WHITE,
        marginVertical:7,
        marginHorizontal:15,
        backgroundColor:colorMode==="light" ? WHITE : DARK,
        padding:20,
        borderRadius:20,
        elevation:5,
        shadowColor:colorMode === 'light' ? 'black' : WHITE, 
        shadowOffset:{width:0, height:0} ,
        shadowOpacity:0.2,
        shadowRadius:4
    },
    notification_del:{
        backgroundColor: 'red',
        justifyContent: 'center', 
        alignItems: 'center',
        width:80, 
        flex:1,
        borderRadius:20,
        marginRight:15,
        marginVertical:7,
    },
    ProfileTextInput:{
        shadowColor:colorMode === 'light' ? 'black' : WHITE, 
        shadowOffset:{width:0, height:0} ,
        shadowOpacity:0.2,
        shadowRadius:4,
        borderRadius:10,
        backgroundColor: colorMode === 'light' ? WHITE : DARK,
        fontWeight:'bold',
        color:colorMode === 'light' ? 'black' : WHITE,
        padding:7,
        elevation:5,
        
    },
    Profileformcontrol:{
        shadowColor:colorMode === 'light' ? 'black' : WHITE, 
        shadowOffset:{width:0, height:0},
        shadowOpacity:0.2,
        shadowRadius:4,
        borderRadius:10,
        padding:20,
        elevation:5,
        backgroundColor: colorMode === 'light' ? WHITE : DARK,

    },
    abonnement:{
        shadowColor:colorMode === 'light' ? 'black' : WHITE, 
        shadowOffset:{width:0, height:0} ,
        shadowOpacity:0.2,
        shadowRadius:4,
        backgroundColor: colorMode === 'light' ? WHITE : DARK,
        elevation:5,
        width:width * 0.9,
        borderRadius:10,
        marginTop:20
    },
    container:{
        backgroundColor: colorMode === 'light' ? WHITE : DARK,
        flex:1
    },
    Contactbox:{
        shadowColor:colorMode === 'light' ? 'black' : WHITE, 
        shadowOffset:{width:0, height:0} ,
        shadowOpacity:0.2,
        shadowRadius:4,
        borderRadius:10,
        padding:20,
        elevation:5,
        backgroundColor:colorMode === 'light' ? WHITE : DARK, 

    },
    Question:{
        shadowColor:colorMode === 'light' ? 'black' : WHITE, 
        shadowOffset:{width:0, height:0},
        shadowOpacity:0.2,
        shadowRadius:4,
        elevation:5,
        padding:5,
        marginHorizontal:1,
        marginBottom:2,
        marginTop:10,
        borderRadius:10,
        backgroundColor:colorMode === 'light' ? WHITE : DARK, 
    },
    reponse:{
        padding:5,
        backgroundColor:COLOR_THEME, 
        borderRadius:10
    },
    
})