<script setup>
import userServices from '@/services/userServices';
import { reactive } from 'vue';


const state = reactive({
  modeShowPw: false,
  signin: {
    uid: '',
    upw: ''  
  }
});

const iseeyou = () => {
  state.modeShowPw = !state.modeShowPw
}

const signIn = async () => {
  const result = await userServices.signIn(state.signin)
  console.log('result: ', result)
}
</script>

<template>
<h3>로그인</h3>
<div><input type="text" placeholder="아이디" v-model="state.signin.uid"></div>
<div><input :type="state.modeShowPw ? 'text' : 'password'" placeholder="비밀번호" v-model="state.signin.upw"><button @click="iseeyou">비밀번호 보기</button></div>
<div><button @click="signIn">로그인</button></div>
</template>

<style scoped>

</style>