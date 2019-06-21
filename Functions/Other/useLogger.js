function useLogger(item) {
  
  const log = () => console.log(item) 
  
  useEffect(log, [item])
  
}
