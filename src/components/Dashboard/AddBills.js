import React from 'react';
import { connect } from 'react-redux';
import addBills from '../../actions/addBills';
import {Segment, Form, List, Table } from 'semantic-ui-react';

class AddBills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            billsName: '',
            billsAmount: 0,
            billsFixed: true,
            bills: [{
                billsName: '',
                billsAmount: 0,
                billsFixed: null
            }]
        }
        this.billsFixedChangeHandler = this.billsFixedChangeHandler.bind(this);
    }

    billsNameChangeHandler = (e) => {
        this.setState ({
            billsName: e.target.value
        })
    }

    billsAmountChangeHandler = (e) => {
        this.setState ({
            billsAmount: e.target.value
        })
    }

    billsFixedChangeHandler = (e) => {
        this.setState({
            billsFixed: e.target.checked
        })
    }

    submitBillsHandler = (e) => {
        e.preventDefault();

        this.setState ({
            billsName: '',
            billsAmount: 0
        })

        //call global state
        this.props.onAddBills({
            billsName: this.state.billsName,
            billsAmount: this.state.billsAmount,
            billsFixed: this.state.billsFixed
        })
    }

    render() {
        return (
            <Segment.Group>
                <Segment raised>
                    {/* {console.log(this.state.billsFixed)} */}
                    <h1>Deduct Your Monthly Expenses</h1>
                    <p>Some Fixed Examples: Mortgage/Rent, Property taxes, Insurance, Lease/Loan Payment, Utilities...</p>
                    <p>A Few Non-Fixed (Non-Essential) Examples: Eating-Out, Movies, Bars, Groceries, Fuel/Public Transportation...</p>
                    <br/>
                    <Form onSubmit={this.submitBillsHandler}>
                        <Form.Group>
                            <Form.Input placeholder="Expenses Name" value={this.state.billsName}
                            type="text" onChange={this.billsNameChangeHandler} />
                            <Form.Input placeholder="Expenses Amount" value={this.state.billsAmount}
                            type="number" onChange={this.billsAmountChangeHandler} />

                            <Form.Input
                                    label="Fixed?"
                                    name="billsFixed"
                                    type="checkbox"
                                    checked={this.state.billsFixed}
                                    onChange={this.billsFixedChangeHandler} />

                            <Form.Button style={{backgroundColor: '#2ec86f'}} content='Submit'>Add Expense</Form.Button>
                        </Form.Group>
                    </Form><br/>
                </Segment>
                <h2 style={{textAlign: 'center'}}>Total Expenses: ${this.props.totalBills}</h2>
                <Segment.Group horizontal>
                    <Segment raised>
                        <Table color={'green'} celled structured>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell style={{textAlign: 'center'}} colSpan='2'><h2>Fixed</h2></Table.HeaderCell>
                                    
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Expense Name</Table.HeaderCell>
                                    <Table.HeaderCell>Expense Amount</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                    {this.props.bills.map((item) => {
                                        return <>{item.billsFixed ? <Table.Row>
                                            <Table.Cell>{item.billsName}</Table.Cell>
                                            <Table.Cell>${item.billsAmount}</Table.Cell>
                                        </Table.Row> : null }</>
                                    })}
                                    <Table.Row style={{backgroundColor: '#2ec86f'}}>
                                        <Table.Cell>Total Fixed Expenses</Table.Cell>
                                        <Table.Cell>${this.props.totalFixedBills}</Table.Cell>
                                    </Table.Row>
                            </Table.Body>
                        </Table>
                    </Segment>

                    <Segment>
                        <Table color={'green'} celled structured>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell style={{textAlign: 'center'}} colSpan='2'><h2>Non-Essential</h2></Table.HeaderCell>
                                    
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Expense Name</Table.HeaderCell>
                                    <Table.HeaderCell>Expense Amount</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                    {this.props.bills.map((item) => {
                                        return <>{!item.billsFixed ? <Table.Row>
                                            <Table.Cell>{item.billsName}</Table.Cell>
                                            <Table.Cell>${item.billsAmount}</Table.Cell>
                                        </Table.Row> : null }</>
                                    })}
                                    <Table.Row style={{backgroundColor: '#2ec86f'}}>
                                        <Table.Cell>Total Non-Essential Expenses</Table.Cell>
                                        <Table.Cell>${this.props.totalNonFixedBills}</Table.Cell>
                                    </Table.Row>
                            </Table.Body>
                        </Table>

                        <br/>
                    </Segment>
                </Segment.Group>
            </Segment.Group>
        );
    }
}
{/* Fixed?{String(item.billsFixed)} */}

let mapStateToProps = (state) => {
    return {
        totalBills: state.totalBills,
        bills: state.bills,
        totalSavings: state.totalSavings,
        totalFixedBills: state.totalFixedBills,
        totalNonFixedBills: state.totalNonFixedBills
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddBills: (billsData) => dispatch(addBills(billsData))
    }
}

// export default AddIncome;

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(AddBills);