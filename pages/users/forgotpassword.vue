<template>
    <div>

        
		<section class="loginform">
	        <div class="container">
		        <div class='row'>
			        
			       
			        
			        
			          <div class='col-md-12 text-center'>
			           <h1>忘記密碼</h1>
			           
			          </div>
			          
					   <div class='col-md-8 offset-md-2 '>
						  <div class="alert alert-primary" role="alert">

						  	請輸入與您的帳號關聯的電子信箱地址，我們會透過電子郵件向你寄送重設密碼的連結。
						  
						  </div>
						  <div class="form-group">
						    <label>你的電郵</label>
						    <input type="email" class="form-control" v-model="email">
			
						  </div>
					
						  <button @click.prevent="forgotpassword" type="submit" class="btn btn-primary">提交</button>
  
						
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
    
    const forgotpassword = async () => {
        
        if (email.value ){
        const {data, error} = await useFetch(runtimeConfig.public.apiBase + 'auth/forgot-password',
        {
        method :'post',
        body:{
            'email':email.value,
            }
        }
        );
        if (data.value){
		  alert('Please check your email to reset password.');
          window.location.pathname = '/';
        }
        else if (error.value){alert(error.value.data.message)}

        }

        else {alert('Please fill in all the fields.')}
    }

</script>