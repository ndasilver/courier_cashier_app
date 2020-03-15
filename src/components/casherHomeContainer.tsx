
import { location, paperPlane } from 'ionicons/icons'
import { IonItem, IonInput, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonIcon, IonNav, IonRouterLink, IonContent } from '@ionic/react';
import React from 'react';
import './casherHomeContainer.css';

interface ContainerProps { }

const cashierHomeContainer: React.FC<ContainerProps> = () => {
    return (
        <div className="container">
            <IonGrid>
                <IonRow>
                    <IonCol className="">
                        <IonRouterLink routerLink="/entercode" routerDirection="forward">
                            <div className="homeButton ion-text-center button1">
                                <IonIcon icon={location}></IonIcon>
                                <h5 className="iconTitle">Track Courier</h5>
                            </div>
                        </IonRouterLink>
                    </IonCol>
                    <IonCol>
                        <div className='homeButton ion-text-center'>
                            <IonIcon icon={paperPlane}></IonIcon>
                            <h5 className='iconTitle'>Send Courier</h5>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default cashierHomeContainer;
