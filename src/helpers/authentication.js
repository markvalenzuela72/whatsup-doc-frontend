function isLoggedIn(){
  return localStorage.getItem("token") !== null & localStorage.getItem("token") !== 'undefined';
}
function isRegistered(){
  return localStorage.getItem("userId") !== null & localStorage.getItem("userId") !== 'undefined';
}
function userLogout(){
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("userId");
}
function saveUser({token, name, _id}){
  console.log(_id)
  localStorage.setItem("token", token);
  localStorage.setItem("name", name);
  localStorage.setItem("userId", _id);
}
function getToken(){
  if (isLoggedIn()){
    return localStorage.getItem("token");
  }
}
function userInfo(){
  if (localStorage.getItem("name") !== null){
    return {
      full_name: localStorage.getItem("name")
    }
  }
  return null;
  
}
export {
  isLoggedIn,
  isRegistered,
  saveUser,
  userInfo,
  userLogout,
  getToken
}