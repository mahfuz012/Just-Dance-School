import React from 'react';
import useMagicAxiosBoss from './useMagicAxiosBoss';
import { useQuery } from '@tanstack/react-query';

const usePopularAll = () => {



    const [axiosMagic] = useMagicAxiosBoss()

    const { refetch, data: popularclass = [] } =
        useQuery(
        ['popularclass'],
         async () => {
         const res = await axiosMagic.get(`/popularclasses`)
                return res.data
            
        })



return [popularclass,refetch]








  
};

export default usePopularAll;