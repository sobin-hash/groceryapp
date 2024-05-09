import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }





  
  BASE_URL = "https://groceryserver.onrender.com"


  

  userLogin(data:any){
    return this.http.post(`${this.BASE_URL}/login`,data)

  }


  getAllItems(){
    return this.http.get(`${this.BASE_URL}/getallitems/`,this.appendTokenToHeader())
  }
 

  addItem(data:any){

    return this.http.post(`${this.BASE_URL}/additem`,data,this.appendTokenToHeader())
    
  }
      
    
  editItem(data:any,id:any){
    return this.http.post(`${this.BASE_URL}/edititem/${id}`,data,this.appendTokenToHeader())
    
  }

  deleteItem(id:any){
        return this.http.delete(`${this.BASE_URL}/deleteitem/${id}`,this.appendTokenToHeader())
    
      }



  getSpecificItem(id:any){
    return this.http.get(`${this.BASE_URL}/getspecificitem/${id}`,this.appendTokenToHeader())
  }

  appendTokenToHeader(){
        const token = localStorage.getItem("token")
      
        let headers = new HttpHeaders()
        if(token){
          headers = headers.append("Authorization",`Bearer ${token}`) 
        }
        return {headers}    
    
    
      }

}



// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
  

//   BASE_URL="https://blogapporgserver.onrender.com"
//   // BASE_URL = "http://localhost:3000"
//   constructor(private http:HttpClient) { }

//   userRegister(data:any){
//     return this.http.post(`${this.BASE_URL}/register-user`,data)

//   }

//   userLogin(data:any){
//     return this.http.post(`${this.BASE_URL}/login`,data)

//   }
//   userProfileUpdate(data:any){
//     return this.http.put(`${this.BASE_URL}/editprofile`,data,this.appendTokenToHeader())

//   }

//   getSpecificBlogHome(id:any){
//     return this.http.get(`${this.BASE_URL}/getspecificblog/${id}`,this.appendTokenToHeader())
//   }

//   getUserProfile(){
//     return this.http.get(`${this.BASE_URL}/getuserprofile`,this.appendTokenToHeader())
//   }

//   getUserBlogs(){
//     return this.http.get(`${this.BASE_URL}/getuserblogs/`,this.appendTokenToHeader())
//   }
 

//   createBlog(data:any){
//     return this.http.post(`${this.BASE_URL}/postblog`,data,this.appendTokenToHeader())

//   }

//   editBlog(data:any,id:any){
//     return this.http.post(`${this.BASE_URL}/editblog/${id}`,data,this.appendTokenToHeader())

//   }

//   addComment(data:any,id:any){
//     return this.http.post(`${this.BASE_URL}/addcomment/${id}`,data,this.appendTokenToHeader())

//   }

//   deleteBlog(id:any){
//     return this.http.delete(`${this.BASE_URL}/removeblog/${id}`,this.appendTokenToHeader())

//   }

//   deleteAllBlog(id:any){
//     return this.http.delete(`${this.BASE_URL}/removeallblog/${id}`,this.appendTokenToHeader())

//   }

//   getAllBlog(){
//     return this.http.get(`${this.BASE_URL}/getallblogs`,this.appendTokenToHeader())

//   }

//   getSpecificUserBlog(id:any){
//     return this.http.get(`${this.BASE_URL}/getuserblogs/${id}`,this.appendTokenToHeader())

//   }
  

//   getAllUser(){
//     return this.http.get(`${this.BASE_URL}/getallusers`,this.appendTokenToHeader())

//   }

//   removeUser(id:any){
//     return this.http.delete(`${this.BASE_URL}/removeuser/${id}`,this.appendTokenToHeader())

//   }


//   appendTokenToHeader(){
//     const token = sessionStorage.getItem("token")
//     // console.log(JSON.parse(token),"from service")
//     let headers = new HttpHeaders()
//     if(token){
//       headers = headers.append("Authorization",`Bearer ${token}`) //to avoid ""
//     }
//     return {headers}       //directly making it as object to avoid this --//headers:this.appendTokenHeader()


//   }

//   isLoggedIn(){
//     return !!sessionStorage.getItem("existingAdmin")
//     //to get boolean value we use !!
//   }
  
//   isLoggedInUser(){
//     return !!sessionStorage.getItem("existingUser")
//     //to get boolean value we use !!
//   }




// }
