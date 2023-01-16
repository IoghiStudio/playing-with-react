import React from 'react';
import './App.scss';
import peopleFromServer from '../../api/people.json'
import { Person } from '../../types/person';
import PeopleList from '../PeopleList/PeopleList';

type State = {
  counter: number;
  people: Person[];
  personName: string;
  personAge: number;
}

export class App extends React.Component<{}, State> {
  state = {
    counter: 0,
    people: peopleFromServer,
    personName: '',
    personAge: 0,
  }

  addHandler = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }))
  }

  removePerson = (person: Person) => {
    this.setState((state) => ({
      people: state.people.filter(p => p !== person)
    }));
  }

  addPerson = () => {
    if (this.state.personName) {
      const newPerson = {
        name: this.state.personName,
        age: this.state.personAge,
      };

      this.setState((state) => ({
        people: [
          ...state.people,
          newPerson
        ]
      }))

      this.setState({
        personName: '',
        personAge: 0,
      })
    }
  }

  render() {
    const { counter, people, personName, personAge } = this.state;
    console.log('App rendered')
  
    return (
      <div className='app'>
        <table>
          <tr>
            <td>
              <button
                type="button"
                onClick={this.addHandler}
              >
                ++
              </button>
            </td>
            <td>
              <button
                type="button"
                onClick={() => {
                  this.addHandler();
                  this.addHandler();
                  this.addHandler();
                }}
              >
                Add 3!
              </button>
            </td>
            <th>
              {counter}
            </th>
            <td>
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    counter: this.state.counter - 1,
                  })
                }}
              >
                --
              </button>
            </td>
          </tr>
        </table>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.addPerson();
          }}
        >
          <label htmlFor="friendName">Name: </label>
          <input 
            type="text"
            id="friendName"
            value={personName}
            onChange={(event) => {
              this.setState({
                personName: event.target.value,
              })
            }}
          />

          <br />

          <label htmlFor="friendAge">Age: </label>
          <input 
            type="number"
            id="friendAge"
            value={personAge}
            onChange={(event) => {
              this.setState({
                personAge: +event.target.value,
              })
            }}
          />
          
          <br />

          <button 
            type="submit"
          >
            Add person !
          </button>
        </form>

        <PeopleList 
          people={people} 
          removePerson={this.removePerson} 
        />
      </div>
    )
  }
}
