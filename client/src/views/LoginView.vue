<script>
import { RouterLink, RouterView } from 'vue-router'


export default {
    components: {
        RouterLink
    }
}
</script>
<template>
<header>
        <div class="content px-12 py-2">
            <div class="body mt-20 mx-12" style="margin-top: 32vh">
                <div class="md:flex items-center justify-between">
                    <div class="w-full md:w-1/2 mr-auto" style="text-shadow: 0 20px 50px hsla(0,0%,0%,8);">
                        <h1 class="text-4xl font-bold text-white tracking-wide">Pray</h1>
                        <h2 class=" text-2xl font-bold text-white tracking-wide">Shalom Saudara-saudari terkasih</h2>
                        <p class="text-gray-300">
                                Mari meluangkan waktu sejenak setiap hari untuk memberikan kita motivasi kepada diri sendiri. Belajar merefleksikan diri dari firman Tuhan. Mendengarkan pesan Allah kepada kita hari ini. Mendatangkan hari sejaterah di hari kita. Daftar diri agar kami dapat membantu anda dekat menjadi lebih baik lagi.
                        </p>
                        <span class="text-white">Create New Account?<RouterLink to="/register" class="text-gray-900 text-lg ml-2 font-bold">Sign Up</RouterLink></span>
                    </div>
                    <div class="w-full md:max-w-md mt-6">
                        <div class="card bg-white shadow-md rounded-lg px-4 py-4 mb-6 ">
                            <form action="#">

                                <h2 class="text-xl text-center font-semibold text-gray-800 mb-2">
                                    Sign In
                                </h2>
                                <input type="text" class="rounded px-4 w-full py-1 bg-gray-200  border border-gray-400 mb-6 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none" placeholder="Email Address">
                                <input type="password" class="rounded px-4 w-full py-1 bg-gray-200  border border-gray-400 mb-4 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none" placeholder="Password">
                                <div class="flex items-center justify-between">
                                    <a href="#" class="text-gray-600">Forget Password?</a>
                                     <div id="buttonDiv"
                                            data-client_id="YOUR_GOOGLE_CLIENT_ID"
                                            data-login_uri="https://your.domain/your_login_endpoint"
                                            data-auto_prompt="false" >
                                     </div>
                                    <RouterLink to="/" class="bg-gray-800 text-gray-200  px-2 py-1 rounded">Sign In</RouterLink>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>