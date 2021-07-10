import { StyleSheet } from "react-native";
import { themes } from "../themes";

export const styles = StyleSheet.create({

    moviesContainer: {
        marginTop: 10,
    },

    moviesTitle: {
        marginHorizontal: 20,
        fontFamily: themes.fonts.bold,
        fontSize: 14,
        color: themes.colors.highlight,
    },

    moviesItemsContainer: {
        paddingVertical: 7,
    },

    moviesItem: {
        width: 105,
        height: 155,
        marginRight: 12,
    },

    moviesImage: {
        borderRadius: 5,
    },
 });