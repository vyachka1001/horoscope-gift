import React from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './authorization_elements'

const SignUp = () => {
  return (
    <>
    <Container>
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