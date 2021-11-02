export default function ({ app, redirect }) {
    
    const cookieRes = app.$cookies.get('userToken');
    console.log(cookieRes,'cookieRes');
    if(!cookieRes){
        app.$cookies.set('returnUrl','santenmien.nhanhoa.com',{
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
        redirect('https://id.nhanhoa.com/')
    }
  }