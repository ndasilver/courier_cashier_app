import { camera, trash, close, chevronBack } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>
          <IonIcon icon={chevronBack}></IonIcon>
        </IonTitle>
        <IonTitle>Sign in to</IonTitle>
        <IonTitle> continue</IonTitle>
      </IonToolbar>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
