<template>
    <div>

		<section class="loginform">
	        <div class="container">
		        <div class='row'>
			        
			          <div class='col-md-8 offset-md-2 '>
						  
						  
						  <div class="alert alert-primary" role="alert">
							  還沒有帳號嗎？<a href='/users/signin'>按此</a>立即註冊
						  </div>
						  
			          </div>
			        
			        
			          <div class='col-md-12 text-center'>
			           <h1>登入</h1>
			          </div>
			          
					   <div class='col-md-8 offset-md-2 '>
						  <div class="form-group">
						    <label>電郵</label>
						    <input type="email" class="form-control" v-model = "email">
			
						  </div>
						  <div class="form-group">
						    <label>密碼</label>
						    <input type="password" class="form-control" v-model = 'password'>
						  </div>
						  <small id="emailHelp" class="form-text text-muted">忘記密碼？ <a href='/users/forgotpassword'>按此</a>重新設定密碼</small>
						  <button @click.prevent="login" type="submit" class="btn btn-primary">登入</button>
  
						
					  </div>
		        </div>
	        </div>
		</section>

    </div>
</template>



<script setup>

	definePageMeta({
		middleware:["noauth"]
	})

    const runtimeConfig = useRuntimeConfig();
	const route = useRoute();

    const email = ref('');
    const password = ref('');
	
    const login = async () => {
        
        if (email.value && password.value){
        const {data, error} = await useFetch(runtimeConfig.public.apiBase + 'auth/login',
        {
        method :'post',
        body:{
            'email':email.value,
            'password':password.value
            }
        }
        );
        if (data.value){
		  alert('Login is successful.');
          useSetSession(data.value);
		  window.location.pathname = '/';
        }
        else if (error.value){alert(error.value.data.message)}

        }

        else {alert('Please fill in all the fields.')}
    }

</script>