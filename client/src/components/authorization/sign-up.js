import React from 'react'
import {Container, MainBg, VideoBg, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './authorization_elements'
import Video from '../../videos/space.mp4'


const SignUp = () => {
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
                    <FormH1>Sign up ;)</FormH1>
                    <FormLabel htmlFor='for'>Zodiac sign</FormLabel>
                    <FormInput type='zodiac-sign' required />
                    <FormLabel htmlFor='for'>Gender</FormLabel>
                    <FormInput type='Gender' required />
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

export default SignUp