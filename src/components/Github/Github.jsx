import React, { useEffect, useState } from 'react'

function Github() {
    const  [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {
            setData(data)
        }
        )
    }, [])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
        Github Followers: {data.followers} 
        <img src={data.avatar_url} alt="Git picture" width={250} />
        </div>
  )
}

export default Github