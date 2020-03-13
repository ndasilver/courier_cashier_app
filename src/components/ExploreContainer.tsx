import { IonItem, IonInput, IonLabel, IonButton } from '@ionic/react';
import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <form>
        <IonItem>
          <IonLabel position="floating">Enter email</IonLabel>
          <IonInput value='' color="light"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Enter Password</IonLabel>
          <IonInput type="password" value='' color="light"></IonInput>
        </IonItem>
        <h6 className="ion-float-right forgot-password">Forgot password?</h6>
        <IonButton expand="block">Sign in</IonButton>
      </form>
    </div>
  );
};

export default ExploreContainer;
