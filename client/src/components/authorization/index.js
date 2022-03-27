import React from 'react'
import {Container, MainBg, VideoBg, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './authorization_elements'
import Video from '../../videos/authorization.mp4'

const LogIn = () => {
  return (
    <>
    <Container>
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </MainBg>
        <FormWrap>
            <Icon to="/">horoscope</Icon>
            <FormContent> 
                <Form action="#">
                    <FormH1>Log in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password ?</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default LogIn