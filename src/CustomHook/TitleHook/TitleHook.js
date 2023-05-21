import React, { useEffect } from 'react';

const useTitleHook = (title) => {
        useEffect(() =>{
            document.title = 'ToyJoy - ' + title
        },[title])
};

export default useTitleHook;