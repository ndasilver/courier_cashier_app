
import { location } from 'ionicons/icons'
import { IonButton, IonGrid, IonRow, IonCol, IonIcon, IonBadge, IonImg } from '@ionic/react';
import React from 'react';
import './style.css';

interface ContainerProps { }

const searchResult: React.FC<ContainerProps> = () => {
    return (
        <div className="container1">
            <IonGrid>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <div className="icon_round">
                            <IonIcon icon={location} className="icon_enter_code"></IonIcon>
                        </div>
                        <h4>TRACKING SHIPMENT</h4>
                        <h4>Code:<span>12384734</span></h4>
                        <IonBadge color="secondary">Status - Arrived</IonBadge>

                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1" className="ion-text-left">
                        <IonImg src="./assets/img/ball.png" className="ball"></IonImg>
                    </IonCol>
                    <IonCol size="11">
                        <h5 className="result-h"> <b>Departure:</b> 29/11/2020, 11h00</h5>
                        <h5 className="result-h"> Location: Kigali</h5>
                        <h5 className="result-h"> Sender: Nishimwe Emma</h5>
                        <h5 className="result-h"> Phone: 0788708212</h5>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1" className="ion-text-left">
                        <IonImg src="./assets/img/ball.png" className="ball"></IonImg>
                    </IonCol>
                    <IonCol size="11">
                        <h5 className="result-h"> <b>Destination:</b></h5>
                        <h5 className="result-h"> Location: Musanze</h5>
                        <h5 className="result-h"> Sender: Sylver Ndayisaba</h5>
                        <h5 className="result-h"> Phone: 0788708212</h5>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1" className="ion-text-left">
                        <IonImg src="./assets/img/ball.png" className="ball"></IonImg>
                    </IonCol>
                    <IonCol size="11">
                        <h5 className="result-h"> <b>Info:</b></h5>
                        <h5 className="result-h"> Price: 1000 Frw</h5>
                        <h5 className="result-h"> Value: 1000 Frw</h5>
                        <h5 className="result-h"> Comment: Document</h5>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="padding_button">
                        <IonButton expand="block" routerLink='/cashierhome'>Add Delivery</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default searchResult;
