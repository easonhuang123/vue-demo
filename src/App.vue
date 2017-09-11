<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body,div,ul,li,p,i,dl,dt,span,a,h1,h2,h3,h4,h5,h6,img,input,button,textarea,label{
	padding: 0;
	margin: 0;
	font: normal 100% Microsoft YaHei,Helvetica Neue,Helvetica,STHeiTi,sans-serif;
}
body{
	font: normal 16px Microsoft YaHei,Helvetica Neue,Helvetica,STHeiTi,sans-serif;
}
button{
	background: none;
	border: none;
}
img{
	border: none;
}
input,textarea{
	border: none;
}
a{
	text-decoration: none;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in below version 2.1.8 */
{
    opacity: 0
}
</style>
