import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { MySearchBar } from './components/mySearchBar';
import { MyTable } from './components/myTable';

export const App: React.FC<any> = ()=> {

  const [search, setSearch] = useState<string>('');
  const columns: any[] = [
    {
      title: 'First Name',
      index: 'first_name',
      sort:true,
    },
    {
      title: 'Last Name',
      index: 'last_name',
      filter: true,
      sort:true,

    },
    {
      title: 'Birth Date',
      index: 'birth_date',
      filter: true,
      sort:true,
    },
    {
      title: 'Phone',
      index: 'phone',
    },
  ];
  const data: any[] = [    
    {
      first_name: 'Andy',
      last_name:'Lin',
      birth_date:'1983/9/2',
      phone:'0912-345-678'
    },
    {
      first_name: 'Tony',
      last_name:'Chen',
      birth_date:'1980/11/2',
      phone:'0922-344-677'
    },
    {
      first_name: 'Amy',
      last_name:'Wang',
      birth_date:'1990/3/7',
      phone:'0998-765-432'
    },
    {
      first_name: 'Joe',
      last_name:'Chen',
      birth_date:'1981/5/2',
      phone:'0998-765-432'
    },
  ]
  
  return (
    <div className="App">   
      <MySearchBar setSearch={ (val)=>{setSearch(val)} } />
      <MyTable columns={columns} data={data} search={search}/>
    </div>
  );
}

// export default App;
