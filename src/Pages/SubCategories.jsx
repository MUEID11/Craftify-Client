import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SubCategories = () => {
    const {id} = useParams();
    const [cats, setCats] = useState({});
    console.log(cats)
    useEffect(()=>{
        fetch(`http://localhost:5000/cat/${id}`)
        .then(res =>res.json())
        .then(data => {
            setCats(data);
            console.log(data)
        })
        .catch(error => console.log(error))
    },[id])
    return (
        <div>
            hello
            
        </div>
    );
};

export default SubCategories;