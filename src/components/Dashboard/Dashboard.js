import React, { Component } from 'react';
import { Segment, Tab } from 'semantic-ui-react';
import AddIncome from './AddIncome';
import AddBills from './AddBills';
import Results from './Results';

const panes = [
    { menuItem: 'Income', render: () => <Tab.Pane><AddIncome /></Tab.Pane> },
    { menuItem: 'Expenses', render: () => <Tab.Pane><AddBills /></Tab.Pane> },
    { menuItem: 'Results', render: () => <Tab.Pane><Results /></Tab.Pane> },
]

class TabExampleOnTabChange extends Component {
    state = {}

    handleChange = (e, data) => this.setState(data)

    render() {
        return (
        <div>
            <Tab panes={panes} onTabChange={this.handleChange} />
        </div>
        )
    }
}

export default TabExampleOnTabChange