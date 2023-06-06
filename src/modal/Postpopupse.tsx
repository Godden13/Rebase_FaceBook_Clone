/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { AddButton, ClosepopUp } from "@/Components/Atoms/Atoms";
import {
  UploadFile__phone,
  UploadIcon,
  Xmarker,
} from "@/Components/Atoms/IconAtoms";
import {
  CloseUpload,
  CloseUpload__inne,
  Popse,
  PopupHiddenContent,
  PostPage,
  UploadFile__cont,
} from "@/Components/Molecules";
import { PopupHiddenCont } from "@/Components/Organism";
import { storage } from "@/firebase/config";
import AuthGaurd from "@/HOC/AuthGuard";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useEffect } from "react";
import { v4 } from "uuid";

const Postpopupse = ({
  setIsOpen,
  setImageUpload,
  imageUpload,
  setImageList,
  setImgUrl,
  userInfo
}: any) => {
  const imageListRef = ref(storage, "posts/");
  const uploadImage = (e: any) => {
    e.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `posts/${userInfo?.uid}/${v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImgUrl(url);
        setImageList((prev: []) => [...prev, url]);
      });
      setIsOpen(false);
      console.log("Image uploaded");
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev: []) => [...prev, url]);
        });
      });
    });
  }, [imageListRef]);

  return (
    <Popse>
      <PopupHiddenCont>
        <PopupHiddenContent>
          <CloseUpload>
            <ClosepopUp onClick={() => setIsOpen(false)}>
              <Xmarker />
            </ClosepopUp>
          </CloseUpload>
          <CloseUpload__inne>
            <UploadIcon />
            <input
              type="file"
              onChange={(e) => {
                setImageUpload(e.target.value);
              }}
            />

            <p>Add Photo/Videos</p>
            <span>or drag and drop</span>
          </CloseUpload__inne>
          <UploadFile__cont>
            <div>
              <UploadFile__phone />
            </div>
            <div>Add photos and videos from your mobile device.</div>
            <AddButton onClick={uploadImage}>add</AddButton>
          </UploadFile__cont>
        </PopupHiddenContent>
      </PopupHiddenCont>
    </Popse>
  );
};

export default AuthGaurd(Postpopupse);
