import React from 'react';
import { connect } from 'react-redux';
import addIncome from '../../actions/addIncome';
import {Segment, Form, Table } from 'semantic-ui-react';

class AddIncome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            incomeName: '',
            incomeAmount: 0,
            income: [{
                incomeName: '',
                incomeAmount: 0
            }]
        }
    }

    incomeNameChangeHandler = (e) => {
        this.setState ({
            incomeName: e.target.value
        })
    }

    incomeAmountChangeHandler = (e) => {
        this.setState ({
            incomeAmount: e.target.value
        })
    }

    submitIncomeHandler = (e) => {
        e.preventDefault();

        this.setState ({
            incomeName: '',
            incomeAmount: 0
        })

        //call global state
        this.props.onAddIncome({
            incomeName: this.state.incomeName,
            incomeAmount: this.state.incomeAmount
        })
    }

    render() {
        return (
            <Segment.Group>
                <Segment raised>
                    <h1>Add Your Monthly Income</h1>
                    <p>A Few Examples: Salary/Contract, Product Sales, YouTube, Savings, Real Estate, Investments...</p>
                    <br/>
                    <Form onSubmit={this.submitIncomeHandler}>
                        <Form.Group>
                            <Form.Input placeholder="Income Name" value={this.state.incomeName}
                            type="text" onChange={this.incomeNameChangeHandler} />
                            <Form.Input placeholder="Income Amount" value={this.state.incomeAmount}
                            type="number" onChange={this.incomeAmountChangeHandler} />

                            <Form.Button style={{backgroundColor: '#2ec86f'}} content='Submit'>Add Income</Form.Button>
                        </Form.Group>
                    </Form><br/>
                </Segment>


                <h2 style={{textAlign: 'center'}}>Total Income: ${this.props.totalIncome}</h2>
                <Segment.Group horizontal>
                    <Segment raised>
                        <Table color={'green'} celled structured>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell style={{textAlign: 'center'}} colSpan='2'><h2>Income</h2></Table.HeaderCell>
                                    
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Income Name</Table.HeaderCell>
                                    <Table.HeaderCell>Income Amount</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                    {this.props.income.map((item) => {
                                        return <Table.Row>
                                            <Table.Cell>{item.incomeName}</Table.Cell>
                                            <Table.Cell>${item.incomeAmount}</Table.Cell>
                                        </Table.Row>
                                    })}
                                    <Table.Row style={{backgroundColor: '#2ec86f'}}>
                                        <Table.Cell>Total Income</Table.Cell>
                                        <Table.Cell>${this.props.totalIncome}</Table.Cell>
                                    </Table.Row>
                            </Table.Body>
                        </Table>
                    </Segment>
                    <Segment></Segment>
                </Segment.Group>
            </Segment.Group>


                /* <ul>
                    {this.props.income.map((item) => {
                        return <li key={item.incomeName}>Name: {item.incomeName}   ${item.incomeAmount}</li>
                    })}
                </ul>
                <h2>Total Income: ${this.props.totalIncome}</h2> */
            
            
        );
    }
}

let mapStateToProps = (state) => {
    return {
        totalIncome: state.totalIncome,
        income: state.income
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddIncome: (incomeData) => dispatch(addIncome(incomeData))
    }
}

// export default AddIncome;

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(AddIncome);