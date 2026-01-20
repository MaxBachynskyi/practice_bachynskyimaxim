export const login = {
    data:function(){
        return {
            img:1,
            hs:0,
            parent:''
        }
    },
    mounted:function(){

    },
    methods:{

    },
    template: `
    <div class="flex" style="height:100%">
        <div class="login-box">
            <h1>Login</h1>
            <input type="text" placeholder="Логін">
            <input type="password" placeholder="Пароль">
            <button>Війти</button>
        </div>
    </div>
    `
}