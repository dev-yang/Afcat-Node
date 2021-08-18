var users = {};

if(document.cookie &&document.cookie !=''){
    const getCookies = document.cookie.slice(5).split(',');

    getCookies.map((item,index)=>{
            users[item.split('=')[0]] = item.split('=')[1];
})

} 


export default users;