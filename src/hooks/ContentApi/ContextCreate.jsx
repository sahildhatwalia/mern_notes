//ContextCreate.jsx

import { createContext } from "react";


export const ContentContext = createContext();

export const ContentProvider = ({children})=>{

const user = [
    { id: 1, name: 'John Doe', email: '1aLbM@example.com' },
    { id: 2, name: 'Jane Smith', email: 'oVf3o@example.com' },
    { id: 3, name: 'Alice Johnson', email: '3Tl6T@example.com' },
    { id: 4, name: 'Bob Brown', email: 'kMlXo@example.com' }
]

    return (
        <ContentContext.Provider value={{User: user}}>
       {children}
        </ContentContext.Provider>
    );
}



