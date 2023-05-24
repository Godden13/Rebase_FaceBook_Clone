/* eslint-disable react/no-unescaped-entities */
"use client"
import { Main } from '@/Components/Organism'
import { FlexRow, FlexRow2, Genders, RightForm } from '@/Components/Molecules'
import { Heading, Heading2, Input, Input2, Line, Ptag, Select, SignUpButton, SmallP } from '@/Components/Atoms'

function Register() {
  return (
    <>
      <Main>
        <RightForm>
          <Heading2><b>Sign up</b></Heading2>
          <Ptag>It's Quick and easy</Ptag>
          <Line/>
          <FlexRow>
          <Input2 placeholder='Fisrt name'></Input2>
          <Input2 placeholder='Last name'></Input2>
          </FlexRow>
          <Input placeholder='Mobile number or email'></Input>
          <Input placeholder='New password'></Input>
          
          <SmallP>Bithday</SmallP>
          <FlexRow>
          <Select>
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>Mai</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </Select>

          <Select>
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

          <Select>
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

<FlexRow2>
          <Genders>
          <label>female</label>
          <input type="radio" />
          </Genders>
          
          <Genders>
          <label>male</label>
          <input type="radio"/>
          </Genders>

          <Genders>
          <label>custome</label>
          <input type="radio" />
          </Genders>
</FlexRow2>      

          <SmallP>People who use our service may have uploaded your contact information to Facebook. Learn more.</SmallP>
          <SmallP>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies 
          Policy. You may receive SMS Notifications from us and can opt out any time.</SmallP>
          <SignUpButton>sing up</SignUpButton>
        </RightForm>

      </Main>
    </>
  )
}

export default Register


