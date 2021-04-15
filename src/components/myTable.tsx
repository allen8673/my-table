import React, { useState, useEffect, Fragment } from 'react';
import './myTable.css'

interface IMyTable {
    columns: any[],
    data: any[],
    search:string,
}

export const MyTable: React.FC<IMyTable> = (props) => {
    const { columns, data, search } = props;
    const [displayData, setDisplayData] = useState<any[]>(data);
    const [filters, setFilters] = useState<{ [key: string]: string }>({});
    const [sort, setSort] = useState<{ key: string, sort: number }>({ key: '', sort: 0 });

    useEffect(() => {
        let _data = [...data];
        if (search) {
            _data = _data.filter(d => Object.values(d).some((v) => (v as string || '').toUpperCase().includes(search.toUpperCase())))
        }
        for (var p in filters) {
            _data = _data.filter(i => i[p].includes(filters[p]))
        }
        if (sort.key && sort.sort) {
            _data = _data.sort((a, b) => a[sort.key] > b[sort.key] ? 1 : -1);
            if (sort.sort === 2) {
                _data = _data.reverse();
            }
        }
        setDisplayData(_data)
    }, [search, filters, sort])

    const columnSort = (item:any) => {
        setSort({
            key: item.index,
            sort: (sort.key !== item.index || sort.sort === 2) ? 0 : sort.sort + 1
        });
    }

    return (
       
            <div className='my-table'>
                <table>
                    <thead>
                        <tr >
                            {columns.map(i =>
                                <th onClick={()=> i.sort && columnSort(i)}>
                                    <div className='th-content'>
                                        <span>{i.title}</span>
                                        <span>{sort.key === i.index && sort.sort !==0 && (sort.sort === 1 ? '∧':'∨')}</span>
                                    </div>
                                    {/* {i.filter && <input onChange={e => {
                                    const { target: { value } = {} } = e;
                                    filters[i.index] = value as string;
                                    setFilters({ ...filters });
                                }} />} */}
                                    {/* {i.sort && <button onClick={(e) => {
                                        setSort({
                                            key: i.index,
                                            sort: (sort.key !== i.index || sort.sort === 2) ? 0 : sort.sort + 1
                                        });
                                    }}>sort</button>} */}
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            displayData.map(d => (
                                <tr>
                                    {columns.map(i => <td>{d[i.index]}</td>)}
                                </tr>))}
                    </tbody>
                </table>
            </div>

    )
}