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

const Postpopupse = ({ setIsOpen }: any) => {
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
            <input type="file" />

            <p>Add Photo/Videos</p>
            <span>or drag and drop</span>
          </CloseUpload__inne>
          <UploadFile__cont>
            <div>
              <UploadFile__phone />
            </div>
            <div>Add photos and videos from your mobile device.</div>
            <AddButton>add</AddButton>
          </UploadFile__cont>
        </PopupHiddenContent>
      </PopupHiddenCont>
    </Popse>
  );
};

export default Postpopupse;
