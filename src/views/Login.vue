<script setup lang="ts">
import { useRouter } from 'vue-router';
import { userStore } from '../store/user';


const router = useRouter();

if (userStore.isLoggedIn()) {
    router.push('/');
}

const navigateToSignup = () => {
    router.push('/signup');
};

const onSubmit =  async (e: Event) => {
    e.preventDefault();
    const f = new FormData(e.target as HTMLFormElement);

    const email = f.get('email') + "";
    const password = f.get('password') + "";

    console.log(email, password);

    await userStore.login(email, password);
    console.log(userStore.token, userStore.isLoggedIn());
    
    router.push('/');
};

</script>

<template>

<section class="flex flex-col md:flex-row min-h-[calc(100vh-4rem)] items-center">
    <div class="bg-[url('../../public/img/OIG.png')]  hidden lg:block w-full md:w-1/2 xl:w-1/2 min-h-[calc(100vh-4rem)]">

    </div>
      
    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/2 min-h-[calc(100vh-4rem)] px-6 lg:px-16 xl:px-12 flex items-center justify-center">
      
      <div class="w-2/3 h-100" >
        
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
              Se connecter
          </h1>
      
          <form class="mt-6" action="#" method="POST" @submit="onSubmit">
              <div>
                  <label class="block text-gray-700">Adresse e-mail</label>
                  <input type="email" name="email" id="" placeholder="Entrez votre adresse e-mail"
                      class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none"
                      autofocus required />
              </div>
      
              <div class="mt-4">
                  <label class="block text-gray-700">Mot de passe</label>
                  <input type="password" name="password" id="" placeholder="Entrez votre mot de passe" minlength="0"
                      class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none"
                      required />
              </div>
      
              <div class="text-right mt-2">
                  <a href="#" class="text-sm font-semibold text-gray-700 hover:text-primary focus:text-primary">Mot de passe
                      oublié ?</a>
              </div>
      
              <button type="submit"
                  class="w-full block bg-primary hover:bg-primary focus:bg-primary text-white font-semibold rounded-lg px-4 py-3 mt-6 ">
                  Connexion
              </button>
          </form>
      
          <p class="mt-8">
                Besoin d'un compte?
                <a class="text-primary hover:text-primary font-semibold  cursor-pointer" @click="navigateToSignup" >S'inscrire</a>
           </p>
      </div>

    </div>
  </section>
    
</template>
