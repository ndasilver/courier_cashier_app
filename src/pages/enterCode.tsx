import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import React from 'react';
import EnterCode from '../components/enterCode';
import './Home.css';

const cashierHome: React.FC = () => {
    return (
        <IonPage>
            <IonToolbar>
                <IonTitle size="large">
                    {/* <IonIcon icon={chevronBack}></IonIcon> */}
                    <h5 className="ion-text-center ">Actions</h5>
                </IonTitle>
            </IonToolbar>
            <IonContent>
                <EnterCode />
            </IonContent>
        </IonPage>
    );
};

export default cashierHome;
