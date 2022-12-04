import useSWR from 'swr'

const fetcher = url => fetch(url).then(response => response.json())
//Questa funzione restituisce una promise che conterrà i file restituiti dal server

export function useGithubUser(props){
const {data, error, loading = !data&&error, mutate } = useSWR(() => props.user !== null ? `https://api.github.com/users/${props.user}` : null, fetcher)

  return { data, error, loading, mutate };
    
  
}











// import { useEffect, useState } from 'react'

// export function useGithubUser(username) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   async function fetchGithubUser(username) {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`https://api.github.com/users/${username}`);
//       const json = await response.json();
//       setUser(json);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchGithubUser(username);
//   }, [username]);

//   return {
//     user,
//     loading,
//     error,
//     onFetch: fetchGithubUser,
//   }

// }