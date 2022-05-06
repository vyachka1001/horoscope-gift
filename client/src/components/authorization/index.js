import React, { useState } from 'react'
import {Container, MainBg, VideoBg, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormButton, Text} from './authorization_elements'
import Video from '../../videos/space.mp4'
import Input from './utils/Input'
import { login } from '../../actions/user_actions'
import { useDispatch } from 'react-redux'

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <>
    <Container>
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </MainBg>
        <FormWrap>
            <Icon to="/">horoscope</Icon>
            <FormContent> 
                <Form >
                    <FormH1>Log in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <Input required value={email} setValue={setEmail} type='email' />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <Input required value={password} setValue={setPassword} type='password' />
                    <FormButton type='submit' onclick={ () => dispatch(login(email, password)) }>Continue</FormButton>
                    <Text>Forgot password ?</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default LogIn