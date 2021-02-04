import React, { useContext } from "react";
import "./Profile.css";

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,

} from "@ionic/react";
import {
  settings,
  share,
  home,
  create,
  gameController,
} from "ionicons/icons";
import Sports from "./Sports";
import { AppContext } from "../../State";
import ButtonLink from "./ButtonLink";

const Profile: React.FC = () => {
  const { state } = useContext(AppContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <div className="home">
          <ButtonLink link="/app/home" text="" icon={home} />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="Content">
          <div className="Content__info">
            <div
              className="Content__ProfileImage"
              style={{
                backgroundImage: `url('${state.loggedUser.image}')`,
              }}
            ></div>
            <Sports sportsList={state.loggedUser.sports} />
            <h1 className="Content__name"> {state.user}</h1>
            <div className="Content__Buttons">
              <div>
                <ButtonLink link="/app/create" text="New" icon={gameController} />
                <ButtonLink link="/app/profile/update" text="Modify profile" icon={create} />
              </div>
              <div>
                <ButtonLink
                  link="/login"
                  text="Invitaciones"
                  icon={share}
                />
                <ButtonLink link="/login" text="Settings" icon={settings} />
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;