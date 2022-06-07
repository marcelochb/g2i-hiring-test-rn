import { useNavigation } from "@react-navigation/native"

export const useHomeController = () => {
  const navigation = useNavigation();
  const navigateToQuestion = (screenName:any) => navigation.navigate(screenName);

  return {
    handleController: {
      navigateToQuestion
    }
  }
}
