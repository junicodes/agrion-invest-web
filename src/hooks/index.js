import { useRef, useEffect } from 'react';

export const usePortalHook = id => {
    const rootElemRef = useRef(null);

    //Add a lifecycle method useEffect
    useEffect(() => {
        //Look for exixting target in the DOM to apppend to
        const parentElem = document.querySelector(`#${id}`);
        
        parentElem.appendChild(rootElemRef.current);

        return () => {
            rootElemRef.current.remove();
        };

    }, []);

    const getRootElem = () => {
        if(!rootElemRef.current) {
            rootElemRef.current = document.createElement('div');
        }
        return rootElemRef.current;
    }

    return getRootElem();
};

