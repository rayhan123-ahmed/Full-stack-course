function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name:'Rayhan', utl:'https://chaicode.com'})
        }, 3000);
    })
}


async function getUserData() {
    try {
        console.log('fethcing user data.....');
       let userData =  await fetchData()
       console.log('fethced user data succesfully',userData);
    } catch (error) {
        console.log('data have some error');
    }
}
// getUserData()

// handle multipule promises at once

function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('post data')
        }, 2000);
    })
}

function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('comment data')
        }, 4000);
    })
}

async function getAllData() {
    try {
    console.log('fethicng all data......');
      let [postData,commentData] = await Promise.all([fetchPostData(),fetchCommentData()])
    console.log(postData);
    console.log(commentData);
    console.log('data fethed successfully');
    } catch (error) {
        console.error('Data has error',error);
    }
}

getAllData()