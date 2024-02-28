import React from 'react'

const Shop = () => {
  return (
    <>
      <section className='container mx-auto mt-10'>
        <div className="flex justify-between">
            <div className="">
                <span>10</span> 
                <span>Item On List</span>
            </div>
            <div className="">
                <select className='border border-shop-border focus:border focus:border-4 p-2 focus:border-sky-300 rounded-md' name="" id="">
                    <option value="">Sort by (default)</option>
                    <option value="">Newest </option>
                    <option value="">Oldest</option>
                </select>

                <select className='ms-3 border border-shop-border focus:border focus:border-4 p-2 focus:border-sky-300 rounded-md' name="" id="">
                    <option value="">All</option>
                    <option value="">10 per page</option>
                    <option value="">20 per page</option>
                    <option value="">30 per page</option>

                </select>
            </div>
        </div>
            <div className=""></div>
      </section>
    </>
  )
}

export default Shop
