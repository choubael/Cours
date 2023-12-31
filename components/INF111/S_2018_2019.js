import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Box, Center, HStack, Heading, ScrollView, Text, useColorMode } from 'native-base'
import { COLOR_THEME, DARK, WHITE, ligne, space, theme_ct_white, theme_white_dark } from '../../assets/Data/Couleurs&Cte'
import { Ionicons } from '@expo/vector-icons'
import Exam_title from '../../components/Elements/Exam_title'
import Exo from '../../components/Elements/Exo'
import Question from '../../components/Elements/Question'

const S_2018_2019 = () => {
    const theme_white_dark = useColorMode().colorMode === 'light' ? WHITE : DARK;
    const theme_ct_white = useColorMode().colorMode === 'light' ? COLOR_THEME : WHITE;
  return (
    <SafeAreaView style={{flex:1,backgroundColor:theme_white_dark,paddingHorizontal:10}}>
        <ScrollView flex={1}>
            <Exam_title examen={"EXAMEN 2018-2019"} prof={"Dr NOUMSI"} duree={"2h"} />
            <Exo num={1} pts={12}/>
            <Text>Une date est une donnée qui spécifie un jour, un mois et une année donnés.</Text>
            <Question 
            num={1}
            question={"Créer un nouveau type de données DATE pour gérer les dates."} 
            reponse={<Text>
            Définir le type DATE{ligne}
            {space}jour: Entier{ligne}
            {space}mois: Entier{ligne}
            {space}année: Entier{ligne}
            Fin Définir
            </Text>} 
            />
            <Question
            num={2}
            question={"Ecrire une fonction d'entête isBixestile (D : DATE): Booléen qui retourne VRAI si la date D est celle d'une année bissextile."}
            reponse={<Text>
                Fonction isBissextile(D: DATE): Booléen{ligne}
                Si (D.année est divisible par 4) alors{ligne}
                    {space}Si (D.année n'est pas divisible par 100) ou (D.année est divisible par 400) alors {ligne}
                        {space+space}Retourner VRAI {ligne}
                    {space}Fin Si {ligne}
                Fin Si {ligne}
                Retourner FAUX {ligne}
            Fin Fonction
            </Text>}
            />
            <Question
            num={3}
            question={"Ecrire un sous-programme qui reçoit deux dates D1 et D2, les dates de naissances de deux personnes P1 et P2, puis qui retourne 1 si P1 est plus âgé que P2 et 2 sinon."}
            reponse={<Text>
                Sous-programme comparaisonDate(D1: DATE, D2: DATE): Entier {ligne}
{"Si (D1.année < D2.année) ou ((D1.année = D2.année) et (D1.mois < D2.mois)) ou ((D1.année = D2.année) et (D1.mois = D2.mois) et (D1.jour < D2.jour)) alors\n"}                    
               {space}Retourner 1{ligne}
                Sinon{ligne}
                 {space}Retourner 2 {ligne}
                Fin Si{ligne}
            Fin Sous-programme

            </Text>}
            />
            <Question
            num={4}
            question={"Ecrire un sous-programme qui lit une date."}
            reponse={<Text>
                Sous-programme lireDate(): DATE {ligne}
                {space}Déclarer D: DATE {ligne}
                {space}Afficher "Entrez le jour, le mois et l'année (séparés par des espaces) : " {ligne}
                {space}Lire D.jour, D.mois, D.année {ligne}
                {space}Retourner D {ligne}
                Fin Sous-programme

            </Text>}
            />
            <Question
            num={5}
            question={"Ecrire un sous-programme qui affiche une date."}
            reponse={<Text>
                Sous-programme afficherDate(D: DATE){ligne}
                    {space}Afficher "Date: ", D.jour, "/", D.mois, "/", D.année{ligne}
                Fin Sous-programme
            </Text>}
            />
            <Question
            num={6}
            question={"Ecrire l'algorithme qui lit les dates de naissance de deux personnes A et B puis affiche :\n • La date du moins âgée.\n• Le nombre de date bissextile parmi les deux dates lues.\nNB : Votre algorithme va exploiter les sous programmes des questions précédentes éviter de perdre du temps, ne plus réécrire ces sous-programmes dans l'algorithme. Admettre leur existence et réaliser uniquement les appels nécessaires dans l’algorithme."}
            reponse={<Text>
                Algorithme principal{ligne}
                 // Lire les dates de naissance de deux personnes A et B{ligne}
                 {space}A {"<-"} lireDate(){ligne}
                 {space}B {"<-"} lireDate(){ligne}

                 {space}// Afficher la date du moins âgé{ligne}
                 {space}Si comparaisonDate(A, B) = 1 Alors{ligne}
                 {space}{space}afficherDate(A){ligne}
                 {space}Sinon{ligne}
                 {space}{space}afficherDate(B){ligne}
                 {space}Fin Si{ligne}

                 {space}// Afficher le nombre de dates bissextiles parmi les deux dates{ligne}
                 {space}NbBissextiles {"<-"} 0{ligne}
                 {space}Si isBissextile(A) Alors{ligne}
                 {space}{space}NbBissextiles {"<-"} NbBissextiles + 1{ligne}
                 {space}Fin Si{ligne}
                 {space}Si isBissextile(B) Alors{ligne}
                 {space}{space}NbBissextiles {"<-"} NbBissextiles + 1{ligne}
                 {space}Fin Si{ligne}

                 {space}Afficher "Nombre de dates bissextiles : ", NbBissextiles{ligne}
                Fin Algorithme

            </Text>}
            />
            <Exo num={2} pts={7}/>
            <Text>On veut manipuler un vecteur dont les éléments sont des entiers.</Text>
            <Question
            num={1}
            question={<Text>
                Créer un nouveau type VECTEUR pour gérer ces données.
                </Text>}
            reponse={<Text>
                Définir le type VECTEUR{ligne}
                    {space}taille: Entier{ligne}
                    {space}elements: Tableau d'Entiers{ligne}
                Fin Définir
            </Text>}
            />
            <Question
            num={2}
            question={<Text>
                Ecrire un sous-programme qui lit un vecteur.
            </Text>}
            reponse={<Text>
                Sous-programme lireVecteur(): VECTEUR{ligne}
                   {space}Déclarer V: VECTEUR{ligne}
                   {space}Afficher "Entrez la taille du vecteur : "{ligne}
                   {space}Lire V.taille{ligne}
                   {space}Pour i allant de 1 à V.taille faire{ligne}
                   {space}{space}Afficher "Entrez l'élément ", i, " : "{ligne}
                   {space}{space}Lire V.elements[i]{ligne}
                   {space}Fin Pour{ligne}
                   {space}Retourner V{ligne}
                Fin Sous-programme

            </Text>}
            />
            <Question
            num={3}
            question={<Text>Ecrire un sous-programme qui reçoit un vecteur V et un entier x puis qui retourne le nombre d'éléments de V plus grand que x.</Text>}
            reponse={<Text>
                Sous-programme countElementsGreaterThanX(V: VECTEUR, x: Entier): Entier{ligne}
                    {space}Déclarer count: Entier{ligne}
                    {space}count {"<-"} 0{ligne}
                    {space}Pour i allant de 1 à V.taille faire{ligne}
                    {space}{space}Si V.elements[i] {">"} x alors{ligne}
                    {space}{space}{space}count {"<-"} count + 1{ligne}
                    {space}{space}Fin Si{ligne}
                    {space}Fin Pour{ligne}
                    {space}Retourner count{ligne}
                Fin Sous-programme{ligne}{ligne}

                Algorithme principal{ligne}
                   {space}// Lire un vecteur{ligne}
                   {space}VecteurA {"<-"} lireVecteur(){ligne}

                   {space}// Afficher le vecteur{ligne}
                   {space}Afficher "Vecteur A : ", VecteurA.elements{ligne}

                   {space}// Demander à l'utilisateur une valeur x{ligne}
                   {space}Afficher "Entrez une valeur x : "{ligne}
                   {space}Lire x{ligne}

                   {space}// Compter le nombre d'éléments dans le vecteur supérieurs à x{ligne}
                   {space}NombreElementsSupX {"<-"} countElementsGreaterThanX(VecteurA, x){ligne}

                   {space}// Afficher le résultat{ligne}
                   {space}Afficher "Nombre d'éléments supérieurs à ", x, " : ", NombreElementsSupX{ligne}
                Fin Algorithme


            </Text>}
            />
            <Exo num={3} pts={10}/>
            <Question
            num={1}
            question={<Text>
                Écrire un programme C qui lit trois entiers a, b et c puis qui recherche dans l'intervalle [1 ..min (a, b, c)] le plus grand diviseur commun à ces trois entiers. Votre programme doit être clair et bien structuré.
            </Text>}
            reponse={<Text>
                {"#include <stdio.h>"}

                // Fonction pour calculer le PGCD {"(Plus Grand Diviseur Commun)"}
                {"int pgcd(int x, int y) {"}
                    {"while (y != 0) {"}
                        int temp = y;
                        y = x % y;
                        x = temp;
                   {" }"}
                    return x;
                {"}"}

                {"int main() {"}
                    // Déclaration des variables
                    {"int a, b, c;"}

                    // Lecture des trois entiers
                    printf{"("}"Entrez trois entiers a, b et c : "{")"};
                    scanf{"("}"%d %d %d", &a, &b, &c{")"};

                    // Calcul du PGCD des deux premiers entiers
                    int gcd_ab = pgcd{"("}a, b{")"};

                    // Calcul du PGCD des trois entiers
                    int gcd_abc = pgcd{"("}gcd_ab, c{")"};

                    // Affichage du résultat
                    printf{"("}"Le plus grand diviseur commun à %d, %d et %d est : %d\n", a, b, c, gcd_abc{")"};

                    return 0;
                {"}"}

            </Text>}
            />
        </ScrollView>
    </SafeAreaView>
  )
}

export default S_2018_2019