import filterStyles from '@/styles/filter.module.css'
import { useEffect } from 'react'

const Filter = ({ filters, handleChange }) => {
    return (
        <>
            {filters.map((filter, index) => {
                return (
                    <div className={filterStyles.filter} key={index}>
                        <input type="checkbox" id={filter} name={filter} value={filter} defaultChecked={true} onChange={handleChange} />
                        <label>{filter}</label>
                    </div>
                )
            })}
        </>
    )
}

export default Filter