import React, { Component } from 'react';

interface User {
  id: number;
  name: string;
}

interface State {
  users: User[];
}

class LocalStorage extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Poonam' },
        { id: 4, name: 'Poorvi' },
        { id: 5, name: 'Pagal' },
        { id: 6, name: 'Priya' },
        { id: 7, name: 'PRAVI' },
        { id: 8, name: 'Bob' }
      ]
    };
  }

  saveToLocalStorage = (): void => {
    const usersJSON = JSON.stringify(this.state.users);
    localStorage.setItem('users', usersJSON);
  };

  render() {
    return (
      <div>
        <button onClick={this.saveToLocalStorage}>Save Users</button>
      </div>
    );
  }
}

export default LocalStorage;
