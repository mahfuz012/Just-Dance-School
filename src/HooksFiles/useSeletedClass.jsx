import { useContext } from 'react';
import useMagicAxiosBoss from './useMagicAxiosBoss';
import { useQuery } from '@tanstack/react-query';
import { AuthContextPro } from '../AuthProviderFiles/AuthProviderPro';

const useSeletedClass = () => {
    const {userProfile} = useContext(AuthContextPro)

    const [axiosMagic] = useMagicAxiosBoss()

    const { refetch, data: seletedclasses = [] } =
        useQuery(
        ['seletedclasses'],
         async () => {
          if(userProfile && userProfile.email){
         const res = await axiosMagic.get(`/myselectclass?email=${userProfile.email}`)
                return res.data 
          }


        })

      
      
      return [seletedclasses,refetch]

};

export default useSeletedClass;