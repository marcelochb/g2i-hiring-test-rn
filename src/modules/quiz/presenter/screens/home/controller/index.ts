import { useNavigation } from "@react-navigation/native"
import { navigationContants } from "@src/core/constants";

export const useHomeController = () => {
  const navigation = useNavigation();
  const navigateToQuestion = () => navigation.navigate(navigationContants.QUESTION as never);

  return {
    handleController: {
      navigateToQuestion
    }
  }
}
