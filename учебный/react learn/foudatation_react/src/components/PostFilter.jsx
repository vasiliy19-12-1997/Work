import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            
            <MyInput
                value={filter.query}
                //двухсторонее связывание
                onChange={e => setFilter({...filter, query: e.target.value})} 
                placeholder='Поиск...' 
            />
            <MySelect 
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортировка по'
                options = {[
                    {value: 'title', name: 'по Заголовку'},
                    {value: 'body', name: 'по Названию'}
                ]}
            />
            
        </div>

    );
};

export default PostFilter;