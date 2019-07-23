import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'


class Register extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }

    render() {
        return (
            <>
                <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header style={{color: '#2ec86f'}} as='h2' textAlign='center'>
                        <Icon name='lock'/> Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                        <Button style={{backgroundColor: '#2ec86f'}} fluid size='large'>
                            Login
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        First time here?  <a href='/register'>Sign Up</a>
                    </Message>
                    </Grid.Column>
                </Grid>
            </>
        );
    }
}



export default Register
