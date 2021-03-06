import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAsyncStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState();
  
    async function getStoredItem(key, initialValue) {
      try {
        // Get from local storage by key
        const item = await AsyncStorage.getItem(key);
        // Parse stored json or if none return initialValue
        const value = item ? JSON.parse(item) : initialValue;
        setStoredValue(value);
      } catch (error) {
        // If error also return initialValue
        console.log(error);
      }
    }
  
    useEffect(() => {

      getStoredItem(key, initialValue);
    }, [key, initialValue]);
  
    const setValue = async (value) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
  
    return [storedValue, setValue];
  }