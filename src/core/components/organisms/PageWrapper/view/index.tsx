import { View, Text, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { ModelOfPageWrapper } from '../model'
import { StatusBarCustom, StatusBarWrapper } from '@src/core/components/atoms';
import { styles } from './sytles';

export const PageWrapper: React.FC<ModelOfPageWrapper> = ({
  children,
  theme,
  isScrollList = false,
  loading = false,
}) => {
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
  if (isScrollList) return (
    <>
      <StatusBarWrapper theme={theme} />
      <SafeAreaView style={styles(theme).container}>
        <StatusBarCustom theme={theme} />
        <ScrollView
          style={styles(theme).scrollView}
          keyboardShouldPersistTaps="handled"
        >
          <SafeAreaView>

            {children}
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    </>

  )
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
