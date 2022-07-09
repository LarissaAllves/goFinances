import React from 'react';
import {Feather} from '@expo/vector-icons';

import { Container, 
  Header, 
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
} from './styles';

export function Dashboard(){
  return (
    <Container>
      <Header>
        <UserWrapper>
        <UserInfo>
          <Photo source={{uri: 'https://avatars.githubusercontent.com/u/82070562?v=4'}}/>
          <User>
            <UserGretting>Olá, </UserGretting>
            <UserName>Larissa</UserName>
          </User>
        </UserInfo>
        <Feather name="power" />
        </UserWrapper>
        
      </Header>
    </Container>
  )
}

