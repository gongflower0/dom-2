window.jQuery=function(selectorOrArray){
    let elements
    if (typeof selectorOrArray==='string'){
        elements=document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
        elements=selectorOrArray
    }
    
    //api可以操作elements
    return{
        addClass(className){
            for(let i=0;i<elements.length;i++){
                //闭包：函数访问外部的变量
                const element=element[i]
                element.classList.add(className)
            }
            
            return this
        },
        find(selector){
            let array=[]
            for(let i=0;i<elements.length;i++){
                array=array.concat(Array.from(elements[i].querySelectorAll(selector)))
            }
            const newApi=jQuery(array)
            return newApi
        }
    }
}
    

    
