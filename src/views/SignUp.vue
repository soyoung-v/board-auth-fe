<script setup>
import { reactive } from 'vue';
import userServices from '@/services/userServices';


const state = reactive({
  signup: {
    uid: '',
    upw: '',
    nm: '',
    gender: 2
  },
  checkPw: ''
});

const doSignUp = async () => {
  if(state.signup.upw !== state.checkPw){
  alert('비밀번호를 확인해 주세요')
  return;
  }
  const result = await userServices.signUp(state.signup);
  console.log('result: ', result);
}
</script>

<template>
<h3>회원 가입</h3>
<div><label>아이디:  <input type="text" v-model="state.signup.uid"></label></div>
<div><label>비밀번호:  <input type="password" v-model="state.signup.upw"></label></div>
<div><label>확인비밀번호:  <input type="password" v-model="state.checkPw"></label></div>
<div><label>이름:  <input type="text" v-model="state.signup.nm"></label></div>
<div>
    성별:
    <label>여성<input type="radio" value="2" v-model="state.signup.gender"></label>
    <label>남성<input type="radio" value="1" v-model="state.signup.gender"></label>
</div>
<div><button @click="doSignUp">회원가입</button></div>
</template>

<style scoped>

</style>