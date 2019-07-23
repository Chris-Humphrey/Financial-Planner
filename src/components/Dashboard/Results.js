
import React from 'react';
import { connect } from 'react-redux';
import addBills from '../../actions/addBills';
import {Segment, Form, Table } from 'semantic-ui-react';

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
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

    submitBillsHandler = (e) => {
        e.preventDefault();

        this.setState ({
            billsName: '',
            billsAmount: null
        })

        //call global state
        this.props.onAddBills({
            billsName: this.state.billsName,
            billsAmount: this.state.billsAmount
        })
    }

    render() {
        return (
            <>
            <Segment.Group raised>
                <h1 style={{textAlign: 'center', padding: '1.2em'}}>Results</h1><br/><br/>
                
                <Segment.Group horizontal raised>
                <Segment >
                    <h2>Income: ${this.props.totalIncome}</h2>

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


                <Segment>
                    <h2>Fixed Expenses: ${this.props.totalFixedBills}</h2>
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
                    <h2>Non-Essential Expenses: ${this.props.totalNonFixedBills}</h2>
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
                </Segment>
            </Segment.Group>
            </Segment.Group>
                            <Segment.Group horizontal style={{ height: '15vh' }} raised>
                                <Segment>
                                    <h2 style={{textAlign: 'center', padding: '1.2em'}}>Next Income Per Month: ${this.props.totalSavings}</h2>
                                </Segment>
                                <Segment>
                                    <h2 style={{textAlign: 'center', padding: '1.2em'}}>Net Income Per Year: ${this.props.totalSavings * 12}</h2>
                                </Segment>
                        </Segment.Group>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        totalIncome: state.totalIncome,
        totalBills: state.totalBills,
        bills: state.bills,
        income: state.income,
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
)(Results);