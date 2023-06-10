

import { useQuery } from '@tanstack/react-query';

import useMagicAxiosBoss from './useMagicAxiosBoss';

const useAllUserProfile = () => {


const [axiosMagic] = useMagicAxiosBoss()

const { refetch, data: alluser = [] } =
    useQuery(
    ['alluser'],
     async () => {
     const res = await axiosMagic.get(`/usergetid`)
            return res.data
        
    })
  
  
  
  return [alluser,refetch]













    return 
};

export default useAllUserProfile;