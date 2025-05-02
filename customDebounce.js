function debounce(func,delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            func(...args)
        },delay)
    }
}

const handleResize = ()=>{
    console.log('Winow is Re-sized');
}

const debouncedResize = debounce(handleResize,500);

window.addEventListener('resize', debouncedResize)