import  { useContext } from 'react';
import { AuthContextPro } from '../AuthProviderFiles/AuthProviderPro';
import useMagicAxiosBoss from './useMagicAxiosBoss';
import { useQuery } from '@tanstack/react-query';




const useIsAdminUser = () => {
    const {userProfile,loader} = useContext(AuthContextPro)
    const [axiosMagic] = useMagicAxiosBoss()

    
    const {  data: isAdmin , isLoading: Laoder, refetch } =
    useQuery({
        queryKey:['isAdmin', userProfile?.email],
        enabled:!loader,
        queryFn:async () => {
            if(userProfile && userProfile.email){
            const res = await axiosMagic.get(`/admin/find/${userProfile.email}`)
            return res.data.admin

            }
            return null

        }
        })
    
    
        return [isAdmin,Laoder,refetch]
};

export default useIsAdminUser;