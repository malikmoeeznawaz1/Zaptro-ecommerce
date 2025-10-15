import React from 'react'
import { getData } from '../Context/DataContext'

const Category = () => {
    const { data } = getData()

    const getUniqueCategory = (data, property) => {
        const allCategories = data?.map((currEle) => (currEle[property]))
        return [...new Set(allCategories)]
    }

    const categoryData = getUniqueCategory(data, "category");



    return (
        <div className='bg-[#101829]'>
            <div className="flex justify-around py-5 items-center">
                {
                    categoryData?.map((item, index) => (
                        <div key={index}>
                            <button className='text-slate-100 cursor-pointer bg-gradient-to-r from-red-400 to-purple-400 px-2 py-1 rounded-md font-semibold uppercase hover:bg-gradient-to-l from-red-400 to-purple-400'>{item}</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category