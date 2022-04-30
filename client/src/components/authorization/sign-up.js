import React, { useState } from 'react'
import {Container, MainBg, VideoBg, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormButton, FormInput} from './authorization_elements'
import Video from '../../videos/space.mp4'
import Input from './utils/Input'
import { register } from '../../actions/user_registration'


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zodiacSign, setZodiacSign] = useState("");
  const [gender, setGender] = useState("");

  return (
    <>
    <Container>
        <MainBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </MainBg>
        <FormWrap>
            <Icon to="/">horoscope</Icon>
            <FormContent> 
                <Form action="/login">
                    <FormH1>Sign up ;)</FormH1>
                    <FormLabel htmlFor='for'>Zodiac sign</FormLabel>
                    <Input required value={zodiacSign} setValue={setZodiacSign} type='zodiac' />
                    <FormLabel htmlFor='for'>Gender</FormLabel>
                    <Input required value={gender} setValue={setGender} type='Gender' />
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <Input required value={email} setValue={setEmail} type='email' />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <Input value={password} setValue={setPassword} type='password' required/>
                    <FormButton type='submit' onClick={() => register(email, password, gender, zodiacSign)}>Continue</FormButton>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignUp