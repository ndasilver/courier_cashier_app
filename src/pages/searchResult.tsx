import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ResultContent from '../components/searchResult';

const searchResult: React.FC = () => {
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
                <ResultContent />
            </IonContent>
        </IonPage>
    );
};

export default searchResult;
