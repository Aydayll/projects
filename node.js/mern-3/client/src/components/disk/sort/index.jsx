import React from 'react';
import { Select, SelectWrapper } from './styles'

const Sort = (setSort, sort) => {
    const [active, setActive]= useState(false)
    return (
        <SelectWrapper onClick={()=> setActive(!active)}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9.5 1" stroke="#566885" stroke-linecap="round" />
            </svg>
            <Select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className='disk__select'>
                <option value='name'>По имени</option>
                <option value='type'>По типу</option>
                <option value='date'>По дате</option>
                <option value='size'>По размеру</option>
            </Select>
        </SelectWrapper>

    )
}

export default Sort
