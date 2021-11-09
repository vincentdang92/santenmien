export default function ({ app, redirect, store, route }) {
    
    const cushash = app.$cookies.get('cushash');
    const cusid = app.$cookies.get('cusid');
    const path = 'santenmien.nhanhoa.com/'+route.path;
    console.log(path,'path');
    if(!cushash || cushash.length == 0 || !cusid || cusid.length == 0){
        app.$cookies.set('returnUrl',path,{
            path:'/',
            domain:'.nhanhoa.com',
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'strict'
            
        });
        
        //redirect('https://id.nhanhoa.com/')
        if(app.$cookies.get('returnUrl')){
            redirect('/dang-nhap.html');
        }
    }
    else{
        store.dispatch('auth/setToken',{
            cusHash: cushash,
            cusId: cusid
        });
    }
  }