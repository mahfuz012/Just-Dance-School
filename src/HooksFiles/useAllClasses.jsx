
import useMagicAxiosBoss from './useMagicAxiosBoss';
import { useQuery } from '@tanstack/react-query';

const useAllClasses = () => {


    const [axiosMagic] = useMagicAxiosBoss()

    const { refetch, data: allclass = [] } =
        useQuery(
        ['allclasses'],
         async () => {
         const res = await axiosMagic.get(`/allclasses`)
                return res.data
            
        })
      
      
      
      return [allclass,refetch]
    


};

export default useAllClasses;