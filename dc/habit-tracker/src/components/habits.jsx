import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    }

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    }

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    }

    handleAdd = (name) => {
        this.props.onAdd(name);
    }
    

    render() {
        console.log('habits');

        return (
            <>
                <HabitAddForm onAdd={this.handleAdd} />
                <ul>
                    {
                        this.props.habits.map(habit => (
                            <Habit 
                                key={habit.id} 
                                habit={habit}
                                // count={habit.count} // #1
                                onIncrement={this.props.onIncrement}
                                onDecrement={this.props.onDecrement}
                                onDelete={this.props.onDelete} 
                            />
                        ))
                    }
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>
                    Reset All
                </button>
            </>
        );
    }
}

export default Habits;