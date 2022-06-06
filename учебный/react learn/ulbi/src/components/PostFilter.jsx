import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <div>
       <MyInput 
       placeholder = 'Поиск...'
       value = {filter.query}
       onChange = {(e)=>setFilter({...filter, query: e.target.value})}

       />

       
      <MySelect
      value={filter.sort}
      onChange = {selectedSort =>setFilter({...filter, sort: selectedSort }) }
      defaultValue='Сортировка по'
      options={[{
        value: 'title',
        name: 'По названию'
      },
      {
        value: 'body',
        name: 'По описанию'
      },

    ]}
      ></MySelect>
      {/* Здесь мы сделаем условную отрисовку, что если все посты удалим то появится надпись что посты не найдены, а так будет пост */}
            </div>
        </div>
    );
};

export default PostFilter;