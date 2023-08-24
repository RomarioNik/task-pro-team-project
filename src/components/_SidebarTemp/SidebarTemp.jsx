import React from 'react';
import { Link } from 'react-router-dom';

const SidebarTemp = () => {

  //дошки будуть приходити з бекенду, назви рендеряться в сайдбарі
  const boards = [
    {
      name: 'Board1',
      id: '1',
    },
    {
      name: 'Board2',
      id: '2',
    },
    {
      name: 'Board3',
      id: '3',
    },
    {
      name: 'Board4',
      id: '4',
    },
    {
      name: 'Board5',
      id: '5',
    },
  ];

  return (
    <div style={{ backgroundColor: '#fcea23' }}>
      <div>SidebarTemp</div>

      <ul>
        {boards.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarTemp;
