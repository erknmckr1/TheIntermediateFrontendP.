import axios from "axios";
const url = "https://jsonplaceholder.typicode.com";

const getData = async (number) => {
  
   // asenkron fonksıyonlar ıcın kullandıgımız tyy-catch bloklarını hata yonetımı ıcın kullandık.
  try{
   // destructuring yöntemiyle gelen veriyi user parametresıne atadık ve data özelliğini aldık. {data:user}
   const { data: user } = await axios(`${url}/users/${number}`);
   const { data: post } = await axios(`${url}/posts?userId=${number}`);

   let data = {
      "User":user,
      "Posts":post
     };

     return console.log(data);
  }catch(e){
   return console.log(e)
  }
  

  
  
  
};

export default getData;
