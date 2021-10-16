import React from 'react';
import * as Google from 'expo-auth-session/providers/google';

// Config
import { authConfig } from '~/config/auth';

import { Container, Text } from './styles';

export const Button: React.FC = ({children}) => {
  const [response, promptAsync] = Google.useAuthRequest({
    iosClientId: authConfig.GOOGLE_IOS_CLIENT_ID,
    androidClientId: authConfig.GOOGLE_ANDROID_CLIENT_ID,
  });

  React.useEffect(() => {
    if (response?. === 'success') {
      alert(JSON.stringify(response));
    }
  }, [response]);

  const handleButton = async () => {
    promptAsync();
  }

  return (
    <Container onPress={handleButton}>
      <Text>
        {children}
      </Text>
    </Container>
  );
}