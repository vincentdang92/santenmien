export default function ({ app, redirect, store, route }) {
    
    const cookieRes = app.$cookies.get('userToken');
    const path = 'santenmien.nhanhoa.com/'+route.path;
    console.log(path,'path');
    if(!cookieRes){
        app.$cookies.set('returnUrl',path,{
            path:'/',
            domain:'.nhanhoa.com',
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'strict'
            
        });
        
        redirect('https://id.nhanhoa.com/')
    }
    else{
        store.dispatch('auth/setToken',cookieRes);
    }
  }