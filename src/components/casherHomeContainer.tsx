
import { location, paperPlane } from 'ionicons/icons'
import { IonItem, IonInput, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import React from 'react';
import './casherHomeContainer.css';

interface ContainerProps { }

const cashierHomeContainer: React.FC<ContainerProps> = () => {
    return (
        <div className="container">
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <div className="homeButton ion-text-center">
                            <IonIcon icon={location}></IonIcon>
                            <h5 className="iconTitle">Track Courier</h5>
                        </div>
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
