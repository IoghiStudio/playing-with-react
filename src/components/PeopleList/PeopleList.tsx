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
          <th>remove</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
      {people.map(person => (
        <tr key={person.name}>
          <td>
            <button
              type="button"
              onClick={() => {
                removePerson(person);
              }}
            >
              --
            </button>
          </td>
          <th>{person.name}</th>
          <th>{person.age}</th>
        </tr>
      ))}
      </tbody>
    </table>
  )
};

export default React.memo(PeopleList);