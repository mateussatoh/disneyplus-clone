import { StyleSheet } from "react-native";
import { themes } from "../../themes";

export const styles = StyleSheet.create({

    categorias: {
        marginTop: 20,
        marginBottom: 10,
    },

    categoriasItem: {
        width: 63,
        height: 58,
        marginRight: 14,
    },
    
    categoriasImage: {
        borderRadius: 10,
        borderWidth: .5,
        borderColor: themes.colors.highlight,
    },
});