"use client";
import {
  Dots,
  EditPhoto,
  EditProf,
  EditSmile,
  Suggesteddrop__friends,
} from "@/Components/Atoms/IconAtoms";
import Image from "next/image";
import MainUser from "../assets/images/persons/8.jpeg";
import MutualFriends from "../../../assets/images/persons/7.jpeg";
import ProfileFriendsTage from "../assets/images/proffriends.png"

import Styles from "../assets/styles/ProfileFirstcontainer.module.css";

const ProfileFirstcontainer = () => {
  return (
    <div className={Styles.firstcontainer}>
      <div className={Styles.first__containerWrapper}>
        <div className={Styles.background__Prof}>
          <div className={Styles.bottomdiv}>
            <div className={Styles.bottom___inner}>
              <span>
                <EditSmile /> <p className={Styles.spanp}>Create with avatar</p>
              </span>
              <span>
                <EditPhoto /> <p className={Styles.spanp}>Edit cover photo</p>
              </span>
            </div>
          </div>
        </div>
        <div className={Styles.change__profilesettings}>
          <div className={Styles.ProfSetting__firstcontainer}>
            <div className={Styles.profile__leftsetting}>
              <div className={Styles.profilpic__container}>
                <Image
                  src={MainUser}
                  alt="mainperson"
                  className={Styles.profileUserImg}
                />
              </div>
              <div className={Styles.pro__Name_friends}>
                <h1>Bata Humphrey</h1>
                <p>4k friends</p>
                <Image src={ProfileFriendsTage} alt="friendstags" />
              </div>
            </div>
            <div className={Styles.Profile__rightsetting}>
              <div className={Styles.addStoris}>
                <button type="submit" className={Styles.Pro__Addstoriesbtn}>
                  + Add story
                </button>
                <button type="submit" className={Styles.Pro__editprobtn}>
                  <EditProf /> Edit Profile story
                </button>
                <button type="submit" className={Styles.Pro__sugestedFriends}>
                  <Suggesteddrop__friends />
                </button>
              </div>
            </div>
          </div>
          <div className={Styles.prof__settingsecondcontainer}>
            <div className={Styles.secondsetting__left}>
              <div className={Styles.uniquediv}>Posts</div>
              <div className={Styles.about}>About</div>
              <div className={Styles.friends}>Friends</div>
              <div className={Styles.photos}>Photos</div>
              <div className={Styles.videos}>Videos</div>
              <div className={Styles.check}>Chec-ins</div>
              <div className={Styles.more}>More</div>
            </div>
            <div className="profsecondc__left">
              <div className={Styles.doty}>
                <p>...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFirstcontainer;
