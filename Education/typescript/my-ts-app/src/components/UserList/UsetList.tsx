import React, {FC} from 'react';
import {IUser} from '../types/types';
import {UserItem} from '../UserItem/UserItem';

interface UserListProps {
    users:IUser[],
    children?: JSX.Element | JSX.Element[],
}
export  const UsetList: FC<UserListProps> = ({users}) => {
   
    return (
        <div>
        {users.map(user=>
        <UserItem key={user.id} user={user}/>
        
        )}
        
        </div>
        

    );
};
import * as React from 'react';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return ;
};

export default App;



