<template>
    <div>

      
		<section class="loginform">
	        <div class="container">
		        <div class='row'>
			        
			          <div class='col-md-8 offset-md-2 '>
						  
						  
						  <div class="alert alert-primary" role="alert">
							  已經有帳號？<a href='/users/signin'>按此</a>立即登入
						  </div>
						  
			          </div>
			        
			        
			          <div class='col-md-12 text-center'>
			           <h1>註冊</h1>
			          </div>
			          
					   <div class='col-md-8 offset-md-2 '>
						  <div class="form-group">
						    <label>你的電郵</label>
						    <input type="email" v-model="email" class="form-control" >
			
						  </div>
						  <div class="form-group">
						    <label>密碼</label>
						    <input type="password" v-model="password" class="form-control" >
						  </div>
						  <small id="emailHelp" class="form-text text-muted">*當你按下「註冊」，代表你同意並接受我們的 <a href='/users/signin'>使用條款</a></small>
						  <button @click.prevent="register" type="submit" class="btn btn-primary">註冊</button>
  
						
					  </div>
		        </div>
	        </div>
		</section>

    </div>
</template>


<script setup>

    const runtimeConfig = useRuntimeConfig();
	const route = useRoute();

    const email = ref('');
    const password = ref('');
	
    const register = async () => {
        
        if (email.value && password.value){
        const {data, error} = await useFetch(runtimeConfig.public.apiBase + 'auth/register',
        {
        method :'post',
        body:{
            'email':email.value,
            'password':password.value
            }
        }
        );
        if (data.value){alert('Registration is successful. Please check your email.');
            window.location.href = '/';
        }
        else if (error.value){alert(error.value.data.message)}

        }

        else {alert('Please fill in all the fields.')}
    }

</script>