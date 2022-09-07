import { useHomeController } from "@src/modules/quiz/presenter/screens/home/controller";

const navigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn().mockImplementation(() => {return {navigate: jest.fn()}} ),
}));

describe('Home controller', () => {
  test('If it loaded, should returned navigationToQuestion function',() => {
    const {handleController} = useHomeController();
    const expected = {
        handleController: {
          navigateToQuestion: () => {}
        }
    }
    handleController.navigateToQuestion();
    expect(JSON.stringify(expected.handleController)).toEqual(JSON.stringify(handleController));
  })
})
