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
import { getInfo, storage } from "@/firebase/config";
import AuthGaurd from "@/HOC/AuthGuard";
import { doc, updateDoc } from "firebase/firestore";
import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
  uploadString,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

const Postpopupse = ({ setIsOpen, setImageList, userInfo }: any) => {
  const imageListRef = ref(storage, "posts/");
  const [imageUpload, setImageUpload] = useState<any>(null);
  const uploadImage = async (e: any) => {
    e.preventDefault();
    const imageRef = ref(storage, `posts/${userInfo?.uid}/image`);
    if (imageUpload) {
      await uploadString(imageRef, imageUpload, "data_url").then(async () => {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(getInfo, "post", userInfo?.uid), {
          image: downloadUrl,
        });
      });
    }
  };

  const addImageToPost = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent: any) => {
      setImageUpload(readerEvent.target.result);
    };
  };

  // useEffect(() => {
  //   listAll(imageListRef).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev: []) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, [imageListRef]);

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
            <input type="file" onChange={addImageToPost} />
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
