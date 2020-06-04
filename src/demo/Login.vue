<template>
  <section class="container-fluid">
      
      <div class="row justify-content-center">
          <div class="col-lg-4">
              <div class="login-panel  text-left">
                  <div class="alert alert-primary" role="alert" :style="{opacity: isAlertShow ? 1:0}">
                      Login Successfully....<small>Waiting for redirect..</small>
                      <Loadingcomponent width='40'></Loadingcomponent>

                  </div>
            <div>
                <img src="https://media-exp1.licdn.com/dms/image/C560BAQGsLdI_nNslkA/company-logo_200_200/0?e=2159024400&v=beta&t=ZoCaIPoHggSe3bBGS8AsqxlAa7RXkQmeyQETvzAZC5g"  width="100px" height="100px" align="center" opacity="0.9">
                  <h1 class="display-4 font-width-bold">Login</h1>
                  <p class="font-width-auto" >Welcome back</p>
                  </div>
                  <br>
                  <form action="">
                      <div class="form-group">
                          <label form="email" class="input-label">Email</label>
                          <input type="email" class="form-control" placeholder="Email">
                      </div>
                      <div class="form-group">
                          <label form="password" class="input-label">Password</label>
                          <input type="password" class="form-control" placeholder="Password">
                      </div>
                      <div class="form-group d-flex justify-content-center">
                         <button class="btn btn-primary width-25" @click="login" v-if="!isLoggingIn">Login</button>
                         <button class="btn btn-primary width-25" disabled v-if="isLoggingIn"><Loadingcomponent width='40'></Loadingcomponent>Login</button>
                      </div>
                  </form>

              </div>
          </div>
       </div>
</section>
</template>

<script>
import Loadingcomponent from '../_demo/Loadingcomponent'
export default {
    components: { Loadingcomponent},
    data() {
        return {
            isLoggingIn:false,
            isAlertShow:false

        }
    },
    methods: {
        login() {
            this.isLoggingIn = true

            setTimeout(() => {
                this.isLoggingIn=false
                this.isAlertShow=true
                setTimeout(() => this.redirect(), 1000)

            },1000)
        },
        redirect() {
            this.$router.push({name:'home'})

        }
    }


}
</script>


<style lang="scss">
.widget {
    margin: 0;
    height: unset;
}
.login-panel {
    padding: 200px 0;
    position: relative;
    .alert {

        position: absolute;
        top:100px;
        width:500px;
        &.alert-primary {
            background-color: #007bff;
            color:#fff;
            border: none;
            font-size: 18px;
        }
        .widget {
            position: absolute;
            right:5px;
            top:0;
            margin: 10pxs;
        }
        .img
        {
            border-radius: 50px;
        }
    }


}

</style>