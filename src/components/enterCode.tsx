
import { location, scanCircleOutline } from 'ionicons/icons'
import { IonItem, IonInput, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import React from 'react';
import './style.css';

interface ContainerProps { }

const enterCode: React.FC<ContainerProps> = () => {
    return (
        <div className="container1">
            <IonGrid>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <div className="icon_round">
                            <IonIcon icon={location} className="icon_enter_code"></IonIcon>
                        </div>
                        <h4>TRACKING SHIPMENT</h4>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="10">
                        <IonItem>
                            <IonLabel position="floating">Courier Number</IonLabel>
                            <IonInput value='' color="light"></IonInput>
                        </IonItem>
                    </IonCol>
                    <IonCol size="2">
                        <IonIcon icon={scanCircleOutline} className="icon_input"></IonIcon>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="padding_button">
                        <IonButton expand="block" routerLink='/cashierhome'>Submit</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default enterCode;
