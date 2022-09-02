import { View } from 'react-native';
import React from 'react';
import { Buttons, PageWrapper, Texts } from '@src/core/components';
import { styles } from './styles';
import { BaseTheme } from '@src/core/themes';
import { useHomeController } from '../controller';

export const Home: React.FC = () => {
  const {handleController} = useHomeController();
  return (
    <PageWrapper theme={BaseTheme}>
      <View style={styles(BaseTheme).container}>
        <Texts.Title theme={BaseTheme} alignCenter>{`Welcome to the\nTrivia Challenge`}</Texts.Title>
        <Texts.Body theme={BaseTheme} alignCenter>{`You will be presented\nwith 10 True or False\nquestions.`}</Texts.Body>
        <Texts.Body theme={BaseTheme} alignCenter>{`Can you score 100%?`}</Texts.Body>
        <Buttons.Link theme={BaseTheme} onPress={handleController.navigateToQuestion} alignCenter>BEGIN</Buttons.Link>
      </View>
    </PageWrapper>
  );
};
