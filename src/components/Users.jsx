import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsersRequest } from '../features/usersSlice'



const Users = () => {

    const {data, loading, error} = useSelector(state => state?.users)
    const dispatch = useDispatch()


    useEffect(()=>{
dispatch(fetchUsersRequest())
    }, [dispatch])

  return (
    <div>
      {
        loading  ? "Loading..." : 
       <div>
<h1>Users</h1>
{
data?.map((user)=>(<p>{user?.firstName + " " + user?.lastName}</p>))    
}
</div>
      }


    </div>
  )
}



export default Users
