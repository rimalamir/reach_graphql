import React,  { useState, useEffect, useRef } from 'react';

const useEffectSkipInitialRender = (callback, dataArr) => {
    const [data, setData] = useState(null);
    const isInitialRender = useRef(true);// in react, when refs are changed component dont re-render 

    useEffect(() => {
        if(isInitialRender.current){// skip initial execution of useEffect
            isInitialRender.current = false;// set it to false so subsequent changes of dependency arr will make useEffect to execute
            return;
        }
        return callback();
    }, dataArr);

};

export default useEffectSkipInitialRender;