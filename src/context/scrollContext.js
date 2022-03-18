import React from 'react'


const ScrollContext = React.createContext();


function ScrollProvider({children}) {
    const [height, setHeight] = React.useState(0);

    React.useEffect(() => {
      window.addEventListener('scroll', () =>{
        setHeight(window.pageYOffset);
        
      });
      return () => {
        window.removeEventListener('scroll', () =>{});
      }
    });
    return <ScrollContext.Provider value={{height}} >
                {children}
    </ScrollContext.Provider>
}

export {ScrollProvider, ScrollContext}