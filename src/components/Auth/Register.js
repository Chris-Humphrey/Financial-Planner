import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'


class Register extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }

    render() {
        return (
            <>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name="lock"/> Register your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                        <Form.Input fluid placeholder='First name' />
                        <Form.Input fluid placeholder='Last name' />
                        <Form.Input fluid placeholder='E-mail address' />
                        <Form.Input
                            fluid
                            placeholder='Password'
                            type='password'
                        />

                        <Button color='teal' fluid size='large'>
                            Register
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already have an account? <a href='/login'>Sign Up</a>
                    </Message>
                    </Grid.Column>
                </Grid>
            </>
        );
    }
}



export default Register
