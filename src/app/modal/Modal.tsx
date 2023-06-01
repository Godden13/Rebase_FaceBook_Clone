/* eslint-disable react/no-unescaped-entities */
"use client";
import { Bg, Main } from "@/Components/Organism";
import { FlexRow, Genders, RightForm2 } from "@/Components/Molecules";


import { Field, Heading2p,
  Href,
  Input1,
  Input2,
  Line,
  Link2,
  Minor,
  Ptag,
  Ptag2,
  Round,
  Row,
  Select,
  Select2,
  SignUpButton,
  SmallP2,
  Xmark, } from "@/Components/Atoms/Atoms";



import { useState } from "react";
import { getInfo, initFirebase } from "@/firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";

function Register({
  see,
  setSee,
}: {
  see: Boolean;
  setSee: (see: boolean) => void;
}) {
  const [show, setShow] = useState(false);
  const [dateInfo, setDateInfo] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [custom, setCustom] = useState("")
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    gender: "",
  });
  const { EmailLink, signUp } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = await addDoc(collection(getInfo, "users"), {
      id: serverTimestamp(),
      FirstName: data.FirstName,
      lastName: data.LastName,
      email: data.email,
      password: data.password,
      dob: new Date(
        `${dateInfo.month} ${dateInfo.day} ${dateInfo.year}`
      ).toDateString(),
      gender: data.gender,
    });
    await signUp(data.email, data.password)
    await EmailLink(data.email);
    console.log(user);
    setSee(!see);
  };

  return (
    <>
      <Bg>
        <RightForm2 onSubmit={handleSubmit}>
          <Xmark
            onClick={() => {
              setSee(!see);
            }}
          >
            <b>x</b>
          </Xmark>
          <Heading2p>
            <b>Sign up</b>
          </Heading2p>
          <Ptag2>It's Quick and easy</Ptag2>
          <Line />
          <FlexRow>
            <Input2
              placeholder="First name"
              onChange={(e) => {
                setData((prev) => ({ ...prev, FirstName: e.target.value }));
              }}
            />
            <Input2
              placeholder="Last name"
              onChange={(e) => {
                setData((prev) => ({ ...prev, LastName: e.target.value }));
              }}
            />
          </FlexRow>
          <Input1
            placeholder="Mobile number or email"
            onChange={(e) => {
              setData((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <Input1
            placeholder="New password"
            onChange={(e) => {
              setData((prev) => ({ ...prev, password: e.target.value }));
            }}
          />

          <Row>
            <SmallP2>Birthday</SmallP2>
            <Round>?</Round>
          </Row>
          <FlexRow>
            <Select
              onChange={(e) => {
                setDateInfo((prev) => ({ ...prev, month: e.target.value }));
              }}
            >
              <option value="1">Jan</option>
              <option value="2">Feb</option>
              <option value="3">Mar</option>
              <option value="4">Apr</option>
              <option value="5">Mai</option>
              <option value="6">Jun</option>
              <option value="7">Jul</option>
              <option value="8">Aug</option>
              <option value="9">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </Select>

            <Select
              onChange={(e) => {
                setDateInfo((prev) => ({ ...prev, day: e.target.value }));
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </Select>

            <Select
              onChange={(e) => {
                setDateInfo((prev) => ({ ...prev, year: e.target.value }));
              }}
            >
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
              <option>2013</option>
              <option>2012</option>
            </Select>
          </FlexRow>

          <Row>
            <SmallP2>Gender</SmallP2>
            <Round>?</Round>
          </Row>
          <FlexRow>
            <Genders onClick={() => setShow(false)}>
              <label htmlFor="female">female</label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={(e) => {
                  setData((prev) => ({ ...prev, gender: e.target.value }));
                  console.log(e);
                }}
              />
            </Genders>

            <Genders onClick={() => setShow(false)}>
              <label htmlFor="male">male</label>
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={(e) => {
                  setData((prev) => ({ ...prev, gender: e.target.value }));
                  console.log(e);
                }}
              />
            </Genders>

            <Genders onClick={() => setShow(true)}>
              <label htmlFor="custom">custom</label>
              <input
                type="radio"
                name="gender"
                id="custom"
                onChange={async (e) => {
                  await setData((prev) => ({
                    ...prev,
                    gender: custom,
                  }));
                }}
              />
            </Genders>
          </FlexRow>
          {show && (
            <>
              <Select2>
                <option selected={true}>select your pronoun</option>
                <option>She:"Wishes her a happy birthday"</option>
                <option>He:"Wishes him a happy birthday"</option>
                <option>They:"Wish them a happy birthday"</option>
              </Select2>

              <SmallP2>Your gender is visible to everyone</SmallP2>

              <Input1
                placeholder="Gender (optional)"
                onChange={(e) => {
                  setCustom(e.target.value);
                }}
              />
            </>
          )}

          <div>
            <Minor>
              People who use our service may have uploaded your contact
              information to Facebook.<Href>Learn more.</Href>
            </Minor>
            <Ptag />
            <Minor>
              By clicking Sign Up, you agree to our{" "}
              <Href>Terms,Privacy Policy</Href> and <Href>Cookies Policy</Href>
              .You may receive SMS Notifications from us and can opt out any
              time.
            </Minor>
          </div>

          <Field>
            <SignUpButton>sing up</SignUpButton>
          </Field>
        </RightForm2>
      </Bg>
    </>
  );
}

export default Register;
