import * as React from 'react';
import { Button, Text } from 'react-native';

// Authentication
import * as AppleAuthentication from 'expo-apple-authentication';
import * as GoogleSignIn from 'expo-google-sign-in';

// Config
import { authConfig } from '~/config/auth';

import { Container } from "./styles";

interface User {
  name: string;
  email: string;
}

export const CoreApp = () => {
  const [user, setUser] = React.useState({});
  return (
    <Container>
      <Button
        title="Entrar com Google"
        onPress={() => {
        }}
      />
      
      <Button
        title="Entrar com Apple"
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            // signed in
            console.log("credential", credential);

          } catch (e) {
            console.log("error", e);
          }
        }}
      />
    </Container>
  );
}
