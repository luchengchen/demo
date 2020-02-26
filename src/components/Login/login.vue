<template>
  <div :style="backgroundDiv" class="body">
    <div class="login-Info">
      <h2><span class="welcome-tips">您好!</span>欢迎来到数矿管理平台</h2>
      <div id="userName">
        <a-icon type="user" />
        <input type="text"  ref='userName'/>
      </div> 
      <div id="password">
        <a-icon type="lock" />
        <input type="password" ref='password'/>
      </div>
      <div>
       <a-button 
         type="primary" 
         :loading=Isload
         @click="loginIn()"
        >登录
       </a-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      backgroundDiv: {
      backgroundImage:'url(' + require('../../assets/images/background.png') + ')',
      backgroundRepeat:'no-repeat',
      backgroundSize:'100% 100%',
      },
      Isload:false
    }
  },
  methods:{
     loginIn(){
       let _this=this;
      //获取用户名和密码
        let userName=this.$refs.userName.value;
        let password=this.$refs.password.value;
        let objdata= {};
        objdata.userName=userName;
        objdata.password=password;
      //判空
        if(userName==""||userName==null){
           this.$message.info('用户名不能为空!');
           return false;
        }
        if(password==""||password==null){
           this.$message.info('密码不能为空!');
           return false;
        }
        //登录成功
        this.Isload=true;
        this.$message.info('登录成功!正在跳转主页...');
        this.Isload=false;
        setTimeout(() =>{
          this.$router.push({path: '/Index'});
        },3000);
        
       /* axios.post(API.urlbase+'/servlet/skyNetServlet',qs.stringify({
          classname:"org.marker.weixin.servletJson.tw.ClimApi",
          methodname:"getUserMedalDetail",//
          json:JSON.stringify(objdata),  }),{
          headers: {

          },
          withCredentials: false
        })
        .then(response=>{
          _this.ucont = response.data;
        },err =>{
          console.log(err)
        })*/
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body{
    position: fixed;
    width: 100%;
    height: 100%;
    font-family: arial, "Microsoft Yahei", 微软雅黑;
  }
  .login-Info {
    position: fixed;
    right: 20%;
    top: 30%;
    width: 350px;
    height: 350px;
    padding: 60px 30px;
    background: #ffffff;
    box-shadow: 9px 10px 10px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    letter-spacing: 2px;
  }
  .welcome-tips {
    letter-spacing: 2px;
    border-bottom: 2px solid #40a9ff;
    padding-bottom: 5px;
  }
  h2 {
    margin-bottom: 35px;
  }

  .login-Info >div:not(:last-child) {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size:1.3em;
    margin-bottom: 25px;
    padding: 0 10px;
    background: rgba(0, 0, 0, 0.04);
    box-shadow: 1px 1px 1px #d9d9d9, -1px -1px 1px #fff;
  }
  .login-Info >div:last-child {
    text-align: center;
    width:100%;
  }
   .login-Info >div >button {
     width: 100%;
     border-radius: 20px;
     height: 40px;
     line-height: 40px;
     border: none;
     background: linear-gradient(to right, #1890ff ,  #a35cd8);
   }
  .login-Info >div >input {
    height: 30px;
    line-height: 30px;
    padding-left: 5px;
    border: none;
    background: none;
  }
</style>
