export const TypeIdToName = function (id) {
    fetch('https://esi.tech.ccp.is/latest/universe/types/' + id + '/?datasource=tranquility&language=en-us')
        .then(response => response.json())
        .then(json => {            
         return(json.name)
        })
        .catch(err => {
            console.log("skill error 2")
        });
}

