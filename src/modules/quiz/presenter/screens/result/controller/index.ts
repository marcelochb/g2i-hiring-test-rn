import { StackActions, useNavigation } from "@react-navigation/native";
import { GlobalState } from "@src/core/config/store/model"
import { useSelector } from "react-redux"

export const useResultController = () => {
  const state = useSelector((state:GlobalState) => state.quizReducer);
  const navigation = useNavigation();
  const goHome = () => navigation.dispatch(StackActions.popToTop());
  return {
    getController: {
      quiz: state
    },
    handlerContrller: {
      goHome
    }
  }
}
