import { camera, trash, close, chevronBack } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import React from 'react';
import CasherHome from '../components/casherHomeContainer';
import './Home.css';

const cashierHome: React.FC = () => {
    return (
        <IonPage>
            <IonToolbar>
                <IonTitle>
                    {/* <IonIcon icon={chevronBack}></IonIcon> */}
                    <h5 className="ion-text-center ">Actions</h5>
                </IonTitle>
            </IonToolbar>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <CasherHome />
            </IonContent>
        </IonPage>
    );
};

export default cashierHome;
