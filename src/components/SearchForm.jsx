import React from 'react'

const SearchForm = () => {
    return (
        <div className='bg-slate-100 px-10 py-10 flex flex-col gap-y-5 justify-center items-center '>
            <div className='justify-between items-center'>
                <div className='ml-60'>
                    <h1 className='text-[18px] justify-center font-semibold'>Create Event</h1>
                </div>
                <div className='grid gap-2 pt-8'>

                    <label className='text-[#6f6f6f] font-poppins font-semibold '>
                        Event title
                    </label>
                    <input
                        className='px-6 py-2 focus:outline-none border-solid border-2 border-slate-200 rounded-md'
                        type="text"
                        placeholder='Enter email'
                    />
                    <label className='text-[#6f6f6f] font-poppins font-semibold'>
                        Event venue
                    </label>
                    <input
                        className='px-6 py-2 focus:outline-none border-solid border-2 border-slate-200 rounded-md'
                        type="text"
                        placeholder='Enter email'
                    />

                </div>


                <div className='flex flex-row  justify-between'>
                    <div className='grid gap-2'>
                        <label className='text-[#6f6f6f] font-poppins font-semibold'>
                            Start time
                        </label>
                        <input
                            className='px-3 py-2 focus:outline-none border-solid border-2 border-slate-200 rounded-md'
                            type="text"
                            placeholder='Enter email'
                        />
                    </div>
                    <div className='pl-10 grid gap-2'>
                        <label className='text-[#6f6f6f] font-poppins font-semibold'>
                            End time
                        </label>
                        <input
                            className='px-3 py-2 focus:outline-none border-solid border-2 border-slate-200 rounded-md'
                            type="text"
                            placeholder='Enter email'
                        />
                    </div>

                </div>

                <div className='flex flex-row  justify-between '>
                    <div className='grid gap-2'>
                        <label className='text-[#6f6f6f] font-poppins font-semibold'>
                            Start time
                        </label>
                        <input
                            className='px-3 py-2 focus:outline-none border-solid border-2 border-slate-200 rounded-md'
                            type="text"
                            placeholder='Enter email'
                        />
                    </div>
                    <div className='pl-10 grid gap-2'>
                        <label className='text-[#6f6f6f] font-poppins font-semibold'>
                            End time
                        </label>
                        <input
                            className='px-3 py-2 focus:outline-none border-solid border-2 border-slate-200 rounded-md'
                            type="text"
                            placeholder='Enter email'
                        />
                    </div>

                </div>
                <div className='pt-8'>

                    <div className='ml-60 text-[18px] font-semibold '>
                        <h1>Event Description</h1>
                    </div>

                    <div className='grid gap-2 pt-10'>
                        <label className='text-[#6f6f6f] font-poppins font-semibold'>
                            Event Image
                        </label>
                        <input
                            className=' h-40 px-6 py-2 focus:outline-none border-solid border-2 border-slate-200 rounded-lg '
                            type="text"
                            placeholder='SEARCH'
                            

                        />

                    </div>
                    
                    <div className='grid gap-2'>
                        <label className='text-[#6f6f6f] font-poppins font-semibold'>
                            Event Description
                        </label>
                        <input
                            className=' h-40 px-3 py-2 focus:outline-none border-solid border-2 border-slate-200 rounded-lg '
                            type="text"
                            placeholder='Type Here'
                            

                        />

                    </div>
                    <div className='mt-2 w-full'>
					<button
						className='px-60 py-2 border-solid border-2 border-blue-200
							text-md text-gray-50 rounded-md hover:bg-blue-900
                             hover:text-white transition-all'
						type='submit'>
						Create Event
					</button>
				</div>
                </div>


            </div>

        </div>
    )
}

export default SearchForm