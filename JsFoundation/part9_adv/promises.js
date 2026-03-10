function fetchData() {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            let succes = true;
            if (succes) {
            resolve("data fetched succesfully");
            } else {
            reject("data has error");
            }
       }, 3000);
    })
}

fetchData()
    .then((data)=>{
        console.log(data);
    })
        .catch((error)=>{
            console.error(error);
        })