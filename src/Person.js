import React from 'react';

const Person = ({person}) => {
    if(!person)
        return null;
    return (
      <div className='person'>
          <table>
            <caption>{person.name}</caption>
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Definition</th>
                    </tr>
                </thead>
                    <tr><td>Height</td> <td>{person.height} cm</td></tr>
                    <tr><td>mass </td> <td>{person.mass} lb</td></tr>
                    <tr><td>hair color</td> <td>{person.hair_color}</td></tr>
                    <tr><td>skin color</td> <td>{person.skin_color}</td></tr>
                    <tr><td>eye color</td> <td>{person.eye_color}</td></tr>
                    <tr><td>birth year</td> <td>{person.birth_year}</td></tr>
            </table>
      </div>
    );
  };

  export default Person;