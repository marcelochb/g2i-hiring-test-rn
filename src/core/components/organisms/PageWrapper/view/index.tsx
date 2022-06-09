import { View, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { StatusBarCustom, StatusBarWrapper, Texts } from '@src/core/components/atoms';
import { ModelOfPageWrapper } from '../model';
import { styles } from './sytles';
import ImageError from '@src/assets/images/Error.svg';
import { Buttons } from '@src/core/components/molecules';
import { useNavigation } from '@react-navigation/native';

export const PageWrapper: React.FC<ModelOfPageWrapper> = ({
  children,
  theme,
  loading = false,
  empty = false,
  error = false,
}) => {
  const navigation = useNavigation();
  if (loading) {
    return (
      <>
        <StatusBarWrapper theme={theme}/>
        <View style={[styles(theme).container, styles(theme).loading]}>
          <StatusBarCustom theme={theme}/>
          <ActivityIndicator />
        </View>
      </>
    );
  }
  if (error) {
    return (
      <>
        <StatusBarWrapper theme={theme}/>
        <View style={[styles(theme).container, styles(theme).loading]}>
          <StatusBarCustom theme={theme}/>
          <Texts.Body style={styles(theme).error} theme={theme} alignCenter>Oops, your connection seems off...</Texts.Body>
          <ImageError />
          <Buttons.Link style={styles(theme).button} theme={theme} alignCenter onPress={() => navigation.goBack()}>BACK</Buttons.Link>
        </View>
      </>
    );
  }
  if (empty) {
    return (
      <>
        <StatusBarWrapper theme={theme}/>
        <View style={[styles(theme).container, styles(theme).loading]}>
          <StatusBarCustom theme={theme}/>
          <Texts.Body style={styles(theme).error} theme={theme} alignCenter>No result found.</Texts.Body>
          <ImageError />
          <Buttons.Link style={styles(theme).button} theme={theme} alignCenter onPress={() => navigation.goBack()}>BACK</Buttons.Link>
        </View>
      </>
    );
  }
  return (
    <>
      <StatusBarWrapper theme={theme}/>
      <SafeAreaView style={styles(theme).container}>
        <StatusBarCustom theme={theme}/>
        <View style={styles(theme).content}>
          {children}
        </View>
      </SafeAreaView>
    </>
  )
}
