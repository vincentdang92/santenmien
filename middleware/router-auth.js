export default function ({ app, redirect, store }) {
    
    const cookieRes = app.$cookies.get('userToken');
    console.log(cookieRes,'cookieRes');
    if(!cookieRes){
        app.$cookies.set('returnUrl','santenmien.nhanhoa.com',{
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