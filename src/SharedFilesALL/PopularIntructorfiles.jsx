import React from 'react';
import usePopularAll from '../HooksFiles/usePopularAll';

const PopularIntructorfiles = () => {


    const [popularclass] = usePopularAll()





    return (
        <div>
            {
              popularclass.map(p=><CardInstrcutor key={p._id} data={p} />)  
            }
        </div>
    );
};



function CardInstrcutor({data}){
const {instructorName,email,instructorImage} = data
}



export default PopularIntructorfiles;