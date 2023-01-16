import React from 'react';
import { Person } from "../../types/person"

type Props = {
  people: Person[];
  removePerson: (person: Person) => void;
}

const PeopleList: React.FC<Props> = ({ people, removePerson }) => {
  console.log('PeopleList rendered');

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
      {people.map(person => (
        <tr key={person.name}>
          <th>{person.name}</th>
          <th>{person.age}</th>
          <td>
            <button
              type="button"
              onClick={() => {
                removePerson(person);
              }}
            >
              -
            </button>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  )
};

export default React.memo(PeopleList);