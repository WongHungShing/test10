// USE SESSION STATE

export const useSession = () => useState('session', () => ({ pending: true, data: null }));



// SET SESSION STATE

export const useSetSession = (data) => {

 // save session state to localStorage

 localStorage.setItem('session', JSON.stringify(data));



 // update session state

 const sessionState = useSession();

 sessionState.value = { pending: false, data };

};



export const getUser = () => {

 if (process.client) {

   return JSON.parse(localStorage.getItem('session'));

 }

};